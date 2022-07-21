<template>
    <main>
        <div id="introWrap">
            <div class="introMain">
                <a class="introIcoHome"></a>
                <a class="introIcoSidemenu"></a>
                <a class="introIcoMaker"><span>YOOHANNA</span> / portfolio</a>
                <div class="introSideMenu">
                    <div><a class="ism_btn"></a></div>
                    <ul>
                        <li><a class="menuCheck">intro</a></li>
                        <li><a href="/about">maker</a></li>
                        <li class="sideMenuResult">results</li>
                            <ul>
                                <li><a href="">cloneSite</a></li>
                                <li><a href="">renewalSite</a></li>
                                <li><a href="">otherDesign</a></li>
                            </ul>                        
                    </ul>
                </div>
                <div class="introMaker">
                    <div class="introMakereTitle">
                        <h2>CONTACT</h2>
                        <a class="im_btn"></a>
                    </div>
                    <div class="introMakereInfo">
                        <p>NUMBER | 010.7194.7662</p>
                        <p>MAIL  | finite_me@naver.com</p>
                    </div>
                </div>
                <article class="inroTextWrap">
                    <div class="inroTextBox">
                        <sapn class="point pot1"></sapn>
                        <sapn class="point pot2"></sapn>
                        <sapn class="point pot3"></sapn>
                        <sapn class="pot4"></sapn>
                        <div class="texts">
                            <p>BRING</p>
                            <p>PLANS</p>
                            <p>TO</p>
                            <p>LIFE.</p>
                            <a href="/about" class="lookAround">look around</a>
                        </div>
                        <div class="introLine">
                            <svg id="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1546.847 1044.678">
                            <path class="i_line_01" fill="none" stroke="#3256A6" stroke-width="25" stroke-miterlimit="10" d="M3.028,1032.55c0,0,332.621-83.057,527.974-296.985
                                c174.617-191.222,196.032-340.24,199.49-389.98c3.794-54.575-9-59.997-40.498-23.999s-155.991,175.492-71.996,247.488
                                s220.954,17.935,280.485-88.496c51.438-91.961,43.498-157.492,23.999-209.989s-32.362-12.409-18.863,43.088
                                s143.358,84.406,261.853,43.908S1494.098,239.09,1534.524,2.102"/>
                            </svg>
                        </div>
                    </div><!--inroTextBox-->
                </article><!--inroTextWrap-->
            </div><!--introMain-->
        </div><!--introWrap-->
    </main>
</template>



<script>

    export default{
        name : 'intro-home',
        mounted() {
                var sideBtn = document.querySelector('.introIcoSidemenu');
                var sideMenu = document.querySelector('.introSideMenu');
                var sideClose = document.querySelector('.ism_btn');
                sideBtn.addEventListener('click',() => {
                    sideMenu.style.width = '300px';
                });
                sideClose.addEventListener('click', () => {
                    sideMenu.style.width = '0px';
                });

                var maker = document.querySelector('.introMaker');
                var makerBtn = document.querySelector('.introIcoMaker');
                var makerClose = document.querySelector('.im_btn');
                makerBtn.addEventListener('click', () => {
                    maker.style.opacity = '1';
                    maker.style.zIndex = '99';
                });
                makerClose.addEventListener('click', () => {
                    maker.style.opacity = '0';
                    maker.style.zIndex = '-99';
                });

        },
    }


</script>

<style scoped>
    main{
        width: 100%;
        height: 100vh;
        background-color: #E5BE07;
    }
    #introWrap{
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: calc(50vh - 400px) 0 0 0 ;
        overflow: hidden;
    }
    .introMain{
        width: 1200px;
        height: 800px;
        position: relative;
        margin: auto;
        background-color:#FBF9EE ; 
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .3);
        animation-name: mainSlideDown;
        animation-duration: 1s;
        animation-timing-function:ease-in-out;
        animation-fill-mode: forwards;
    }
    @keyframes mainSlideDown {
    0%   {height: 0; opacity: 0;}
    100%   {height: 800px; opacity: 1;}  
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
    }
    .introIcoHome{  
        background-image: url('../assets/img/intro/main_home.png');
        top:32px;
        left: 32px;
        animation-name: iconShow;
        animation-delay: 1s;
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
        animation-delay: 1.2s;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        cursor: pointer;
    }
    .introIcoSidemenu:hover{
        background-image: url('../assets/img/intro/main_menu_hv.png');
    }
    .introIcoMaker{
        display: block;
        position: absolute;
        bottom: 40px;
        left: 40px;
        color: #333;
        font-size: 16px;
        line-height: 20px;
        padding-right: 70px;
        background: url('../assets/img/intro/main_info.png')center right no-repeat;
        transition: 0.2s;
        animation-name: iconShow;
        animation-delay: 1.4s;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        opacity: 0;
        cursor: pointer;
        z-index: 99;
    }
    .introIcoMaker>span{
        font-weight: bold;
    }
    .introIcoMaker:hover{
        color: #2C50FA;
        background: url('../assets/img/intro/main_info_hv.png')center right no-repeat;
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
        z-index: 50;
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
    /*하단 제작자 인포*/
    .introMaker{
        opacity: 0;
        position: absolute;
        left: 0;
        bottom: 100px;
        padding: 0 30px;
        background-color: #2C50FA;
        color: #fff;
        transition: 0.8s;
    }
    .introMakereTitle{
        display: flex;
        width:300px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
    }
    .introMakereTitle>h2{
        font-size: 20px;
        font-weight: 500;
        line-height: 45px;
    }
    .introMakereTitle>.im_btn{
        display: block;
        width: 40px;
        height: 40px;
        background: url('../assets/img/intro/main_close.png')center no-repeat;
        background-size: 12px auto;
        cursor: pointer;
    }
    .introMakereInfo{
        position: relative;
        padding: 25px 0 25px 20px;
    }
    .introMakereInfo::after{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        position: absolute;
        transform: rotate(45deg);
        bottom: -5px;
        left: calc(50% - 5px);
        z-index: 50;
        background-color: #2C50FA;        
    }
    .introMakereInfo>p:nth-child(1){
        margin-bottom: 10px;
    }
    /*중앙글씨*/
    .inroTextWrap{
        padding-top:140px;
        padding-left:140px;
    }
    .inroTextBox{
        width: 0px; 
        height: 0px;
        position:relative;
        border: 1px dashed #333;
        animation-name: textBox;
        animation-delay: 2.3s;
        animation-duration: 0.6s;
        animation-timing-function:ease-in-out;
        animation-fill-mode: forwards;  
    }
    @keyframes textBox {
    0%   {width: 0px; height: 0px;}
    100%   {width: 925px; height: 500px;}  
    }
    .point{
        position: absolute;
        width: 10px;
        height: 10px;
        animation-name: showUp;
        animation-delay: 3s;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
        opacity: 0; 
    }
    .pot1{
        background-color: #333;
        top:-5px;
        left: -5px;
    }
    .pot2{
        background-color: #333;
        top:-5px;
        right: -5px;
    }
    .pot3{
        background-color: #333;
        bottom:-5px;
        left: -5px;
    }
    .pot4{
        position: absolute;
        width: 10px;
        height: 10px;
        box-sizing: border-box;
        border: 1px solid #333;
        background-color: #fff;
        bottom:-5px;
        right: -5px;
        animation-name: iconShow;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-fill-mode: forwards; 
        opacity: 0;
    }
    @keyframes showUp {
    0%   {opacity: 0;}
    100%   {opacity: 1;}  
    }
    .texts{
        padding:50px 0 0 110px;
    }
    .texts>p{
        display: block;
        height: 85px;
        box-sizing: border-box;
        font-size: 80px;
        font-weight: bold;
        overflow: hidden;
        padding-top: 85px;
        animation-name: textUp;
        animation-duration: 0.3s;
        animation-fill-mode: forwards; 
    }
    .texts>p:nth-of-type(1){
        animation-delay: 3.5s;
    }
    .texts>p:nth-of-type(2){
        animation-delay: 3.7s;
    }
    .texts>p:nth-of-type(3){
        animation-delay: 3.9s;
    }
    .texts>p:nth-of-type(4){
        animation-delay: 4s;
    }
    @keyframes textUp {
    0%   {padding-top: 85px;}
    95%   {padding-top: 0px;}
    100%   {padding-top: 5px;}  
    }
    .lookAround{
        display:inline-block;
        position: static;
        margin-top:25px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        background-color: #E5BE07;
        padding: 10px 20px;
        border-radius: 40px;
        animation-name: iconShow;
        animation-delay: 5s;
        animation-duration: 0.2s;
        animation-fill-mode: forwards; 
        opacity: 0;
        z-index: 50;
    }
    /*메인펜선*/
    .introLine{
        position: absolute;
        z-index: -1;
        right:-500px;
        bottom:-500px;
    }
    .introLine>svg{
        width: 1546px;
    }
	.i_line_01{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 3000;
        stroke-dashoffset: 3000;
        animation-name: lineUp;
        animation-delay: 4s;
        animation-duration: 2.1s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes lineUp{
    0% {stroke-dashoffset: 3000;}
    100% {stroke-dashoffset: 0;}
    }
    /*----------------------------------------------------------------------------------------------- */
    @media screen and (max-width: 1300px){   
        #introWrap{
            padding: calc(50vh - 400px) 50px 0 50px;
        }
        .introMain{
            width: 100%;
        }
        /*중앙글씨*/
        .inroTextWrap{
            padding-top:140px;
            padding-left:12%;
        }
        .inroTextBox{
            width: 0%; 
        }
        @keyframes textBox {
        0%   {width: 0px; height: 0px;}
        100%   {width: 86%; height: 500px;}  
        }
        .texts{
            padding:50px 0 0 110px
        }
        /*메인펜선*/
        .introLine{
            z-index: -1;
        }
    }
    /*---------------------------------------------------태블릿-------------------------------------------- */
    @media screen and (max-width: 950px){   
        #introWrap{
            padding: calc(50vh - 400px) 15px 0 15px;
        }
        /*중앙글씨*/
        .texts{
            padding:50px 0 0 70px
        }
        /*메인펜선*/
        .introLine{
            right:-450px;
            bottom:-450px;
        }
        .introLine>svg{
            width: 1300px;
        }
        .i_line_01{
            fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
            stroke-dasharray: 3000;
            stroke-dashoffset: 3000;
            animation-name: lineUp;
            animation-delay: 4s;
            animation-duration: 2.1s;
            animation-fill-mode: forwards;
            animation-timing-function:ease-in-out;
        }
        @keyframes lineUp{
        0% {stroke-dashoffset: 3000;}
        100% {stroke-dashoffset: 0;}
        }
    
    }
    /*---------------------------------------------------모바일-------------------------------------------- */
    @media screen and (max-width: 650px){   
        #introWrap{
            padding: 0 10px 0 10px ;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .introMain{
            height: 80vh;
        }
        @keyframes mainSlideDown {
        0%   {height: 0; opacity: 0;}
        100%   {height: 80vh; opacity: 1;}  
        }
        /*하단 제작자 인포*/
        .introMakereTitle{
            width:240px;
        }
        .introMakereInfo{
            padding: 25px 0 25px 10px;
        }
        /*중앙글씨*/
        .inroTextWrap{
            padding-top:110px;
            padding-left:8%;
            padding-right:8%;
        }
        .inroTextBox{
            width: 0px; 
            height: 0px;
        }
        @keyframes textBox {
        0%   {width: 0px; height: 0px;}
        100%   {width: 100%; height: calc(80vh - 220px);}  
        }
        .texts{
            padding:25px 0 70px 10px
        }
        .texts>p{
            height: 50px;
            font-size: 45px;
            padding-top: 50px;
        }
        .lookAround{
            margin-top:20px;
            font-size: 15px;
            padding: 8px 15px;
        }
        /*메인펜선*/
        .introLine{
            right:-320px;
            bottom:-260px;
        }
        .introLine>svg{
            width: 800px;
        }

    
    }

</style>
