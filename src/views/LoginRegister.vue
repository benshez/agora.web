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
import ForgotPasswordComponent from '../components/user/ForgotPasswordComponent.vue';

export default {
  name: 'LoginRegister',
  components: {
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
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
