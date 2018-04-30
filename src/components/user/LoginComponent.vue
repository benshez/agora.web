<template>
	<mdc-layout-grid class="content">
		<mdc-layout-cell span=4>
      <mdc-card outlined>
        <mdc-card-header title="User Login" primary></mdc-card-header>
        <div class="mdl-card__secondary">
          <mdc-card-subtitle><b class="mdl-color-text--accent error-message">{{message}}</b></mdc-card-subtitle>
          <mdc-textfield v-validate="'required|email'" :type="'text'" :valid="doValidateUsername()" :required=true :label="'Username'" v-model="Username" id="Username" name="Username" />
          <mdc-textfield v-validate="'required'" :type="'password'" :valid="doValidatePassword()" :required=true :label="'Password'" v-model="Password" id="Password" name="Password" />
        </div>
        <mdc-card-actions>
          <mdc-card-action-buttons>
            <mdc-card-action-button :raised=true v-on:click="onRegister()">Register</mdc-card-action-button>
            <mdc-card-action-button :raised=true>Forgot Password</mdc-card-action-button>
          </mdc-card-action-buttons>
          <mdc-card-action-icons>
            <mdc-card-action-button :raised=true v-on:click="getUser()">Login</mdc-card-action-button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
		</mdc-layout-cell>
  </mdc-layout-grid>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import store from '../../common/store';
import * as mutationTypes from '../../common/store/types';
import { IRootState } from '../../common/interfaces/store/IRootState';

export default {
  name: 'LoginComponent',
  data() {
    return {
      Username: '',
      Password: ''
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
          password: this.Password
        });
      });
    },
    onRegister() {
      this.$emit('clicked', 'register-component');
    }
  },
  computed: {
    ...mapState({
      error: (state: IRootState) => {
        return state.user.error;
      },
      message: (state: IRootState) => {
        return state.user.message;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.error-message {
  text-align: left;
  word-break: break-all;
  color: #d50000;
}
.mdc-textfield-wrapper {
  width: 100%;
}
.mdl-card__secondary {
  padding: 1rem 1rem 0 1rem;
}
@media (min-width: 840px) {
  .mdc-layout-cell:first-child {
    grid-column-start: 5;
  }
}

@media (max-width: 479px) {
  .mdc-layout-grid {
    padding: 0.5rem;
  }
}
</style>
