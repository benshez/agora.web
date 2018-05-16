<template>
  <mdc-layout-app>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
  </mdc-layout-app>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import LoginComponent from '../../components/user/LoginComponent.vue';
import RegisterComponent from '../../components/user/RegisterComponent.vue';
import ForgotPasswordComponent from '../../components/user/ForgotPasswordComponent.vue';
import { IRootState } from '../../common/modules/base/';
import * as mutationTypes from '../../common/modules/base/store/mutationTypes';

export default {
  name: 'Login',
  components: {
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  },
  methods: {},
  created() {
    this.$store.dispatch(
      `dynamicComponent/${mutationTypes.DYNAMIC_COMPONENT_TOGGLE}`,
      {
        name: '',
        key: 'login-component',
      }
    );
  },
  computed: {
    ...mapState({
      component: (state: IRootState) => {
        return state.dynamicComponent.key;
      },
    }),
  },
};
</script>
<style lang="scss" scoped>
</style>
