<template>
  <mdc-layout-grid class="content content-centered">
    <mdc-layout-cell span=4>
      <mdc-card outlined>
        <mdc-card-header :title="language.UserLoginTitle" primary></mdc-card-header>
        <div class="mdl-card__secondary">
          <mdc-card-subtitle>
            <b class="mdl-color-text--accent error-message">{{message}}</b>
          </mdc-card-subtitle>
          <mdc-textfield v-validate="'required|email'" :type="'text'" :valid="doValidateUsername()" :required=true :label="'Username'" v-model="Username" id="Username" name="Username" />
          <mdc-textfield v-validate="'required'" :type="'password'" :valid="doValidatePassword()" :required=true :label="'Password'" v-model="Password" id="Password" name="Password" />
        </div>
        <mdc-card-actions>
          <mdc-card-action-buttons>
            <mdc-card-action-button :raised=true v-on:click="onNavigate('register-component')">{{language.RegisterButtonText}}</mdc-card-action-button>
            <mdc-card-action-button class="gutter-left" :raised=true v-on:click="onNavigate('forgot-password-component')">{{language.ForgotPasswordButtonText}}</mdc-card-action-button>
          </mdc-card-action-buttons>
          <mdc-card-action-icons>
            <mdc-card-action-button :raised=true v-on:click="getUser()">{{language.LoginButtonText}}</mdc-card-action-button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </mdc-layout-cell>
  </mdc-layout-grid>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IRootState } from '../../common/';
import * as mutationTypes from '../../common/store/modules/types';
import store from '../../store';

export default {
  name: 'LoginComponent',
  data() {
    return {
      Username: '',
      Password: '',
    };
  },
  methods: {
    doValidateUsername() {
      return !this.$validator.errors.has('Username');
    },
    doValidatePassword() {
      return !this.$validator.errors.has('Password');
    },
    getUser() {
      this.$validator.validateAll().then(result => {
        if (!result) return;
        store.dispatch(`user/${mutationTypes.GET_USER_BY_EMAIL}`, {
          email: this.Username,
          password: this.Password,
        });
      });
    },
    onNavigate(component) {
      this.$emit('clicked', component);
    },
  },
  computed: {
    ...mapState({
      error: (state: IRootState) => {
        return state.user.error;
      },
      message: (state: IRootState) => {
        return state.user.message;
      },
      language: (state: IRootState) => {
        return state.language;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>

</style>
