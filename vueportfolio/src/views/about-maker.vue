<template>
    <main>
        <div id="introWrap">
            <div class="introMain">
                <span class="introMainClose"></span>
                <a class="introIcoHome"></a>
                <a class="introIcoSidemenu"></a>
                <div class="introSideMenu">
                    <div><a class="ism_btn"></a></div>
                    <ul>
                        <li><a class="introPage">intro</a></li>
                        <li><a class="menuCheck">maker</a></li>
                        <li class="sideMenuResult">results</li>
                            <ul>
                                <li><a class="renewalPage">renewalSite</a></li>
                                <li><a class="clonePage">cloneSite</a></li>
                                <li><a class="designPage">otherDesign</a></li>
                                <li><a class="contactPage">contact</a></li>
                            </ul>                        
                    </ul>
                </div>
                <div class="aboutBox">
                    <article class="aboutMe">
                        <div class="abMePhoto">
                            <span class="abMePhotoClip"></span>
                            <div class="abMePhotoBox"></div>
                        </div>
                        <div class="abMeInfo">
                            <h2>웹에 컨텐츠 구현을 즐거워하는 <br/>
                                <span>퍼블리셔 유한나</span>입니다.</h2>
                            <p>
                                화려하고 현란한 기술 구현이 자유 자재로 가능하지는 못하지만
                                스스로 제작하고 소비하며 축적한 경험과 기술로
                                클라이언트에게 섬사한 공감으로 다가갈 수 있도록 노력하겠습니다.
                            </p>
                        </div>
                    </article>
                    <article class="aboutSkill">
                        <h2>Skills</h2>
                        <h3>자격증</h3>
                        <ul>
                            <li>자격증명 자격증명 / 11.04</li>
                            <li>자격증명 자격증명 / 11.04</li>
                            <li>자격증명 자격증명 / 11.04</li>
                        </ul>
                        <h3>사용가능 기능/툴</h3>
                        <ul>
                            <li class="skill01"></li>
                            <li>디자인 카피, 간단한 디자인 구현</li>
                            <li>간단한 아이콘 제작 및 관리</li>
                        </ul>
                        <ul>
                            <li class="skill02"></li>
                            <li>HTML5 및 XHTML 페이지 하드코딩</li>
                            <li>모바일 페이지 제작</li>
                            <li>반응형 레이아웃</li>
                            <li>브라우저 호환성 관리</li>
                            <li>레이아웃 및 동작을 위한 스크립트 제작 관리</li>
                        </ul>
                        <ul>
                            <li class="skill03"></li>
                            <li>node 간단한 서버 구현</li>
                            <li> mysql을 사용한 간단한 기술 구현</li>
                        </ul>
                    </article>
                    <article class="aboutNext">
                        <a class="abNextBtn"></a>
                    </article>
                </div><!--aboutBox-->
                <div class="about_line_top">
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1001.7 734.7">
                    <path class="aboutLT" d="M989.2,103.3c0,0-0.3-81.1-41.4-88.7c-40-7.3-64,1.7-132,72c-80.4,83.2-178.2,237.1-293,339.7
                        c-179,160-361.7,227.5-517.7,297"/>
                    </svg>
                </div>
            </div><!--introMain-->
            <div class="about_line_bot">
                <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1517.7 1003.5" >
                <path class="aboutLB" d="M10.4,7c0,0,241.1,358.6,655.5,633c426,282,587.9,333.9,684,349.5c106.5,17.3,163.5-112.5,154.5-187.5"/>
                </svg>
            </div>
        </div><!--introWrap-->
    </main>
</template>



<script>

    export default{
        name : 'about-maker',
        mounted() {
                //사이드메뉴 열기,닫기
                var sideBtn = document.querySelector('.introIcoSidemenu');
                var sideMenu = document.querySelector('.introSideMenu');
                var sideClose = document.querySelector('.ism_btn');
                sideBtn.addEventListener('click',() => {
                    sideMenu.style.width = '300px';
                });
                sideClose.addEventListener('click', () => {
                    sideMenu.style.width = '0px';
                });
                //페이지 연결

                function moveList(page) {
                    console.log(document.querySelector('.aboutLT').className);
                    document.querySelector('.aboutLT').className.baseVal = 'aboutLTclose';                    
                    document.querySelector('.aboutLB').className.baseVal = 'aboutLBclose';                    
                    setTimeout(() => {
                        document.querySelector('.introMainClose').style.opacity = 1;
                        document.querySelector('.introMainClose').style.zIndex = 99;
                            setTimeout(() => {
                               location.replace('/' + page);
                            }, 100);
                    }, 1000);
                }

                document.querySelector('.introIcoHome').addEventListener('click', () => {
                    moveList('home');
                });
                document.querySelector('.introPage').addEventListener('click', () => {
                    moveList('home');
                });
                document.querySelector('.renewalPage').addEventListener('click', () => {
                    moveList('renewal');
                });
                document.querySelector('.clonePage').addEventListener('click', () => {
                    moveList('clone');
                });
                document.querySelector('.designPage').addEventListener('click', () => {
                    moveList('design');
                });
                document.querySelector('.contactPage').addEventListener('click', () => {
                    moveList('contact');
                }); 




        },
    }


</script>

<style scoped>
    main{
        width: 100%;
        height: 100vh; 
        background-color: #E5BE07;
        box-sizing: border-box;
        padding: calc(50vh - 400px) 0 0 0 ;
        overflow: hidden;
    } 
    #introWrap{
        width: 1200px;
        height: 800px;
        margin: auto;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .3);
        position: relative;
    }
    .introMain{
        width: 100%;
        height: 100%;
        position: relative;
        background-color:#FBF9EE ; 
        z-index: 5;
    }
    /*SVG~~~*/
    .about_line_top{
        position: absolute;
        right: -380px;
        bottom: -250px;
    }
    .about_line_top>svg{
        width: 984px;
    }
    .aboutLT{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 1350;
        stroke-dashoffset: 1350;
        animation-name:lineTop;
        animation-delay: 2.8s;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes lineTop{
    0% {stroke-dashoffset: 1350;}
    100% {stroke-dashoffset: 0;}
    }
    .aboutLTclose{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 1350;
        stroke-dashoffset: 0;
        animation-name:lineTopclose;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes lineTopclose{
    0% {stroke-dashoffset: 0;}
    100% {stroke-dashoffset: 1350;}
    }
    .about_line_bot{
        position: absolute;
        right: -380px;
        top: -370px;
    }
    .about_line_bot>svg{
        width: 1490px;
    }
    .aboutLB{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        animation-name:lineBot;
        animation-delay: 2s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes lineBot{
    0% {stroke-dashoffset: 2000;}
    100% {stroke-dashoffset: 0;}
    }
    .aboutLBclose{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 2000;
        stroke-dashoffset: 0;
        animation-name:lineBotclose;
        animation-delay: 0.4s;
        animation-duration: 0.7s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes lineBotclose{
    0% {stroke-dashoffset: 0;}
    100% {stroke-dashoffset: 2000;}
    }
    /*페이지 이동 페이지 아웃*/
    .introMain .introMainClose{
        content: '';
        position: absolute;
        display: block;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -99;
        background-color: #FBF9EE;
        opacity: 0;
        transition: 0.2s;
    }
    /*아이콘들 픽스*/
    .introIcoHome , .introIcoSidemenu{
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        background-size: 40px 40px;
        transition: 0.2s;
        opacity: 0;
        z-index: 50;
    }
    .introIcoHome{  
        background-image: url('../assets/img/intro/main_home.png');
        top:32px;
        left: 32px;
        animation-name: iconShow;
        animation-delay: 0.7s;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    .introIcoHome:hover{  
        background-image: url('../assets/img/intro/main_home_hv.png');
    }
    .introIcoSidemenu{
        background-image: url('../assets/img/intro/main_menu.png');
        top:32px;
        right: 32px;
        animation-name: iconShow;
        animation-delay: 1s;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        cursor: pointer;
    }
    .introIcoSidemenu:hover{
        background-image: url('../assets/img/intro/main_menu_hv.png');
    }
    @keyframes iconShow {
        0%   {opacity: 0;}
        40%   {opacity: 1;}
        45%   {opacity: 0;}
        50%   {opacity: 1;}
        95%   {opacity: 0;}
        100%   {opacity: 1;}  
    }
    /*사이드메뉴*/
    .menuCheck{
        opacity: 0.6;
        text-decoration: underline;
    }
    .introSideMenu{
        position: absolute;
        z-index: 55;
        width: 0;
        right: 0;
        top:0;
        bottom: 0;
        background-color: #2C50FA;
        overflow: hidden;
        transition: 0.2s;
    }
    .introSideMenu>div{
        text-align: right;
        box-sizing: border-box;
        padding: 40px 20px 40px 0;
    }
    .introSideMenu>div>.ism_btn{
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('../assets/img/intro/main_close.png') center no-repeat;
        background-size: 25px auto;
        transition: 0.2s;
    }
    .introSideMenu>div>a:hover{
        opacity: 0.6;
    }
    .introSideMenu>ul{
        padding-left: 40px;
        font-weight: 300;
    }
    .introSideMenu>ul ul{
        padding:10px 0 0 20px;
    }
    .introSideMenu>ul a{
        cursor: pointer;
    }
    .introSideMenu .sideMenuResult{
        font-size: 15px;
        color: #fff;
        padding:7px 30px 7px 30px;
        background: url('../assets/img/intro/main_menu_side2.png')center left no-repeat;
        background-size: 16px auto;
    }
    .introSideMenu>ul a{
        display: inline-block;
        font-size: 15px;
        color: #fff;
        padding:7px 30px 7px 30px;
        background: url('../assets/img/intro/main_menu_side.png')center left no-repeat;
        background-size: 12px auto;
    }
    .introSideMenu>ul a:hover{
        opacity: 0.6;
    }
    /*내용플렉스*/
    .aboutBox{
        display: flex;
        position: relative;
        padding-top: 90px;
        font-weight: 300;
        color: #333;
        opacity: 0;
        z-index: 45;
        animation-name:aboutShow;
        animation-delay: 1.8s;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes aboutShow{
        0%   {opacity: 0;}
        38%   {opacity: 1;}
        40%   {opacity: 0;}
        50%   {opacity: 1;}
        95%   {opacity: 0;}
        100%   {opacity: 1;}  
    }
    /*aboutMe */
    .aboutMe{
        width: 545px;
        box-sizing: border-box;
        padding: 55px 0;
        border-right: 1px dashed #333;
    }
    .abMePhoto{
        padding: 0 0 55px 50px;
        position: relative;
    }
    .abMePhotoBox{
        width: 350px;
        height: 350px;
        border-radius: 50%;
        position: relative;
        background: url('../assets/img/about/me.png')center no-repeat;
        box-shadow: 50px 0px 0px 0px #2C50FA;   
    }
    .abMePhotoClip{
        display: block;
        width: 84px;
        height: 124px;
        position: absolute;
        top: 70px;
        left: -25px;
        opacity: 0;
        background: url('../assets/img/about/aboutme.png');
        z-index: 50;
        animation-name:aboutClipShow;
        animation-delay: 3.8s;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes aboutClipShow{
        0% {opacity: 0; left: -20px;}
        15% {opacity: 1;}
        100% {opacity: 1; left: -7px;}
    }
    .abMeInfo{
        padding: 0 70px;
    }
    .abMeInfo>h2{
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        padding-bottom: 20px;
    }
    .abMeInfo>h2>span{
        background-color: #E5BE07;
    }
    .abMeInfo>p{
        font-size: 15px;
        line-height: 22px;
    }
    /**/
    .aboutSkill{
        width: 545px;
        box-sizing: border-box;
        padding: 55px 0 0 50px;
    }
    .aboutSkill>h2{
        font-weight: bold;
        font-size: 24px;
        color: #E5BE07;
        padding-bottom: 20px;
    }
    .aboutSkill>h3{
        font-size: 15px;
        font-weight: bold;
        padding-left: 30px;
        line-height: 30px;
    }
    .aboutSkill>ul{
        padding: 0 0 20px 30px;
        line-height: 20px;
        font-size: 15px;
    }
    .aboutSkill>ul>li{
        padding-left: 10px;
    }
    .skill01{
        height: 40px;
        background: url('../assets/img/about/skill01.png')left center no-repeat;
        background-size: auto 25px;
    }
    .skill02{
        height: 50px;
        background: url('../assets/img/about/skill02.png')left center no-repeat;
        background-size: auto 35px;
    }
    .skill03{
        height: 50px;
        background: url('../assets/img/about/skill03.png')left center no-repeat;
        background-size: auto 35px;
    }
    /**/
    .aboutNext{
        width: 110px;
        display: flex;
        align-items: center;
    }
    .abNextBtn{
        display: block;
        width: 110px;
        height: 110px;
        background: url('../assets/img/about/about_next.png') center no-repeat;
        background-size: 27px auto ;
        cursor: pointer;  
    }
    .abNextBtn:hover{
        opacity: 0.6;
    }


    /*----------------------------------------------------------------------------------------------- */
    @media screen and (max-width: 1300px){   
        main{
            padding: calc(50vh - 400px) 50px 0 50px;
        } 
        #introWrap{
            width: 100%;
        }
         /*aboutMe */

         /*가로값 수정만 해둠~~~~ 여기서부터 반응형 수정~~~~~~ */
        .aboutMe{
            width: calc(50% - 55px);
            box-sizing: border-box;
            padding: 55px 0;
            border-right: 1px dashed #333;
        }
        .abMePhoto{
            padding: 0 0 55px 50px;
            position: relative;
        }
        .abMePhotoBox{
            width: 350px;
            height: 350px;
            border-radius: 50%;
            position: relative;
            background: url('../assets/img/about/me.png')center no-repeat;
            box-shadow: 50px 0px 0px 0px #2C50FA;   
        }
        .abMePhotoClip{
            display: block;
            width: 84px;
            height: 124px;
            position: absolute;
            top: 70px;
            left: -25px;
            opacity: 0;
            background: url('../assets/img/about/aboutme.png');
            z-index: 50;
            animation-name:aboutClipShow;
            animation-delay: 3.8s;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
            animation-timing-function:ease-in-out;
        }
        @keyframes aboutClipShow{
            0% {opacity: 0; left: -20px;}
            15% {opacity: 1;}
            100% {opacity: 1; left: -7px;}
        }
        .abMeInfo{
            padding: 0 70px;
        }
        .abMeInfo>h2{
            font-weight: bold;
            font-size: 18px;
            line-height: 30px;
            padding-bottom: 20px;
        }
        .abMeInfo>h2>span{
            background-color: #E5BE07;
        }
        .abMeInfo>p{
            font-size: 15px;
            line-height: 22px;
        }
        /**/
        .aboutSkill{
            width: calc(50% - 55px);
            box-sizing: border-box;
            padding: 55px 0 0 50px;
        }
        .aboutSkill>h2{
            font-weight: bold;
            font-size: 24px;
            color: #E5BE07;
            padding-bottom: 20px;
        }
        .aboutSkill>h3{
            font-size: 15px;
            font-weight: bold;
            padding-left: 30px;
            line-height: 30px;
        }
        .aboutSkill>ul{
            padding: 0 0 20px 30px;
            line-height: 20px;
            font-size: 15px;
        }
        .aboutSkill>ul>li{
            padding-left: 10px;
        }
        .skill01{
            height: 40px;
            background: url('../assets/img/about/skill01.png')left center no-repeat;
            background-size: auto 25px;
        }
        .skill02{
            height: 50px;
            background: url('../assets/img/about/skill02.png')left center no-repeat;
            background-size: auto 35px;
        }
        .skill03{
            height: 50px;
            background: url('../assets/img/about/skill03.png')left center no-repeat;
            background-size: auto 35px;
        }
        /**/
        .aboutNext{
            width: 110px;
            display: flex;
            align-items: center;
        }
        .abNextBtn{
            display: block;
            width: 110px;
            height: 110px;
            background: url('../assets/img/about/about_next.png') center no-repeat;
            background-size: 27px auto ;
            cursor: pointer;  
        }
        .abNextBtn:hover{
            opacity: 0.6;
        }   
            


        
        
    }
    /*---------------------------------------------------태블릿-------------------------------------------- */
    @media screen and (max-width: 950px){   
        main{
            padding: calc(50vh - 400px) 15px 0 15px;
        }
        .introWrap{
            height: ;
        }
        
    
    }
    /*---------------------------------------------------모바일-------------------------------------------- */
    @media screen and (max-width: 650px){   
        main{
            padding: 10vh 10px 0 10px ;
        }
        .introWrap{
            height: 80vh;
        }



    
    }

</style>
