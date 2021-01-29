<template>
  <div id="app">
    <Header />
    <!-- Hellworld -->
    <!-- <router-link to='/'>Homepage</router-link> -->
    <!-- <router-link to='/timeline'>Timeline</router-link> -->
    <router-view/>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

#app {
  /* color: #2c3e50; */
  width: 100%;
  min-height: 100vh;
  background-color: #F6F6F6;
  display: flex;
  flex-direction: column;
  // align-items: center;

}

button{
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
}

button:active{
  transform: scale(0.9);
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}

a{
  color: black;
  text-decoration: none;
}

a:hover, a:visited, a:link, a:active
{
    text-decoration: none;
}

</style>
