<template>
    <main>
        <div id="introWrap">
            <div class="introMain">
                <a href="/" class="introIcoHome"></a>
                <a class="introIcoSidemenu"></a>
                <a href="/" class="introIcoMaker"><span>YOOHANNA</span> / portfolio</a>
                <div class="introSideMenu">
                    <div><a class="ism_btn"></a></div>
                    <ul>
                        <li><a href="">intro</a></li>
                        <li><a href="">maker</a></li>
                        <li class="sideMenuResult">results</li>
                            <ul>
                                <li><a href="">cloneSite</a></li>
                                <li><a href="">renewalSite</a></li>
                                <li><a href="">otherDesign</a></li>
                            </ul>                        
                    </ul>
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
                            <a href="/" class="lookAround">look around</a>
                        </div>
                        <div class="introLine">
                            <svg id="line" viewBox="0 0 1208.5 835.4" style="enable-background:new 0 0 1208.5 835.4;" xml:space="preserve">
                            <path class="i_line_01" d="M5.7,824.3c0,0,237-121,302-260s76-217,74-274s-123,88-140,179s96.7,146.5,226,78c134-71,128-232,110-290
                                s-38-22-25,17s36.6,117,257.3,71s321.7-225,387.7-339"/></svg>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </main>
</template>



<script>
    var sideBtn = document.querySelector('.introIcoSidemenu');
    sideBtn.addEventListener('click',() =>{
       console.log('test');
    });

</script>

<style>
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
        transition: 0.2s;
    }
    .introSideMenu>ul a:hover{
        opacity: 0.6;
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
        animation-delay: 2.5s;
        animation-duration: 0.8s;
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
        padding:50px 0 0 110px
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
        animation-delay: 4s;
    }
    .texts>p:nth-of-type(2){
        animation-delay: 4.2s;
    }
    .texts>p:nth-of-type(3){
        animation-delay: 4.4s;
    }
    .texts>p:nth-of-type(4){
        animation-delay: 4.6s;
    }
    @keyframes textUp {
    0%   {padding-top: 85px;}
    95%   {padding-top: 0px;}
    100%   {padding-top: 5px;}  
    }
    .lookAround{
        display:inline-block;
        margin-top:25px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        background-color: #E5BE07;
        padding: 10px 20px;
        border-radius: 40px;
        animation-name: iconShow;
        animation-delay: 5.5s;
        animation-duration: 0.2s;
        animation-fill-mode: forwards; 
        opacity: 0;
    }
    .introLine{
        position: absolute;
        width: 1180px;
        right:-520px;
        bottom:-300px;
    }
	.i_line_01{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 2600;
        stroke-dashoffset: 2600;
        animation-name: lineUp;
        animation-delay: 4.5s;
        animation-duration: 2.5s;
        animation-fill-mode: forwards;
    }
    @keyframes lineUp{
    0% {stroke-dashoffset: 2600;}
    100% {stroke-dashoffset: 0;}
    }


    @media screen and (max-width: 1300px){   
    #introHome{
        padding: calc(50vh - 400px) 50px 0 50px;
    }
    .introMain{
        width: 100%;
    }
    }

</style>
