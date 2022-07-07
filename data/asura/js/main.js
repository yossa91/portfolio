$(function(){
$(window).resize(function(){
  var size=$(window).width();

if(size>1023){//웹
//대문,기타 윈도우창에 맞춰 활성화
$('header').css('height',$(window).height());
$('#title').css('top',($(window).height()-$('#title').height())/2);
$('#introduce,#addr').css('padding-top',($(window).height()/3));
$('#introduce,#addr').css('padding-bottom',($(window).height()-($('#introduce').height()))/2);
var hei=$('#nev').height()+$('footer').height();
$('#inquiry').css('height',$(window).height());



//상단메뉴 고정, 슬라이드 메뉴
$(window).ready(function(){
  var move = $('#nev').offset();
  $(window).scroll(function(){
    if($(document).scrollTop()>move.top){
      $('#nev').addClass('fix');
    }else{
      $('#nev').removeClass('fix');
    }
  });
});

  $('#submenu').hide();
  $('.product').mouseover(function(){
    $('#submenu').stop().slideDown('fast');
  });
  $('#nev').mouseleave(function(){
    $('#submenu').stop().slideUp('slow');
  });

//슬라이드
  $('#slide').css('width',$(window).width());
  $('#slide>img').css('width',$(window).width());
  $('#slide>article').css('left',($(window).width()-$('#slide>article').width())/2);
  $('#slide>img').eq(3).fadeIn();
  $('#slide>article').eq(3).fadeIn();
var i=0;
  setInterval(function(){
    if(i<3){
      $('#slide>img').eq(3).fadeOut();
      $('#slide>img').eq(i).fadeIn();
      $('#slide>img').eq(i-1).fadeOut();
      $('#slide>article').eq(3).fadeOut();
      $('#slide>article').eq(i).fadeIn();
      $('#slide>article').eq(i-1).fadeOut();
      i++;
  }else{
    $('#slide>img').eq(2).fadeOut();
    $('#slide>img').eq(3).fadeIn();
    $('#slide>article').eq(2).fadeOut();
    $('#slide>article').eq(3).fadeIn();
    i=0;
  }
},3000);


//popup 사이즈
$('#product>div>div').css('height',$(window).height());
$('#product>div>div>article').css('top',($(window).height()-$('#product>div>div>article').height())/2);
$('#product>div>div>article').css('left',($(window).width()-$('#product>div>div>article').width())/2);

// $(window).resize(function(){
//   location.reload();
// });

//popup 클릭시 팝업실행
$('#product>div>article img').click(function(){
  var i=$('#product>div>article img').index(this);
  $(this).closest('div').children('.pp').show();
  $(this).parents('div').find('.pp article').eq(i).show();
});

  //popup 팝업내에 이미지 클릭 이벤트
  var k=1;
  $('#product>div>div>article>aside img').click(function(){
    var i=$('#product>div>div>article>aside img').index(this);
  $('#product>div>div>article>section img').eq(i).css('z-index',k++);
  });
  //popup 팝업내에 닫기버튼 클릭 이벤트
  $('#product>div>div>article>a').click(function(){
    $('#product>div>div>article').hide();
      $('#product>div>div').hide();
  });


//메뉴 링크
  var m1= $('#introduce').offset();
  var m2= $('#product').offset();
  var m3= $('#addr').offset();
  var m4= $('#inquiry>article').offset();

  $('#menu1').click(function(){
    $('html, body').animate({scrollTop:m1.top},400);
  });
  $('#menu3').click(function(){
    $('html, body').animate({scrollTop:m3.top+($('#product').height())},400);
  });
  $('#menu4').click(function(){
      $('html, body').animate({scrollTop:m4.top+($('#product').height())},400);
  });



  $('#sub1').click(function(){
    $('.bracelet').slideDown();
    $('html, body').animate({scrollTop:m2.top},400);
    $('#product div').not('.bracelet').hide();
  });
  $('#sub2').click(function(){
    $('.necklace').slideDown();
    $('html, body').animate({scrollTop:m2.top},400);
    $('#product div').not('.necklace').hide();
  });
  $('#sub3').click(function(){
    $('.earring').slideDown();
    $('html, body').animate({scrollTop:m2.top},400);
    $('#product div').not('.earring').hide();
  });
  $('#sub4').click(function(){
    $('.ring').slideDown();
    $('html, body').animate({scrollTop:m2.top},400);
    $('#product div').not('.ring').hide();
  });
}
else if(size<767){
  $('header').css('background-color','#fff');
}
else {
  $('header').css('background-color','#ff7788');
}

});//resize


});
