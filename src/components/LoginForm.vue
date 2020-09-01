<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-alert
        type="error"
        dismissible
        :value="loginErrMsg.length > 0"
      >
        {{ loginErrMsg }}
      </v-alert>
      <v-form ref="loginForm" lazy-validation>
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-at"
          type="email"
          required
          v-model.trim="loginData.email"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          required
          :rules="passwordRules"
          v-model.trim="loginData.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn text small color="secondary" @click="toggleForgotPassword()">Forgot Password</v-btn> -->
      <password-reset />
      <v-btn text small color="secondary" @click="toggleLoginForm()">Create Account</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login()">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import PasswordReset from './PasswordReset.vue';

export default {
  components: { PasswordReset },
  data() {
    return {
      loginErrMsg: '',
      loginData: {
        email: '',
        password: '',
      },
      passwordRules: [
        (v) => !!v || 'Password is required',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    login() {
      this.loginErrMsg = '';
      if (this.$refs.loginForm.validate()) {
        this.$store.dispatch('login', {
          email: this.loginData.email,
          password: this.loginData.password,
        }).catch((error) => {
          this.loginErrMsg = error.message;
        });
      }
    },
    toggleLoginForm() {
      this.$emit('toggleLoginForm');
    },
    toggleForgotPassword() {
      this.$emit('toggleForgotPassword');
    },
  },
};
</script>
