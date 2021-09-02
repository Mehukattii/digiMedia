$('button').click(function(){
    $('img').show();
    $('#advice').text('select your favourite color among the colors');
    $('#sel').text('select your favourite color among the colors');

    $('img').each(function(){
        $(this).attr('src', $(this).data('color') + '.jpg');
    });
});



$('img').click(function(){
    $('ul').append('<li>' + $(this).data('color') + '</li>');
    $(this).hide();
});

