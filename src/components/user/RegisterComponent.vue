<template>
  <mdc-layout-grid class="content content-centered">
    <mdc-layout-cell span=4>
      <mdc-card outlined>
        <mdc-card-header :title="$store.state.language.UserRegistrationTitle" primary></mdc-card-header>
        <div class="mdl-card__secondary">
          <mdc-card-subtitle>
            <b class="mdl-color-text--accent error-message">{{message}}</b>
          </mdc-card-subtitle>
          <mdc-textfield v-validate="'required'" :type="'text'" :valid="doValidateUsername()" :required=true :label="$store.state.language.UserNameText" v-model="Username" id="Username" name="Username" />
          <mdc-textfield v-validate="'required'" :type="'text'" :valid="doValidateUsername()" :required=true :label="$store.state.language.UserSurnameText" v-model="UserSurname" id="UserSurname" name="UserSurname" />
          <mdc-textfield v-validate="'required|email'" :type="'text'" :valid="doValidateUsername()" :required=true :label="$store.state.language.UserEmailText" v-model="UserEmail" id="UserEmail" name="UserEmail" />
          <div class="mdc-textfield-wrapper">
            <div class="mdc-textfield mdc-text-field mdc-text-field--upgraded">
              <mdc-select v-validate="'required'" :valid="doValidateUsername()" v-model="UserRole" :label="$store.state.language.UserRoleText" id="UserRole" name="UserRole">
                <option v-for="role in UserRoles" v-bind:key="role.id" v-bind:id="role.id" :value="role.id">{{role.role}}</option>
              </mdc-select>
            </div>
          </div>
          <mdc-textfield v-validate="'required'" :type="'password'" :valid="doValidatePassword()" :required=true :label="$store.state.language.UserPasswordText" v-model="Password" id="Password" name="Password" />
          <mdc-textfield v-validate="'required'" :type="'password'" :valid="doValidatePassword()" :required=true :label="$store.state.language.UserPasswordConfirmText" v-model="ConfirmPassword" id="ConfirmPassword" name="ConfirmPassword" />
        </div>
        <mdc-card-actions>
          <mdc-card-action-buttons>
            <mdc-card-action-button :raised=true v-on:click="onNavigate('login-component')">{{$store.state.language.LoginButtonText}}</mdc-card-action-button>
            <mdc-card-action-button class="gutter-left" :raised=true v-on:click="onNavigate('forgot-password-component')">{{$store.state.language.ForgotPasswordButtonText}}</mdc-card-action-button>
          </mdc-card-action-buttons>
          <mdc-card-action-icons>
            <mdc-card-action-button :raised=true @click="addUser()">{{$store.state.language.RegisterButtonText}}</mdc-card-action-button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </mdc-layout-cell>
  </mdc-layout-grid>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { IRootState } from '../../common/modules/base/';
import {
  IUser,
  IUserRoles,
  UserState,
  UserService
} from '../../common/modules/user/';
import * as mutationTypes from '../../common/modules/base/store/mutationTypes';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      open: false,
      Username: '',
      UserSurname: '',
      UserEmail: '',
      Password: '',
      UserRole: '',
      UserRoles: [],
      ConfirmPassword: ''
    };
  },
  methods: {
    doValidateUsername() {
      return !this.$validator.errors.has('Username');
    },
    doValidatePassword() {
      return !this.$validator.errors.has('Password') && this.doPasswordMatch();
    },
    doPasswordMatch() {
      return this.Password === this.ConfirmPassword;
    },
    addUser() {
      this.$validator.validateAll().then(result => {
        debugger;
        if (!result || !this.doPasswordMatch()) return;

        let user: IUser = UserState;
        user.username = this.Username;
        user.usersurname = this.UserSurname;
        user.role = this.UserRole;
        user.email = this.UserEmail;
        user.password = this.Password;

        this.$store.dispatch(`user/${mutationTypes.ADD_USER}`, user);
      });
    },
    onNavigate(component) {
      this.$store.dispatch(
        `dynamicComponent/${mutationTypes.DYNAMIC_COMPONENT_TOGGLE}`,
        {
          name: '',
          key: component
        }
      );
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
  },
  created() {
    new UserService().GET_ALL_USER_ROLES().then(response => {
      this.UserRoles = JSON.parse(response.data) as IUserRoles;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
