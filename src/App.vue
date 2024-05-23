<script setup>
import {
  // RouterLink, 
  RouterView 
} from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style>


  @import './assets/Skeleton/css/normalize.css';
  @import './assets/Skeleton/css/skeleton.css';

  body {
    background-color: black;
    height: 100vh;
    margin: 0;padding: 0;
    overflow: hidden;
  }

  html {
   height: 100vh; 
    margin: 0;padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }
</style>
