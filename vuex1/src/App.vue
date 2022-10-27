<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <helloWorld/> -->
  <MyComp1/>
  <MyComp2/>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyComp1 from './components/MyComp1.vue';
import MyComp2 from './components/MyComp2.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyComp1,
    MyComp2
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
