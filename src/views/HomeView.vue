<script setup>
</script>

<template>
  <!-- <div class="container"> -->
    <img class="bigira" src="@/assets/images/bigira.png" alt="">
    <img class="header" src="@/assets/images/header.png" alt="">
  <!-- </div> -->
  
</template>

<style class="scoped">

  @keyframes show {
    from {
      transform: translate(0, 40px);
      opacity: 0;
    }

    to {
      transform: translate(0, 0); 
      opacity: 1;
    }
  }

  .container {
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .header {
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 15px;
    width: 80%;
    animation-name: show;
    animation-duration: 1s;
    
    
  }

  .bigira {
    position: absolute;
    z-index: -1;
    top:-15px;
    right: 0px;
    width: 90%;
    animation-name: show;
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-delay: 0.3s;
  }
</style>


