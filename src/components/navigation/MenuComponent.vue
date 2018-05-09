<template>
  <mdc-menu-anchor class="agora-languages">
    <mdc-button raised @click="onOpen">Open Menu</mdc-button>
    <mdc-menu v-model="open" @select="onSelect" v-bind:class="{ open: open }">
      <mdc-menu-item data-v="af">Afrikaans</mdc-menu-item>
      <mdc-menu-item data-v="en">Another Menu Item</mdc-menu-item>
      <mdc-menu-item disabled>Disabled Menu Item</mdc-menu-item>
      <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
      <mdc-menu-item>Parted Menu Item</mdc-menu-item>
    </mdc-menu>
  </mdc-menu-anchor>
</template>

<script lang='ts'>
import { mapState, mapMutations } from 'vuex';
import { LanguageService } from '../../common/services/i18n/LanguageService';
import * as mutationTypes from '../../common/store/modules/types';
import { ILanguages } from '../../common/interfaces/i18n/ILanguage';
import store from '../../store';

export default {
  name: 'MenuComponent',
  data() {
    return {
      open: false,
      languages: []
    };
  },
  methods: {
    //...mapMutations([`language/${mutationTypes.GET_LANGUAGE}`]),
    onSelect(selected) {
      store.dispatch(
        `language/${mutationTypes.UPDATE_LANGUAGE}`,
        selected.item.dataset.v
      );
      this.onToggle();
    },
    onOpen() {
      this.onToggle();
    },
    onToggle() {
      this.open = !this.open;
    },
    getLanguages() {
      this.languages = new LanguageService().GET_LANGUAGES();
    }
  },
  created() {
    let DEFAULT_LANGUAGE = new LanguageService().GET_DEFAULT_LANGUAGE();
    store.dispatch(`language/${mutationTypes.GET_LANGUAGE}`, DEFAULT_LANGUAGE);
    this.getLanguages();
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
