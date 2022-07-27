<template>
    <div id="firstV">
        hello?
        <p v-for="i in elsss" :key="i">{{i}}</p>
    </div>
</template>



<script>
    export default{
        name : 'fistvue-page',
        mounted() {
            console.log('test');
        },
        props:{
          elsss : ['1','2','3','4']  
        }
    }


</script>

<style scoped>


</style>
