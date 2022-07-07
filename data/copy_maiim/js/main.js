$(function(){

//alert('test');

//fixmenu고정메뉴 클릭시 css추가---------------
$('#fixmenu>.middle ul:first-child li a').click(function(){
  $('#fixmenu>.middle ul:first-child li a').removeClass('ck');
  $(this).addClass('ck');
});


//homemenu부분 hotLine 롤링 링크---------------
  var hei = $('.hotLine ul>li>a').height();
  var max = hei*3;
  var i=0;
  function hotline(){
    i += hei;
    $('.hotLine>ul').animate({'margin-top': -i},1000,function(){
      if(i>=max){
        $('.hotLine>ul').css('margin-top',0);
        i=0;
      };
    });
  };
  setInterval(hotline,2000);
  $(".hotLine>ul").append($(".hotLine>ul>li:eq(0)").clone());//리스트 복사

  //slidemenu 이벤트---------------
  $('.mainslideMenu>ul li').mouseover(function(){
      $('.subslideMenu').stop().slideDown('fast');
      $('.mainslideMenu').addClass('topShadow');
      $('.subslideMenu').addClass('bottomShadow');
  });
  $('#slidemenu').mouseleave(function(){
      $('.subslideMenu').stop().slideUp();
      $('.mainslideMenu').removeClass('topShadow');
      $('.subslideMenu').removeClass('bottomShadow');
  });

  //slidemenu내 검색버튼 이벤트---------------
  $('.search').click(function(){
    $('.searchBox').fadeIn('fast');
  });
  $('#contaner,#fixmenu,#homemenu').click(function(){
    $('.searchBox').fadeOut('fast');
  });

  //콘텐츠부분 brandImgCon 마우스액션---------------
  $('.brandImgCon ul').mouseover(function(){
    $(this).find($('.brandImg')).stop().animate({'top':'0','opacity':'1'},300);
  });
  $('.brandImgCon ul').mouseleave(function(){
    $(this).find($('.brandImg')).stop().animate({'top':'50px','opacity':'0'},300);
  });

  //콘텐츠부분 productsSlide 좌우 슬라이드메뉴---------------
  var slide = $('.productsSlide a');
  var cnt = $('.productsSlide a').length-1;
  var ttt = 0;
  slide.eq(0).css('opacity',1);

  $('.right').click(function(){
    if(ttt<cnt){
      ++ttt;
      slide.eq(ttt).animate({'opacity':'1'},500);
    };
  });
  $('.left').click(function(){
    if(ttt>0){
      slide.eq(ttt).animate({'opacity':'0'},500);
      --ttt;
    };
  });

  //footer 사이트 링크 이벤트 ---------------
  $('.siteLink>a').click(function(){
    $('.siteLink>ul').slideDown(300);
  });
  $('.siteLink').mouseleave(function(){
    if($('.siteLink>ul').height()>0){
      $('.siteLink>ul').slideUp(100);
    };
  });









});
