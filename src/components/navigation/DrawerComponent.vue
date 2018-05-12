<template>
  <mdc-drawer slot="drawer" toggle-on="toggle-drawer" temporary class="primary-drawer">
    <mdc-drawer-list dense>
      <mdc-drawer-item to="/">Home</mdc-drawer-item>
      <mdc-drawer-divider />
      <mdc-drawer-item v-for="route in routes" :to="route.path" :key="route.name">
        {{ route.meta.description }}
      </mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IRootState } from '../../common/modules/base/';
import * as mutationTypes from '../../common/modules/base/store/mutationTypes';
import store from '../../store';

export default {
  name: 'DrawerComponent',
  created() {
    store.dispatch(
      `routes/${mutationTypes.GET_ROUTES}`,
      this.$router.options.routes
    );
    this.$eventBus.$on('UPDATE_LANGUAGE', this.updateRoutes);
  },
  methods: {
    fetchRoutes() {
      let state = this.$store.state;
      this.routes = this.$_.filter(this.$router.options.routes, function(o) {
        o.meta.description = state.language[o.meta.translationKey];
        return o.path !== '*' && o.path !== '/';
      });
    },
    updateRoutes(args) {
      store.dispatch(`routes/${mutationTypes.UPDATE_ROUTES}`, [
        this.$router.options.routes,
        this.$store.state
      ]);
    }
  },
  computed: {
    ...mapState({
      routes: (state: IRootState) => {
        return state.routes;
      }
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('UPDATE_LANGUAGE');
  }
};
</script>
<style lang="scss" scoped>

</style>
