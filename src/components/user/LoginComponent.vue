<template>
  <div class="mdl-grid">
    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title mdl-color--primary">
        <h2 class="mdl-card__title-text mdl-color-text--white">User Login</h2>
      </div>
      <div class="mdl-card__supporting-text mdl-grid">

        <b class="mdl-color-text--accent error-message">{{message}}</b>

        <form method="POST" action="">
          <input type="hidden" name="action" value="login"/>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label class="mdl-textfield__label mdl-color-text--grey" for="loginUsername">Username</label>
            <input v-validate="'required|email'" class="mdl-textfield__input" type="text" id="loginUsername" v-model="loginUsername" name="loginUsername"/>
            <span class="mdl-textfield__error" v-show="errors.has('loginUsername')">{{ errors.first('loginUsername') }}</span>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label class="mdl-textfield__label mdl-color-text--grey" for="textfield_password">Password</label>
            <input class="mdl-textfield__input" type="password" id="textfield_password" v-model="loginPassword" name="password"/>
          </div>

          <div class="mdl-cell mdl-cell--12-col send-button" align="center">
            <button type="button" v-on:click="getUser()" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored mdl-color--primary">
            Log In
            </button>
            <button type="button" v-on:click="getUser()" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored mdl-color--primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
      loginUsername: '',
      loginPassword: ''
    };
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
  },
  methods: {
    getUser() {
      this.$validator.validateAll().then(result => {
        if (!result) return;
        store.dispatch(`user/${mutationTypes.GET_USER_BY_EMAIL}`, {
          email: this.loginUsername,
          password: this.loginPassword
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.util-center {
  margin: auto;
}

.util-max-512px {
  max-width: 512px;
}

.util-spacing-h--40px {
  margin-top: 40px;
  margin-bottom: 40px;
}
.util-no-decoration {
  text-decoration: none;
}

.mdl-textfield.is-dirty .mdl-textfield__error,
.mdl-textfield.is-focused .mdl-textfield__error {
  visibility: visible;
}

.error-message {
  text-align: left;
  word-break: break-all;
}
</style>
