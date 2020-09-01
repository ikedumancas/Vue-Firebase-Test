<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Create Account</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-alert
        type="error"
        dismissible
        :value="signupErrMsg.length > 0"
      >
        {{ signupErrMsg }}
      </v-alert>
      <v-form ref="signupForm">
        <v-text-field
          label="Name"
          name="name"
          prepend-icon="mdi-account"
          type="text"
          required
          :rules="nameRules"
          v-model.trim="signupData.name"
        ></v-text-field>
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-at"
          type="email"
          required
          :rules="emailRules"
          v-model.trim="signupData.email"
        ></v-text-field>
        <v-text-field
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          required
          :rules="passwordRules"
          v-model.trim="signupData.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text small color="secondary" @click="toggleLoginForm()">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signup()">Create Account</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      signupErrMsg: '',
      signupData: {
        name: '',
        email: '',
        password: '',
      },
      nameRules: [
        (v) => !!v || 'Name is required',
      ],
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
    signup() {
      this.signupErrMsg = '';
      if (this.$refs.signupForm.validate()) {
        this.$store.dispatch('signup', {
          name: this.signupData.name,
          email: this.signupData.email,
          password: this.signupData.password,
        }).catch((error) => {
          this.signupErrMsg = error.message;
        });
      }
    },
    toggleLoginForm() {
      this.$emit('toggleLoginForm');
    },
  },
};
</script>
