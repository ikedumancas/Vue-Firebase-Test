<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Dashboard. Welcome {{ userProfile.name }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    userProfile() {
      return this.$store.state.userProfile;
    },
  },
};
</script>
