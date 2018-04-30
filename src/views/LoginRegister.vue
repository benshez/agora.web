<template>
  <mdc-layout-app>
    <keep-alive>
      <component v-on:clicked="onToggle" v-bind:is="dynamicComponent"></component>
    </keep-alive>
  </mdc-layout-app>
</template>

<script>
import LoginComponent from '../components/user/LoginComponent.vue';
import RegisterComponent from '../components/user/RegisterComponent.vue';

export default {
  name: 'LoginRegister',
  components: {
    LoginComponent,
    RegisterComponent
  },
  data() {
    return {
      dynamicComponent: 'login-component'
    };
  },
  methods: {
    onToggle(arg) {
      this.dynamicComponent = arg;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
