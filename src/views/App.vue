<script>
import NavbarComponent from '../components/navigation/NavbarComponent.vue';
import LoginComponent from '../components/user/LoginComponent.vue';

require('material-design-lite');

export default {
  name: 'app',
  components: {
    NavbarComponent,
    LoginComponent
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>

<template>
  <div id="appContainer" class="mdl-js-layout">
    <navbar-component></navbar-component>
    <main class="mdl-layout__content">
      <div class="page-content">
        <login-component></login-component>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style>
html {
  overflow: hidden;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 80px;
}

.page-content {
  overflow: auto;
  position: fixed;
  width: 100%;
  top: 65px;
  bottom: 0;
}
</style>
