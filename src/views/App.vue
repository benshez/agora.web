<template>
  <div class="mdc-typography--agora">
    <mdc-layout-app>
      <toolbar-component slot="toolbar" />
      <drawer-component slot="drawer" />
      <div style="display:none">
        <mdc-linear-progress indeterminate/>
      </div>

      <main>
        <router-view />
      </main>
    </mdc-layout-app>
  </div>
</template>

<script lang="ts" scoped>
import DrawerComponent from '../components/navigation/DrawerComponent.vue';
import ToolbarComponent from '../components/navigation/ToolbarComponent.vue';

export default {
  name: 'app',
  components: {
    DrawerComponent,
    ToolbarComponent,
  },
};
</script>

<style lang="scss">
$font-stack: 'Questrial', Helvetica, Arial, sans-serif;
$mdc-theme-primary: #6200ee;
$mdc-theme-text-primary-on-primary: white;

html {
  height: 100%;
  font-size: 1em;
}

body {
  font-family: $font-stack !important;
  margin: 0;
  height: 100%;

  .content {
    font-family: $font-stack !important;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
  }
}

.mdc-typography,
.mdc-typography--agora {
  font-family: $font-stack !important;
  word-spacing: 0.01em;
  .mdc-toolbar__title,
  .mdc-card__title,
  .mdc-drawer-item,
  .mdc-menu-item,
  .mdc-button,
  .mdc-text-field__input {
    font-family: $font-stack !important;
  }

  .mdc-drawer-item,
  .mdc-menu-item,
  .mdc-button,
  .mdc-text-field__input {
    font-size: 1rem;
  }

  .mdc-button {
    background-color: $mdc-theme-primary;
    color: $mdc-theme-text-primary-on-primary;
    text-transform: capitalize;
    font-weight: 400;
  }

  .mdc-drawer-item {
    font-weight: 400;
  }

  .mdc-card__primary {
    background-color: $mdc-theme-primary;
    .mdc-card__title {
      color: $mdc-theme-text-primary-on-primary;
    }
  }

  .mdc-textfield-wrapper {
    width: 100%;
  }

  .mdl-card__secondary {
    padding: 1rem 1rem 0 1rem;
  }
  @media (min-width: 840px) {
    .content-centered {
      .mdc-layout-cell:first-child {
        grid-column-start: 5;
      }
    }
  }

  @media (max-width: 479px) {
    .content-centered {
      .mdc-layout-grid {
        padding: 0.5rem;
      }
    }
  }

  .error-message {
    text-align: left;
    word-break: break-all;
    color: #d50000;
  }

  .gutter-left {
    margin-left: 0.5rem;
  }
}
</style>
