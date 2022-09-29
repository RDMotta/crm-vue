<template>
  <div class="app">    
    <Sidebar/>
    <router-view/>
  </div>    
</template>

<script lang="ts">
  import { defineComponent } from 'vue' ;
  import Sidebar from './components/sidebar/Sidebar.vue'

  export default defineComponent({
      name: 'App',
      components:{
        Sidebar,
      }
  });
</script>

<style lang="scss" scoped>

@import "./styles/theme.scss";

</style>
 