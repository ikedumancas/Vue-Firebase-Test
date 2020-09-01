<template>
  <v-navigation-drawer
    dark
    app
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <v-list>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ userProfile.name.trim() }}</v-list-item-title>
          <v-list-item-subtitle>{{ userProfile.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="link in navLinks" link :to="link.to" :key="link.to">
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="logout()"><v-icon>mdi-logout</v-icon> Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      navLinks: [
        {
          name: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/',
        },
        {
          name: 'Expenses',
          icon: 'mdi-cash-minus',
          to: '/expenses',
        },
        {
          name: 'Revenues',
          icon: 'mdi-cash-plus',
          to: '/revenues',
        },
        {
          name: 'Settings',
          icon: 'mdi-cog',
          to: '/settings',
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    ...mapState(['userProfile']),
  },
};
</script>
