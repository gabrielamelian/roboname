$(document).ready(function () {

    function getRobot() {
        var randomHash = Math.random().toString(36).substring(7);
        return "https://robohash.org/" + randomHash;
    }

    console.log(getRobot());

    function generateBoard () {
        var boardSize = Number(document.userBoard.boardsize.value) || 4;
        for (var a = 0; a < boardSize; a++) {
            for (var b = 0; b < boardSize; b++) {
                board.cells.push({
                    col: a,
                    row: b,
                    isMine: Boolean(Math.floor(Math.random() * 1.2)),
                    isMarked: false,
                    hidden: true
                })
            }
        }
    }

    for (var i = 0; i < 21; i++) {
        $('#board').append('<img src="' + getRobot() + '">');
    }

});