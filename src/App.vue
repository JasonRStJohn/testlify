<template>
  <div>
    <InfiniteHeader />
    <HomeText />
  </div>
</template>
<script>


  import InfiniteHeader from './components/InfiniteHeader.vue';
  import HomeText from './components/HomeText.vue';
  export default {
    components: {
      InfiniteHeader,
      HomeText,
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
