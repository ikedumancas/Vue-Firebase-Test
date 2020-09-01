<template>
  <div id="app">
    <v-main>
      <site-nav v-if="showNav"></site-nav>
      <router-view/>
    </v-main>
  </div>
</template>

<script>
import SiteNav from './components/SiteNav.vue';

export default {
  components: { SiteNav },
  computed: {
    showNav() {
      return Object.keys(this.$store.state.userProfile).length > 1;
    },
  },
};
</script>
