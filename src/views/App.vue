<template>
  <div class="mdc-typography--comfortaa">
    <mdc-layout-app>
      <toolbar-component slot="toolbar"/>
		  <drawer-component slot="drawer"/>
      <mdc-linear-progress indeterminate/>

      <main>
        <router-view />
      </main>
    </mdc-layout-app>
  </div>
</template>

<script lang="js" scoped>
import DrawerComponent from '../components/navigation/DrawerComponent.vue';
import ToolbarComponent from '../components/navigation/ToolbarComponent.vue';

export default {
  name: 'app',
  components: {
    DrawerComponent,
    ToolbarComponent
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2)
      format('woff2');
  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da,
    U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  src: local('Comfortaa Regular'), local('Comfortaa-Regular'),
    url(https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2)
      format('woff2');
  unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da,
    U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

$font-stack: 'Comfortaa', Helvetica, Arial, sans-serif;

html {
  overflow: hidden;
  height: 100%;
}

body {
  font-family: $font-stack !important;
  margin: 0;
  height: 100%;

  .content {
    font-family: $font-stack !important;
  }
}
.mdc-typography--comfortaa {
  font-family: $font-stack !important;
}
</style>
