<template>
  <!-- <div class="modal">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">close</div>
      <h3>Reset Password</h3>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <form @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="you@email.com" />
        </form>
        <button @click="resetPassword()" class="button">Reset</button>
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </div>
  </div> -->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          color="secondary"
          v-bind="attrs"
          v-on="on"
        >
          Forgot Password
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Password Reset
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text v-if="!showSuccess">
          <v-form>
            <p>Enter your email to reset your password</p>
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-at"
              type="email"
              required
              v-model.trim="email"
              :error-messages="errorMsg"
              :rules="emailRules"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-text v-else>
          <v-alert type="success">
            Success! Check your email for a reset link.
          </v-alert>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions  v-if="!showSuccess">
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="resetPassword()"
          >
            Reset
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { auth } from '@/firebase';

export default {
  data() {
    return {
      dialog: false,
      showSuccess: false,
      email: '',
      errorMsg: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    async resetPassword() {
      this.errorMsg = '';
      try {
        await auth.sendPasswordResetEmail(this.email);
        this.showSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    },
  },
};
</script>
