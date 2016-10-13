$(document).ready(function () {

    var board = {
        cells: []
    }

    startGame();

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
            $('#board').append('<img src="' + board.cells[i].hiddenImage + '">');
        }
    }
});