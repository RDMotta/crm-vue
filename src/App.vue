<template>
  <div class="app">    
    <Sidebar/>
    <router-view/>
  </div>    
</template>

<script lang="ts" setup>
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<style lang="scss" scoped>

@import "./styles/theme.scss";

</style>
 