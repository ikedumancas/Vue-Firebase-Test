<template>
  <v-app id="login-view">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <login-form
              @toggleLoginForm="toggleLoginForm"
              v-if="showLogin"
            />
            <signup-form @toggleLoginForm="toggleLoginForm" v-else />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

export default {
  components: { LoginForm, SignupForm },
  data() {
    return {
      showLogin: true,
      showPasswordReset: false,
    };
  },
  methods: {
    toggleLoginForm() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>
