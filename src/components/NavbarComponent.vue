<template>
<div class="mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Agora</span>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Agora</span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
      <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post a picture</router-link>
    </nav>
  </div>
</div>
</template>
<script>
module.exports = {
  name: 'NavbarComponent',
  route: {},
  methods: {
    hideMenu: () => {
      document
        .getElementsByClassName('mdl-layout__drawer')[0]
        .classList.remove('is-visible');
      document
        .getElementsByClassName('mdl-layout__obfuscator')[0]
        .classList.remove('is-visible');
    }
  }
};
</script>
<style>
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
}
</style>
