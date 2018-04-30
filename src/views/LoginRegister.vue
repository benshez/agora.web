<template>
  <mdc-layout-app>
    <login-component />
    <register-component />
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
  }
};
</script>
<style lang="scss" scoped>

</style>
