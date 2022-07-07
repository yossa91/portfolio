$(function(){
  textTyping();
  mobileMove();
  menuClick();
  fixMenuClick();
  menuTop();
  recordSlide();
  hanna();
  wid();
  //콘텐츠 영역의 숫자표시와 크기설정
  var i = 0;
  for(i=0; i<300; i++){
      $('.bgNum').append('<p>'+i+'</p>');
  };
  //순차재생을 위한 하이드~
    $('.tel, .social, .name').hide();
    $('.tel, .social, .name').css({'margin-top':30,'opacity':0});
  $('.certificateTt').hide();
  $('.certificateBox').hide();
  $('.certificateTp').hide();
  $('.recordTp').hide();
  $('.recordTt').hide();
  $('.slide').hide();
  $('.contactTp').hide();
  $('.contacBox').hide();
    $('.tel, .social, .name').hide();
  $('.resultTp').hide();
  $('.resultTt').hide();
  $('.resultBox').hide();
  $('.end').hide();
});


//리사이즈 시 토글버튼으로 가리는 nav 고정
$(window).resize(function(){
  var documentWid = $(document).outerWidth();
  if(documentWid>939){
    $('nav').show();
     wid();
  }if(documentWid<940){
    $('nav').hide();
    $('.resultBox article>p').show();
  }
});

//웹사이즈에서만 resultBox 마우스 오버 이벤트 추가
function wid(){
  var wid = $(document).outerWidth();
  if(wid>939){
    $('.resultBox article>p').hide();
    $('.resultBox article').mouseenter(function(){
      $(this).find('p').stop().fadeIn();
    });
    $('.resultBox article').mouseleave(function(){
      $(this).find('p').stop().fadeOut();
    });
  }
};

//-----------------버튼기능-----------------------
//모바일 nav메뉴버튼 토글
function mobileMove(){
  $('.toggleImg').parent('span').click(function(){
    $('nav').slideToggle('fast');
  });
};

//nav메뉴 클릭시 활성화
function menuClick(){
  $('.subMenu li').click(function(){
    var sMenuIndex = $('.subMenu li').index(this);
    var sMenuClickMove = $('#container>div').eq(sMenuIndex+1).offset().top;
    $('.subMenu li a').removeClass('check');
    $(this).children('a').addClass('check');
    $('body,html').animate({scrollTop:sMenuClickMove-50},300);
    //모바일에서는 클릭시 nav 메뉴창 닫기
    if($(window).width()<600){
      $('nav').slideToggle('fast');
      $('.fixmenuMobile li').hide();
      $('.fixmenuMobile li').eq(sMenuIndex).show();
    }
      return false;
  });
}

//fix메뉴 클릭시 활성화
function fixMenuClick(){
  $('.fixmenuWeb li').click(function(){
    var fMenuIndex = $('.fixmenuWeb li').index(this);
    var fMenuClickMove = $('#container>div').eq(fMenuIndex+1).offset().top;
    $('.fixmenuWeb li').removeClass('menuCheck');
    $(this).addClass('menuCheck');
    $('body,html').animate({scrollTop:fMenuClickMove-30},300);
    return false;
  });
  $('.fixmenuTab li').click(function(){
    var fMenuIndex = $('.fixmenuTab li').index(this);
    var fMenuClickMove = $('#container>div').eq(fMenuIndex+1).offset().top;
    $('.fixmenuTab li').removeClass('menuCheck');
    $(this).addClass('menuCheck');
    $('body,html').animate({scrollTop:fMenuClickMove-70},300);
    return false;
  });
}

//위치에 맞춰 메뉴 활성화
function menuTop(){
  $(window).scroll(function(){
   var scTop = $('body, html').scrollTop();
   $('#container>div').each(function(){
     var tg = $(this);
     var num =tg.index()-1;
     if(tg.offset().top <= (scTop+200)){
       $('.fixmenuWeb li').removeClass('menuCheck');
       $('.fixmenuWeb li').eq(num).addClass('menuCheck');
       $('.fixmenuTab li').removeClass('menuCheck');
       $('.fixmenuTab li').eq(num).addClass('menuCheck');
       $('.fixmenuMobile li').hide();
       $('.fixmenuMobile li').eq(num).show();
     }
   });
  });
};
//슬라이드~
function recordSlide(){
  var moveImg = 0;
  var nowImg = $('#record .slide>img');
  $('#record .slide>img').not(nowImg.eq(0)).css('opacity',0);
  $('.slideDirect .right').click(function(){
    if(moveImg < nowImg.length-1){
    moveImg++;
    $('#record .slide>img').animate({'opacity':0},300);
    $('#record .slide>img').eq(moveImg).animate({'opacity':1},200);
    $('.slideYear>a').removeClass('yearCheck');
    $('.slideYear>a').eq(moveImg).addClass('yearCheck');
    }
    return false;
  });
  $('.slideDirect .left').click(function(){
    if(moveImg > 0){
    moveImg--;
    $('#record .slide>img').animate({'opacity':0},300);
    $('#record .slide>img').eq(moveImg).animate({'opacity':1},200);
    $('.slideYear>a').removeClass('yearCheck');
    $('.slideYear>a').eq(moveImg).addClass('yearCheck');
   }
   return false;
  });
  $('.slideYear>a').click(function(){
    var yearMenu = $('.slideYear>a').index(this);
      moveImg = yearMenu;
      $('.slideYear>a').removeClass('yearCheck');
      $('.slideYear>a').eq(yearMenu).addClass('yearCheck');
      $('#record .slide>img').animate({'opacity':0},200);
      $('#record .slide>img').eq(moveImg).animate({'opacity':1},200);

    return false;
  });
};

//각 타이핑 효과와 그 후 효과
function textTyping(){
  //이벤트 무효화
  $(document).keyup(function(e) {
       if (e.keyCode == 27) {
         $('.certificateTt').show();
         $('.certificateBox').show();
         $('.recordTt').show();
         $('.slide').show();
         $('.contacBox').show();
         $('.resultTt').show();
         $('.resultBox').show();
      }
  });

  $('.timeTp').t({  //날짜타이핑
    speed:40,
    blink:300,
    fin:function(e){
      var Now = new Date();
      var NowTime = Now.getFullYear();
      NowTime += '-' + (Now.getMonth()+1);
      NowTime += '-' + Now.getDate();
     $('.timeTp').hide();
     $('#time').append('<span class="point1">'+NowTime+
     ' <img src="./img/time_sun.png" alt="돌아가는 해모양 아이콘" class="sun">'+
     '</span><span class="esc"> ***ESC : 이벤트 종료 </span>');
     $('.certificateTp').show();

     $('.certificateTp').t({
       speed:50,
       blink:300,
       fin:function(e){
         $('.certificateTp').hide();
         $('.certificateTt').show();
         $('.certificateBox').slideDown('slow');

           $('.recordTp').t({
             speed:50,
             blink:300,
             fin:function(e){
               $('.recordTp').hide();
               $('.recordTt').show();
               $('.slide').slideDown('slow');

               $('.contactTp').t({
                 speed:50,
                 blink:300,
                 fin:function(e){
                   $('.contactTp').hide();
                   $('.contacBox').slideDown('slow');

                   $('.resultTp').t({
                     speed:50,
                     blink:300,
                     fin:function(e){
                       $('.resultTp').hide();
                       $('.resultTt').show();
                       $('.resultBox').slideDown('fast');

                          $('.end').t({speed:60,blink:300,});
                     }//fin-function
                    });//$('.resultTp').t
                 }//fin-function
               });//$('.contactTp').t
             }//fin-function
           });//$('.certificateTp').t
       }//fin-function
     });//$('.certificateTp').t
   }//fin-function
 });//$('.timeTp').t
};

//contactInformation에서 캐릭터 누를때마다 말풍선 뜨기
function hanna(){
  var imgPush = 0;
  $('.me').click(function(){
    $('.contacBox>div').eq(imgPush).show();
    $('.contacBox>div').eq(imgPush).animate({marginTop:0,opacity:1},300);
    imgPush++;
  });
};










//
