<template>
  <div class="mdl-grid">
    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title mdl-color--orange-800">
        <h2 class="mdl-card__title-text mdl-color-text--white">User Login</h2>
      </div>
      <div class="mdl-card__supporting-text mdl-grid">
        <b class="mdl-color-text--accent">Error message goes here</b>
        <form method="POST" action="">
          <input type="hidden" name="action" value="login"/>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label class="mdl-textfield__label mdl-color-text--grey" for="textfield_username">Username</label>
            <input class="mdl-textfield__input" type="text" id="textfield_username" name="username"/>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <label class="mdl-textfield__label mdl-color-text--grey" for="textfield_password">Password</label>
            <input class="mdl-textfield__input" type="password" id="textfield_password" name="password"/>
          </div>
          <div class="mdl-cell mdl-cell--12-col send-button" align="center">
            <button type="submit" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored mdl-color--primary">
              Log In
            </button>
            <button type="button" @click="toggle(card)" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored mdl-color--primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
