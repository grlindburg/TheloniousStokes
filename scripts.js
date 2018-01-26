$(document).ready(function() {
    //$('#face1').delay(500).animate({bottom: '0%'}, 500);
    setInterval(function() {
        $('#face1').delay(500).animate({bottom: '0%'}, 100);
        $('#face1').delay(500).animate({bottom: '-40%'}, 100);
        
    }, 5000);

    setInterval(function() {
        $('#face2').delay(500).animate({bottom: '4%'}, 100);
        $('#face2').delay(500).animate({bottom: '-40%'}, 100);
        
    }, 3000);
});