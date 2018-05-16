<template>
  <mdc-layout-grid class="content content-centered">
    <mdc-layout-cell span=4>
      <mdc-card outlined>
        <mdc-card-header title="Forgot Password" primary></mdc-card-header>
        <div class="mdl-card__secondary">
          <mdc-card-subtitle>
            <b class="mdl-color-text--accent error-message">{{message}}</b>
          </mdc-card-subtitle>
          <mdc-textfield v-validate="'required|email'" :type="'text'" :valid="doValidateUsername()" :required=true :label="'Email'" v-model="Username" id="Email" name="Email" />
        </div>
        <mdc-card-actions>
          <mdc-card-action-buttons>
            <mdc-card-action-button :raised=true v-on:click="onNavigate('login-component')">Login</mdc-card-action-button>
            <mdc-card-action-button class="gutter-left" :raised=true v-on:click="onNavigate('register-component')">Register</mdc-card-action-button>
          </mdc-card-action-buttons>
          <mdc-card-action-icons>
            <mdc-card-action-button :raised=true @click="setUser()">Send Password</mdc-card-action-button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </mdc-layout-cell>
  </mdc-layout-grid>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IRootState } from '../../common/modules/base/';
import * as mutationTypes from '../../common/modules/base/store/mutationTypes';

export default {
  name: 'ForgotPasswordComponent',
  data() {
    return {
      Username: '',
      Password: '',
      message: '',
    };
  },
  methods: {
    doValidateUsername() {},
    doValidatePassword() {},
    setUser() {},
    onNavigate(component) {
      this.$store.dispatch(
        `dynamicComponent/${mutationTypes.DYNAMIC_COMPONENT_TOGGLE}`,
        {
          name: '',
          key: component,
        }
      );
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
