<template>
  <mdc-drawer slot="drawer" toggle-on="toggle-drawer" temporary class="primary-drawer">
    <mdc-drawer-list dense>
      <mdc-drawer-item to="/">{{$store.state.language.HomeMenuItemText}}</mdc-drawer-item>
      <mdc-drawer-divider />
      <mdc-drawer-item v-for="route in routes" :to="route.path" :key="route.name">
        {{$store.state.language[route.meta.translationKey]}}
      </mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IRootState } from '../../common/modules/base/';
import * as mutationTypes from '../../common/modules/base/store/mutationTypes';
import store from '../../modules/store';
import { RouteConfig } from 'vue-router';

export default {
  name: 'DrawerComponent',
  created() {
    store.dispatch(
      `routes/${mutationTypes.GET_ROUTES}`,
      this.$router.options.routes
    );
  },
  methods: {},
  computed: {
    ...mapState({
      routes: (state: IRootState) => {
        return state.routes;
      }
    })
  }
};
</script>

<style lang="scss" scoped>

</style>
