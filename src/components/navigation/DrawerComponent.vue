<template>
    <mdc-drawer slot="drawer" toggle-on="toggle-drawer" temporary class="primary-drawer" >
      <mdc-drawer-list dense>
        <mdc-drawer-item to="/">Home</mdc-drawer-item>
        <mdc-drawer-divider />
        <mdc-drawer-item
          v-for="route in routes"
          :to="route.path"
          :key="route.name">
          {{ route.meta.description }}
        </mdc-drawer-item>
      </mdc-drawer-list>
    </mdc-drawer>
</template>

<script>
export default {
  name: 'DrawerComponent',
  data: () => {
    return {
      routes: []
    };
  },
  created() {
    this.routes = [];
    this.fetchRoutes();
  },
  methods: {
    fetchRoutes() {
      this.routes = this.$_.filter(this.$router.options.routes, function(o) {
        return o.path !== '*' && o.path !== '/';
      });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
