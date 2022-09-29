<template>
  <aside :class="`${state.isExpanded && 'is-expanded'}`">
    <div class="logo">
      <img class="logo-app" src="../../assets/vue.svg" alt="vue">
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div> 
    <h3 class="group-item">Menu</h3>
    <div class="menu">
      <router-link class="item-menu" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="item-menu" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>
    </div>
    <div class="sumary"/>
    <div class="menu">
      <router-link class="item-menu" to="/">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
      <router-link class="item-menu" to="/login">
        <span class="material-icons">login</span>
        <span class="text">Login</span>
      </router-link>
    </div>
  </aside>
</template>

<script lang="ts">   
  import { ref, reactive, defineComponent } from 'vue' ; 
 
  export default defineComponent({
    name: 'Sidebar',    
    setup(){

      const state = reactive({
        isExpanded: false
      });  

      function ToggleMenu() {
        const is_Expanded = ref(localStorage.getItem('isExpanded') === 'true') 
        state.isExpanded = !is_Expanded.value 
        localStorage.setItem('isExpanded', String(state.isExpanded))        
      }      
      return { ToggleMenu , state };
    }
  });
</script>

<style lang="scss">

@import "../../styles/theme.scss";

aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;
  
  .logo {
    margin-bottom: 1rem;

    .logo-app {
      width: 2rem;
    }
  }

  .sumary {
      flex: 1 1 0;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;
  
    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  .group-item, .item-menu .text {
    opacity: 0;
    transition: 03s ease-out;
  }

  .group-item {
    color: var(--gray);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .item-menu {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding:  0.5rem 1rem;
      transition: 02s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        margin-right: 1rem;
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons, .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top:-3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .group-item, .item-menu .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>