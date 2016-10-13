$(document).ready(startGame);

//Initialize board object
var board = {
    cells: []
}


//Initializes the game
function startGame () {
    board.cells.length = 0;
    generateBoard();
    preload(board.cells);
    populateDOM();
    $('#gameBoard').on('click', 'img', showRobot);
    console.log(createRoboLinks());
}

//Populates the board object
function generateBoard () {
    for (var i = 0; i < 20; i++) {
        board.cells.push({
            roboNumber: i,
            hiddenImage: "binary.jpg",
            robotImage: getRobot()
        })
    }
}

//Creates an array with double images of each robot
function createRoboLinks() {
    var roboLinks = [];
    for (var i = 0; i < 10; i++) {
        var roboURL = getRobot();
        roboLinks.push(roboURL);
        roboLinks.push(roboURL);
    }
    return roboLinks;
}

//Add board elements on DOM
function populateDOM() {
    $('#gameBoard').empty();
    for (var i = 0; i < 20; i++) {
        $('#gameBoard').append('<img id="' + i + '" src="binary.jpg">');
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
    $('#' + buttonId).attr('src',robot[0].robotImage);
}
