<template>
  <mdc-menu-anchor class="agora-languages">
    <mdc-button raised @click="onOpen">{{$store.state.language.LanguageMenuText}}</mdc-button>
    <mdc-menu v-model="open" @select="onSelect" v-bind:class="{ open: open }">
      <mdc-menu-item v-for="lang in languages" v-bind:key="lang.key" v-bind:id="lang.key">{{lang.description}}</mdc-menu-item>
    </mdc-menu>
  </mdc-menu-anchor>
</template>

<script lang='ts'>
import { mapState, mapMutations } from 'vuex';
import { LanguageService, ILanguage } from '../../common/modules/i18n/';
import * as mutationTypes from '../../common/modules/base/store/mutationTypes';
import store from '../../modules/store';

export default {
  name: 'MenuComponent',
  data() {
    return {
      open: false,
      languages: [] as Array<ILanguage>
    };
  },
  methods: {
    onSelect(selected) {
      store.dispatch(
        `language/${mutationTypes.UPDATE_LANGUAGE}`,
        selected.item.id
      );
      const route = Object.assign({}, this.$route);
      route.params.lang = selected.item.id;
      this.$router.push(route);
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
  },
  computed: {}
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
