$(function(){
var hei = $(window).height();
var typingBox = $('#typing').height();

$('#main').css({height:hei});
$('#typing').css({marginTop:(hei-typingBox)/2});
var i = 0;
for(i=0; i<100; i++){
  $('#main .bgNum').append('<p>'+i+'</p>');
};



$('#typing').t({
speed:90,
blink:300,

});

});
