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
                                <li><a class="menuCheck">otherDesign</a></li>
                                <li><a class="contactPage">contact</a></li>
                            </ul>                        
                    </ul>
                </div>
                <div class="content"><!--본문-->
                    <article class="contentTitile">
                        <span>RESULTS</span>
                        <h3>OTHER DESIGN</h3>
                        <p>기타 디자인</p>
                    </article>
                    <article class="contentBox">
                        <section>
                            <div class="ctBoxPhoto cbp01"></div>
                                <div class="ctBoxInfo">
                                    <h4><span>01</span>QUEENNYGEL PACKAGE / BOOTH / BANNER</h4>
                                    <p><span>Type</span>시즌 패키지, 부스, 배너 디자인</p>
                                    <p><span>Tool</span>Adobe Photoshop</p>
                                    <p class="ctBoxInfoTxt">
                                        QUEENNYGEL에서 발매한 가을 컬렉션의 패키지 디자인과 그 해 진행된
                                        전시회의 부스디자인, 온라인 배너 디자인 입니다.<br/><br/>
                                        가을의 모던한 컬러를 중심으로 '카라멜라이즈'라는 타이틀을 달고
                                        제작된 제품의으로 대칭이 되는 컨셉을 목적으로 패키지를 제작하게 되었으며,
                                        온라인의 배너 역시 제품의 부드러운 컬러감을 느낄 수 있도록 제작 하였습니다.                                       
                                    </p>
                                    <button class="ctBoxMockupBtn">Mockup</button>
                                </div>
                        </section>
                         <section>
                            <div class="ctBoxPhoto cbp02"></div>
                                <div class="ctBoxInfo">
                                    <h4><span>02</span>QUEENNYGEL BANNER / XBANNER</h4>
                                    <p><span>Type</span>배너,엑스배너 디자인</p>
                                    <p><span>Tool</span>Adobe Photoshop, Adobe Illustrator</p>
                                    <p class="ctBoxInfoTxt">
                                        QUEENNYGEL의 온라인 홍보를 위해 제작된 다양한 배너 디자인과
                                        오프라인에서 사용된 엑스배너 디자인 입니다.<br/><br/>
                                        SNS에서 홍보 이벤트를 목적으로 사용할 다양한 배너 제작물로
                                        간단한 촬영과 합성으로 때에 따른 컨셉으로 제작한 배너들과
                                        전시회에서 사용할 다양한 엑스 배너 제작물입니다.               
                                    </p>
                                    <button class="ctBoxMockupBtn">Mockup</button>
                                </div>
                        </section>

                    </article>
                </div><!--content-->
                <div class="contentDetail"><!--본문모달-->
                    <div class="contentDtWrap">
                        <span class="contentDtWrapClose"></span>
                        <article class="contentDtEl">
                            <h4>QUEENNYGEL BANNER / XBANNER</h4>
                            <p>Adobe Photoshop, Adobe Illustrator</p>
                            <img src="../assets/img/other/other_mock_01.png" alt="">
                            <img src="../assets/img/other/other_mock_01.png" alt="">
                            <img src="../assets/img/other/other_mock_01.png" alt="">
                            <img src="../assets/img/other/other_mock_01.png" alt="">
                        </article>
                        <article class="contentDtEl">
                            <h4>QUEENNYGEL BANNER / XBANNER</h4>
                            <p>Adobe Photoshop, Adobe Illustrator</p>
                            <img src="../assets/img/other/other_mock_02.png" alt="">
                            <img src="../assets/img/other/other_mock_02.png" alt="">
                            <img src="../assets/img/other/other_mock_02.png" alt="">
                            <img src="../assets/img/other/other_mock_02.png" alt="">
                            <img src="../assets/img/other/other_mock_02.png" alt="">
                        </article>
                    </div>
                </div><!--contentDetail-->
            </div><!--introMain-->
            <div class="project_bg_line">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2063.4 722.5">
                <path class="pj_bg_line" d="M6.7,10.6c0,0,168,106.2,223.5,182.8S294.8,312,270.7,351s-75.1,60.1-106.6,67.6s-43.5-18-21-55.6
                    s97.6-132.1,193.7-172.7s184.7-55.6,324.3-16.5s310.8,97.6,438.5,223.7s109.6,195.2,99.1,222.2c-10.5,27-30,63.9-1.5,85.2
                    c28.5,21.4,111.1-31.2,156.2-58.2c45-27,703.3-442.5,703.3-442.5"/>
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
                    document.querySelector('.introMain').style.overflowY = 'hidden';
                });
                sideClose.addEventListener('click', () => {
                    sideMenu.style.width = '0px';
                    document.querySelector('.introMain').style.overflowY = 'scroll';
                });
                //목업버튼
                var mockupBtn = document.querySelectorAll('.ctBoxMockupBtn');
                var dtailArticl = document.querySelectorAll('.contentDtEl');
                var mockupClose = document.querySelector('.contentDtWrapClose');
                var scrollT = 0;

                mockupBtn.forEach(function(el,idx){
                    el.addEventListener('click',function(){
                        //목업클로즈 시 원래 스크롤 위치로 이동을 위한 값
                        var sTop = document.querySelector('.introMain').scrollTop;
                        scrollT = sTop;
                        //목업 최상단이동
                        document.querySelector('.introMain').style.overflowY = 'hidden';
                        document.querySelector('.introMain').scrollTop = 0;
                        document.querySelector('.contentDetail').style.display = 'block';
                        document.querySelector('.contentDtWrap').scrollTop = 0;
                        for(var i =0 ; i < dtailArticl.length ; i++){
                            dtailArticl[i].style.display = 'none';
                        }
                        dtailArticl[idx].style.display = 'block';
                    });
                });
                //목업클로즈
                mockupClose.addEventListener('click',() => {
                    console.log(scrollT);
                    document.querySelector('.contentDetail').style.display = 'none';
                    document.querySelector('.introMain').style.overflowY = 'scroll';
                    //목업클로즈 시 원래 스크롤 위치로 이동
                    document.querySelector('.introMain').scrollTop = scrollT;
                });


                //페이지 연결
                function moveList(page) {
                    document.querySelector('.pj_bg_line').className.baseVal = 'pj_bg_lineBack';                                     
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
                document.querySelector('.makerPage').addEventListener('click', () => {
                    moveList('about');
                });
                document.querySelector('.clonePage').addEventListener('click', () => {
                    moveList('clone');
                });
                document.querySelector('.contactPage').addEventListener('click', () => {
                    moveList('contact');
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
        overflow-y: scroll;
        scrollbar-color: #2C50FA rgba(255,255,255,0);
        scrollbar-width: thin;
    }
    .introMain::-webkit-scrollbar {
        width: 5px;
    }
    .introMain::-webkit-scrollbar-thumb {
        background-color: #2C50FA;
    }

    /*SVG~~~*/
    .project_bg_line{
        position: absolute;
        left: -400px;
        bottom: -150px;
    }    
    .project_bg_line>svg{
        width: 2050px;
    }
    .pj_bg_line{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 3150;
        stroke-dashoffset: 3150;
        animation-name:pjLineStart;
        animation-delay: 1.8s;
        animation-duration: 1.3s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes pjLineStart{
    0% {stroke-dashoffset: 3150;}
    100% {stroke-dashoffset: 0;}
    }
    .pj_bg_lineBack{
        fill:none;stroke:#2C50FA;stroke-width:25;stroke-miterlimit:10;
        stroke-dasharray: 3150;
        stroke-dashoffset: 0;
        animation-name:pjLineBack;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
        animation-timing-function:ease-in-out;
    }
    @keyframes pjLineBack{
    0% {stroke-dashoffset: 0;}
    100% {stroke-dashoffset: 3150;}
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
    /*본문시작*/
    .content{
        width: 100%;
        animation-name: sectionShow;
        animation-delay: 1s;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    @keyframes sectionShow {
        0%   {opacity: 0;}
        40%   {opacity: 1;}
        45%   {opacity: 0;}
        50%   {opacity: 1;}
        95%   {opacity: 0;}
        100%   {opacity: 1;}  
    }    
    /*본문타이틀*/
    .contentTitile{
        text-align: center;
        padding: 60px 0 0 0;
    }
    .contentTitile>span{
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        padding: 0 15px;
        background-color: #2C50FA;
        color: #fff;
        border-radius: 20px;
    }
    .contentTitile>h3{
        font-size: 26px;
        font-weight: bold;
        padding: 23px 0 0 0;
        color: #333;
    }
    .contentTitile>p{
        font-size: 14px;
        font-weight: 300;
    }
    /*본문section*/
    .contentBox{
        width: 100%;
        padding: 0 70px;
        box-sizing: border-box;
    }
    .contentBox>section{
        width: 100%;
        padding: 70px 0 50px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border-bottom: 2px solid #E5BE07;
    }
    .ctBoxPhoto{
        width: 50%;
        height: 450px;
    }
    .cbp01{
        background: #505050 url('../assets/img/other/other_mock_01.png')center no-repeat;
        background-size: cover;
    }
    .cbp02{
        background: #505050 url('../assets/img/other/other_mock_02.png')center no-repeat;
        background-size: cover;
    }
    .ctBoxInfo{
        width: 50%;
        box-sizing: border-box;
        padding: 0 0 0 30px;
        color: #333;
        font-size: 15px;
    }
    .ctBoxInfo>h4{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 35px;
    }
    .ctBoxInfo>h4>span{
        font-size: 42px;
        font-weight: bold;
        color: #2C50FA;
        padding-right: 20px;
        vertical-align: middle;
    }
    .ctBoxInfo>p{
        line-height: 20px;
    }
    .ctBoxInfo>p>span{
        display: inline-block;
        width:82px;
        font-weight: 500;
        color: #2C50FA;
    }
    .ctBoxInfoTxt{
        padding: 35px 0;
    }
    .ctBoxMockupBtn{
        width: 85px;
        line-height: 24px;
        background-color: #2C50FA;
        border: none;
        border-radius: 20px;
        color: #fff;
        margin-right: 10px;
        cursor: pointer;
        transition: 0.2s;
    }
    .ctBoxMockupBtn:hover{
        opacity: 0.6;
    }
    /**/
    .ctBoxSkill{
        width: 100%;
    }
    .ctBoxSkill table{
        width: 100%;
    }
    .ctBoxSkill th{
        font-weight: 500;
        border-bottom: 1px solid #333;
        text-align: left;
        padding: 35px 0 15px 10px;
    }
    .ctBoxSkill tr:nth-of-type(2) td{
        padding-top: 15px;
    }
    .ctBoxSkill td{
        line-height: 25px;
        text-align: left;
        padding: 0 0 0 10px;
        color: #AAA;
    }
    .tb_cate>span{
        display: inline-block;
        line-height: 20px;
        padding: 0 10px;
        border-radius: 4px;
        color: #fff;
    }
    .tb_c_ejs>span{
        background-color: #2C50FA;
    }
    .tb_c_css>span{
        background-color: #EE9123;
    }
    .tb_c_js>span{
        background-color: #51AA0A;
    }
    .tb_c_mysql>span{
        background-color: #F14848;
    }
    /*목업클릭시 상세페이지 .introMain에 relative*/
    .contentDetail{
        display: none;
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #FBF9EE;
        z-index: 999;
        transition: 0.3s;
    }
    .contentDtWrap{
        width: 100%;
        height: 100%;
        position: relative;
        overflow-y: scroll;
        scrollbar-color: #2C50FA rgba(255,255,255,0);
        scrollbar-width: thin;
    }
    .contentDtWrap::-webkit-scrollbar {
        width: 5px;
    }
    .contentDtWrap::-webkit-scrollbar-thumb {
        background-color: #2C50FA;
    }
    .contentDtWrapClose{
        display: block;
        width: 40px;
        height: 40px;
        position:sticky;
        top: 40px;
        left: calc(100% - 60px);
        cursor: pointer;
        background: url('../assets/img/other/other_close.png')center no-repeat;
        background-size: 25px auto;
    }
    .contentDtWrapClose:hover{
        opacity: 0.6;
    }
    .contentDtEl{
        width: 100%;
        display: none;
        text-align: center;
    }
    .contentDtEl>h4{
        font-size: 20px;
        font-weight: bold;
        padding: 80px 0 0 0;
    }
    .contentDtEl>p{
        font-size: 15px;
        padding: 10px 0 120px 0;
    }
    .contentDtEl>img{
        display: block;
        margin: auto;
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
            padding: calc(50vh - 400px) 15px calc(50vh - 400px) 15px;
            height: 100%;
        }
        #introWrap{
            height: 100%;
            margin: auto;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .3);
            position: relative;
        }
        /*SVG~~~*/
        .project_bg_line{
            position: absolute;
            left: -400px;
            bottom: -100px;
        }    
        .project_bg_line>svg{
            width: 1850px;
        }
        /*본문section*/
        .contentBox{
            padding: 0 50px;
        }
        .contentBox>section{
            padding: 45px 0 65px 0;
            display: block;
        }
        .ctBoxPhoto{
            width: 100%;
        }
        .ctBoxInfo{
            width: 100%;
            padding: 30px 10px 0 10px;
        }
        .ctBoxInfo>h4{
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 35px;
        }
        .ctBoxInfoTxt{
            padding: 30px 0;
        }
        /**/
        .ctBoxSkill{
            width: 100%;
            padding: 30px 0 0 0;
        }
        .ctBoxSkill table{
            width: 100%;
        }
        .ctBoxSkill th{
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            padding: 10px 0 10px 10px;
        }
        .ctBoxSkill td{
            vertical-align:middle;
        }
    
    }
    /*---------------------------------------------------모바일-------------------------------------------- */
    @media screen and (max-width: 650px){   
        main{
            padding: calc(50vh - 400px) 10px calc(50vh - 400px) 10px;
            height: 100%;
        }
        .introMain{
            overflow: hidden;
        }
        /*SVG~~~*/
        .project_bg_line{
            position: absolute;
            left: -400px;
            bottom: -100px;
        }    
        .project_bg_line>svg{
            width: 1750px;
        }
         /*본문section*/
        .contentBox{
            padding: 0;
            
        }
        .contentBox>section{
            padding: 40px 0 50px 0;
            display: block;
        }
        .ctBoxInfo{
            width: 100%;
            padding: 30px 30px 0 30px;
        }
        /**/
        .ctBoxSkill{
            width: 100%;
            padding: 30px 30px 0 30px;
            box-sizing: border-box;
        }
        .ctBoxSkill table{
            width: 100%;
        }
        .ctBoxSkill th{
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            padding: 10px 0 10px 10px;
        }
        .ctBoxSkill td{
            vertical-align:middle;
        }

    
    }

</style>
