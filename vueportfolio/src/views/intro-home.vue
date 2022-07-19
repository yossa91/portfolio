<template>
    <main>
        <div id="introHome">
            <section>
                <h3>home</h3>
            </section>
        </div>
    </main>
</template>



<script>

</script>

<style>
    main{
        width: 100%;
        height: 100vh;
        background-color: #E5BE07;
    }
    #introHome{
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: calc(50vh - 400px) 0 0 0 ;
        position: relative;
    }
    #introHome>section{
        width: 1200px;
        height: 800px;
        background-color:#FBF9EE ;
        margin: auto;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .3);
    }




    @media screen and (max-width: 1300px){   
    #introHome{
        padding: calc(50vh - 400px) 50px 0 50px;
    }
        #introHome>section{
        width: 100%;
    }
    }

</style>
