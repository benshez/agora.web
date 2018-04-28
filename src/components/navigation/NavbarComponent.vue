<template>
<div class="mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header mdl-color--primary">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Agora</span>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title mdl-color--primary"><span class="mdl-color-text--white">Agora</span></span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
      <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post a picture</router-link>
    </nav>
  </div>
</div>
</template>
<script>
export default {
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
<style lang="scss" scoped>
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
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
