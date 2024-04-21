$(document).ready(function(){   
    $('img').click(function() {
        var hiddenImage = $(this).attr('data-alt-src');
        $(this).attr('src',hiddenImage);
    });
    $('#ready').click(function(){
        location.reload();
    })
});