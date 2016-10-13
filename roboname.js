$(document).ready(function () {

    function getRobot() {
        var randomHash = Math.random().toString(36).substring(7);
        return "https://robohash.org/" + randomHash;
    }

    var board = {
        cells: []
    }

    function generateBoard () {
        for (var i = 0; i < 20; i++) {
            board.cells.push({
                roboNumber: i,
                hiddenImage: '<img src="binary.jpg">',
                robotImage: getRobot(),
            })
        }
    }

    for (var i = 0; i < 20; i++) {
        $('#board').append('<img src="' + getRobot() + '">');
    }

});