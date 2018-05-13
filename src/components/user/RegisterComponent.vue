<template>
  <mdc-layout-grid class="content content-centered">
    <mdc-layout-cell span=4>
      <mdc-card outlined>
        <mdc-card-header :title="$store.state.language.UserRegistrationTitle" primary></mdc-card-header>
        <div class="mdl-card__secondary">
          <mdc-card-subtitle>
            <b class="mdl-color-text--accent error-message">{{message}}</b>
          </mdc-card-subtitle>
          <mdc-textfield v-validate="'required|email'" :type="'text'" :valid="doValidateUsername()" :required=true :label="$store.state.language.UserNameText" v-model="Username" id="Username" name="Username" />
          <mdc-textfield v-validate="'required'" :type="'password'" :valid="doValidatePassword()" :required=true :label="$store.state.language.UserPasswordText" v-model="Password" id="Password" name="Password" />
          <mdc-textfield v-validate="'required'" :type="'password'" :valid="doValidatePassword()" :required=true :label="$store.state.language.UserPasswordConfirmText" v-model="Password" id="ConfirmPassword" name="ConfirmPassword" />
        </div>
        <mdc-card-actions>
          <mdc-card-action-buttons>
            <mdc-card-action-button :raised=true v-on:click="onNavigate('login-component')">{{$store.state.language.LoginButtonText}}</mdc-card-action-button>
            <mdc-card-action-button class="gutter-left" :raised=true v-on:click="onNavigate('forgot-password-component')">{{$store.state.language.ForgotPasswordButtonText}}</mdc-card-action-button>
          </mdc-card-action-buttons>
          <mdc-card-action-icons>
            <mdc-card-action-button :raised=true @click="setUser()">{{$store.state.language.RegisterButtonText}}</mdc-card-action-button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </mdc-layout-cell>
  </mdc-layout-grid>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IRootState } from '../../common/modules/base/';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      Username: '',
      Password: '',
      message: ''
    };
  },
  methods: {
    doValidateUsername() {},
    doValidatePassword() {},
    setUser() {},
    onNavigate(component) {
      this.$emit('clicked', component);
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>

</style>
