import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password);
      dispatch('fetchUserProfile', user);
    },

    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      commit('setUserProfile', { ...userProfile.data(), id: user.uid, email: user.email });
      router.push('/').catch(() => {});
    },

    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
      });
      dispatch('fetchUserProfile', user);
    },

    async logout({ commit }) {
      await fb.auth.signOut();
      commit('setUserProfile', {});
      router.push('/login');
    },
  },
  modules: {
  },
});
