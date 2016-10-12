$(document).ready(function () {

    function getRobot() {
        $.ajax({
           url: 'https://robohash.p.mashape.com/index.php',
           data: {
              format: 'json'
           },
           error: function() {
                console.log("an error has occured")
                $('#board').html('<p>An error has occurred</p>');
           },
           dataType: 'json',
           success: function(roboObject) {
              console.log(roboObject);
              var robot = roboObject.imageUrl;
              console.log(robot);
              return robot;
           },
           beforeSend: function(xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "NWp9T0eaFEmsh8glExwzYkerHQrCp1jNYEajsnCdl7zVX7LXVG");
           }
        });
    }

    for (var i = 0; i < 31; i++) {
        $('#' + i).replaceWith('<img src="' + getRobot() + '">');
    }

});