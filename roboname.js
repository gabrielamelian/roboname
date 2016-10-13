$(document).ready(function () {
    //Initialize board object
    var board = {
        cells: []
    }

    //Call to populate DOM
    startGame();

    //Pre-load images
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>').attr('src',this.robotImage);
        });
    }

    preload(board.cells);

    function getRobot() {
        var randomHash = Math.random().toString(36).substring(7);
        return "https://robohash.org/" + randomHash;
    }

    function generateBoard () {
        for (var i = 0; i < 20; i++) {
            board.cells.push({
                roboNumber: i,
                hiddenImage: "binary.jpg",
                robotImage: getRobot()
            })
        }
    }

    function startGame () {
        generateBoard();
        for (var i = 0; i < 20; i++) {
            $('#board').append('<img id="' + i + '" src="' + board.cells[i].hiddenImage + '">');
        }
        $('#board').on('click', 'img', showRobot);
    }

    function showRobot() {
        var buttonId = $(this).attr('id');
        var robot = board.cells.filter(function(element) { return buttonId == element.roboNumber });
        $('#' + buttonId).attr('src',robot[0].robotImage);
    }
});