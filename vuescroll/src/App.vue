<template>
  <ul class="listMenu">
    <li>intro</li>
    <li>about</li>
    <li>menu3</li>
    <li class="goclone">clone</li>
    <li v-on:click="gorenewal">renewal</li>
  </ul>
  <intro></intro>
  <about></about>
  <clone class="clo"></clone>
  <renewal class="renew"></renewal>
  
</template>

<script>
import intro from './components/intro.vue'
import about from './components/about.vue'
import clone from './components/clone.vue'
import renewal from './components/renewal.vue'


export default {
  name: 'App',
  components: {
    intro,
    about,
    clone,
    renewal  
  },
  mounted() {
    console.log('test');
    const cloneBtn = document.querySelector('.goclone');
    const clonePosition = document.querySelector('.clo');
    cloneBtn.addEventListener('click',()=> {
      clonePosition.scrollIntoView({behavior : 'smooth'})
    });
  },
  methods:{
    gorenewal(){
      const renewPosition = document.querySelector('.renew');
      if(renewPosition){
        renewPosition.scrollIntoView({behavior : 'smooth'})
      }
    }
  }

}
</script>

<style scoped>
.listMenu{
  list-style: none;
  display: flex;
  position: fixed;
  top:0;
  left: 0;
  background-color: #fff;
}
.listMenu li{
  padding: 10px;
  cursor: pointer;
}

</style>
