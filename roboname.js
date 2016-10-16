$(document).ready(firstGame);

//Initialize board object
var board = {
    cells: []
}

//Array that will contain two of each robot, it gets cleaned every time is used
var roboLinks = [];

//Loads first game when first opened, adds events listeners
function firstGame() {
    startGame();
    $('#gameBoard').on('click', 'img', showRobot);
}

//Initializes the game
function startGame () {
    board.cells = [];
    generateBoard();
    preload(board.cells);
    populateDOM();
}

//Populates the board object
function generateBoard () {
    createRoboLinks();
    for (var i = 0; i < 20; i++) {
        board.cells.push({
            roboNumber: i,
            robotImage: randomOtherRobot()
        })
    }
}

//Creates an array with double images of each robot
function createRoboLinks() {
    for (var i = 0; i < 10; i++) {
        var roboURL = getRobot();
        roboLinks.push(roboURL);
        roboLinks.push(roboURL);
    }
}

//Removes an item containing a link to a robot from the array
function randomOtherRobot () {
    var randomIndex = Math.floor(Math.random() * roboLinks.length);
    return roboLinks.splice(randomIndex, 1);
}

//Add board elements on DOM
function populateDOM() {
    $('#gameBoard').empty();
    for (var i = 0; i < 20; i++) {
        $('#gameBoard').append('<img id="' + i + '" class="hidden" src="styles/images/binary.jpg">');
    }
}

//Generates a random robot URL
function getRobot() {
    var randomHash = Math.random().toString(36).substring(7);
    return "https://robohash.org/" + randomHash;
}

//Pre-load images
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>').attr('src',this.robotImage);
    });
}

//Toggle image to show robot
function showRobot() {
    var buttonId = $(this).attr('id');
    var robot = board.cells.filter(function(element) { return buttonId == element.roboNumber });
    $('#' + buttonId).attr({
        src: robot[0].robotImage,
        class: "flipped"
    });
    playRobot();
}

//Show robot and check if partner already flipped
function playRobot() {
    var activeSource = $(".active").attr('src');
    var flippedSource = $(".flipped").attr('src');
    var hiddenNumber = $(".hidden").length;
    if ($(".active").length === 0) {
        $(".flipped").removeClass("flipped").addClass("active");
    } else {
        if (activeSource === flippedSource) {
            $(".active").removeClass("active").addClass("discovered");
            $(".flipped").removeClass("flipped").addClass("discovered");
        } else {
            $('#gameBoard').off('click', '**');
            setTimeout(turnBackCard, 1000);
        }
    }
    checkForWin();
}

//Card goes back to binary if pair is not found
function turnBackCard() {
    $(".active").attr({
        src: "styles/images/binary.jpg",
        class: "hidden"
    })
    $(".flipped").attr({
        src: "styles/images/binary.jpg",
        class: "hidden"
    })
    $('#gameBoard').on('click', 'img', showRobot);
}

//Function to determine if game is won
function checkForWin() {
    if ($(".hidden").length === 0) {
        animatedWin();
    }
}

//Dialog box to restart game
function animatedWin() {
    $( "#winDialog" ).dialog({
        modal: true,
        width: 355,
        buttons: {
            "Restart Game": function() {
                startGame();
                $( this ).dialog( "close" );
            }
        }
    })
}