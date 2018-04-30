<template>
  <div class="mdc-typography--comfortaa">
    <mdc-layout-app>
      <toolbar-component slot="toolbar"/>
		  <drawer-component slot="drawer"/>
      <div style="display:none">
      <mdc-linear-progress indeterminate/>
      </div>

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
$font-stack: 'Comfortaa', Helvetica, Arial, sans-serif;
$mdc-theme-primary: #6200ee;
$mdc-theme-text-primary-on-primary: white;

html {
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
.mdc-typography,
.mdc-typography--comfortaa {
  font-family: $font-stack !important;

  .mdc-toolbar__title,
  .mdc-drawer-item,
  .mdc-card__title,
  .mdc-button,
  .mdc-text-field__input {
    font-family: $font-stack !important;
  }

  .mdc-drawer-item {
    font-weight: 900;
  }

  .mdc-card__primary {
    background-color: $mdc-theme-primary;
    .mdc-card__title {
      color: $mdc-theme-text-primary-on-primary;
    }
  }
}
</style>
