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
                        <li><a class="makerPage">maker</a></li>
                        <li class="sideMenuResult">results</li>
                            <ul>
                                <li><a class="renewalPage">renewalSite</a></li>
                                <li><a class="clonePage">cloneSite</a></li>
                                <li><a class="designPage">otherDesign</a></li>
                                <li><a class="menuCheck">contact</a></li>
                            </ul>                        
                    </ul>
                </div>
                <div class="contact"><!--연락처-->
                    <article class="contactTitle">
                        <h3>THANK YOU FOR</h3>
                        <div class="ctLineBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 128.4" >
                            <path class="ctLine" d="M77.5,38.5c0,0-65-8.5-65,40c0,52.4,72.5,50,139-9s85.5-57,106-57s54,11.5,54,46.5s-32.3,49.2-65.8,45.7c-39-4.1-71.2-20.2-131.2-55.7"/>
                            </svg>
                        </div>
                        <h3>VISITING MY SITE.</h3>
                    </article>
                    <article class="contactText">
                        <h4>and <br/>
                        if you want contact me</h4>
                        <span></span>
                        <p>finite_me@naver.com</p>
                        <span></span>
                        <p>010.7194.7662</p>
                    </article>
                </div><!--content-->
            </div><!--introMain-->
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
                    setTimeout(() => {
                        document.querySelector('.introMainClose').style.opacity = 1;
                        document.querySelector('.introMainClose').style.zIndex = 99;
                            setTimeout(() => {
                               location.replace('/' + page);
                            }, 100);
                    }, 100);
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
                document.querySelector('.makerPage').addEventListener('click', () => {
                    moveList('about');
                });
                document.querySelector('.clonePage').addEventListener('click', () => {
                    moveList('clone');
                });
                document.querySelector('.designPage').addEventListener('click', () => {
                    moveList('design');
                }); 




        },
    }


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;300;400;500;700&display=swap');
    main{
        font-family: 'IBM Plex Sans KR', sans-serif;
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
        scrollbar-color: #2C50FA rgba(255,255,255,0);
        scrollbar-width: thin;
        display: flex;
        align-items: center;
    }
    .introMain::-webkit-scrollbar {
        width: 5px;
    }
    .introMain::-webkit-scrollbar-thumb {
        background-color: #2C50FA;
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
        z-index: 80;
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
        z-index: 90;
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
    /*본문시작*/
    .contact{
        padding: 0 60px;
        margin: auto;
        text-align: center;
        color: #333;
    }
    .contactTitle h3{
        font-size: 60px;
        font-weight: bold;
        padding-top: 75px;
        height: 75px;
        overflow: hidden;
        box-sizing: border-box;
        animation-name:titleTop;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    .contactTitle h3:nth-of-type(1){
        animation-delay: 1s;
        z-index: 10;
    }
    .contactTitle h3:nth-of-type(2){
        animation-delay: 1.2s;
        z-index: 50;
        margin-top: -45px;
    }
    @keyframes titleTop{
        0% {padding-top: 70px;}
        90% {padding-top: 0px;}
        100% {padding-top: 15px;}
    }
    /*SVG~~*/
    .ctLineBox{
        z-index: 30;
        margin-top: -20px;
    }
    .ctLineBox>svg{
        width: 320px;
    }
    .ctLine{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-miterlimit:10;
        stroke-dasharray: 700;
        stroke-dashoffset: 700;
        animation-name: ctLineStart;
        animation-delay: 1.5s;
        animation-duration: 0.8s; 
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes ctLineStart{
    0% {stroke-dashoffset: 700;}
    100% {stroke-dashoffset: 0;}
    }
    /**/
    .contactText{
        padding-bottom: 70px;
        border-bottom: 1px dashed #333;
        animation-delay:1.8s;
        animation-name:txtShow;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    @keyframes txtShow {
        0%   {opacity: 0;}
        40%   {opacity: 1;}
        45%   {opacity: 0;}
        50%   {opacity: 1;}
        95%   {opacity: 0;}
        100%   {opacity: 1;}  
    }
    .contactText>h4{
        font-size: 30px;
        font-weight: bold;
        padding: 7px 0 0 0 ;
    }
    .contactText span{
        display: inline-block;
        width:20px;
        height: 20px;
    }
    .contactText span:nth-of-type(1){
        background: url('../assets/img/intro/main_info_hv.png')left center no-repeat;
        margin-top: 80px;
    }
    .contactText span:nth-of-type(2){
        background: url('../assets/img/intro/main_info_hv.png')right center no-repeat;
        margin-top: 20px;
    }
    

    /*----------------------------------------------------------------------------------------------- */
    @media screen and (max-width: 1300px){   
        main{
            padding: calc(50vh - 400px) 50px 0 50px;
        } 
        #introWrap{
            width: 100%;
        }

        
    }
    /*---------------------------------------------------태블릿-------------------------------------------- */
    @media screen and (max-width: 950px){   
        main{
            padding: 10vh 15px 10vh 15px;
        }
        #introWrap{
           width: 100%;
           height: 80vh;
        }
        /*본문시작*/
        .contact{
            padding: 0;
        }
        
    }
    /*---------------------------------------------------모바일-------------------------------------------- */
    @media screen and (max-width: 650px){   
        main{
            padding: 10vh 10px 10vh 10px;
        }
        /*본문시작*/
        .contactTitle h3{
            font-size: 35px;
            padding-top: 45px;
            height: 45px;
        }
        .contactTitle h3:nth-of-type(2){
            margin-top: -35px;
        }
        @keyframes titleTop{
            0% {padding-top: 45px;}
            90% {padding-top: 0px;}
            100% {padding-top: 15px;}
        }
        /*SVG~~*/
        .ctLineBox{
            z-index: 30;
            margin-top: -8px;
        }
        .ctLineBox>svg{
            width: 200px;
        }
        /**/
        .contactText{
            padding-bottom: 25px;
        }
        .contactText>h4{
            font-size: 24px;
            font-weight: bold;
            padding: 10px 0 0 0 ;
        }
        .contactText span{
            display: inline-block;
            width:20px;
            height: 20px;
        }
        .contactText span:nth-of-type(1){
            background: url('../assets/img/intro/main_info_hv.png')left center no-repeat;
            margin-top: 60px;
        }
        .contactText span:nth-of-type(2){
            background: url('../assets/img/intro/main_info_hv.png')right center no-repeat;
            margin-top: 15px;
        }
    
    }

</style>
