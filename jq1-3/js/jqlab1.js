$('p:eq(1)').attr('id', 'yeet');
$('#fp').remove();
$('#fdiv').css(
    {
        backgroundColor : 'grey',
        color : 'white'
    }
);


/*$(document).ready(function() {
	$("button").click(function() {
		$('p:last').before('<p>Hello user</p>');   
	});
 });*/



 /*function hello(){
     $('#yeet').after('<p> Hello user</p>');
 }

 $('#nappi').click(hello);

 $('#4p').hide();

 $('#sdiv').hover(
    function(){
        $('#4p').text('About to select a link...').show();
       },
       function(){
           $('#4p').hide();
       }
 );*/

 function sayHello(){
    $('#yeet').after('<p id="tp">Hello user<p/>');
}

$('#nappi').click(sayHello);

$('#4p').hide();
console.log($('#sdiv'));
$('#sdiv').hover(
    function(){
        $('#4p').text('About to select link').show();
    },
    function(){
        $('#4p').hide();
    }
)
    

 