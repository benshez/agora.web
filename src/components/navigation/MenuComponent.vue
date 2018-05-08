<template>
  <mdc-menu-anchor class="agora-languages">
    <mdc-button raised @click="onOpen">Open Menu</mdc-button>
    <mdc-menu v-model="open" @select="onSelect" v-bind:class="{ open: open }">
      <mdc-menu-item>Afrikaans</mdc-menu-item>
      <mdc-menu-item>Another Menu Item</mdc-menu-item>
      <mdc-menu-item disabled>Disabled Menu Item</mdc-menu-item>
      <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
      <mdc-menu-item>Parted Menu Item</mdc-menu-item>
    </mdc-menu>
  </mdc-menu-anchor>
</template>

<script lang='ts'>
import { i18n } from '../../common';
import { mapState, mapMutations } from 'vuex';
// import { i18n } from '~common/language';
import * as mutationTypes from '~common/store/types';
import store from '~store';

export default {
  name: 'MenuComponent',
  data() {
    return {
      open: false
    };
  },
  methods: {
    ...mapMutations([`language/${mutationTypes.UPDATE_LANGUAGE}`]),
    onSelect(selected) {
      store.dispatch(`language/${mutationTypes.UPDATE_LANGUAGE}`, 'af');
      this.onToggle();
    },
    onOpen() {
      this.onToggle();
    },
    onToggle() {
      this.open = !this.open;
    }
  },
  created() {
    store.dispatch(`language/${mutationTypes.UPDATE_LANGUAGE}`, i18n.default);
  }
};
</script>

<style scoped lang="scss">
.agora-languages {
  .mdc-simple-menu {
    right: 0;

    &.open {
      opacity: 1;
      display: block;
    }
  }
}
</style>
