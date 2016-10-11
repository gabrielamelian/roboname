$(document).ready(function () {

    function getRobot() {
    $.ajax({
       url: 'https://robohash.p.mashape.com/index.php',
       data: {
          format: 'json'
       },
       error: function() {
          $('#board').html('<p>An error has occurred</p>');
       },
       dataType: 'json',
       success: function(data) {
          var roboObject = data;
          var $robot = $('<img src=">').text(roboObject.imageURL);
          $('#1')
             .replaceWith($quote + '">');
       },
       beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "NWp9T0eaFEmsh8glExwzYkerHQrCp1jNYEajsnCdl7zVX7LXVG");
       }
    });
}

});