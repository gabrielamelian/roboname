$(document).ready(function () {

    function getRobot() {
        var randomHash = Math.random().toString(36).substring(7);
        return "https://robohash.org/" + randomHash;
    }

    console.log(getRobot());

    for (var i = 0; i < 31; i++) {
        $('#' + i).replaceWith('<img src="' + getRobot() + '">');
    }

});