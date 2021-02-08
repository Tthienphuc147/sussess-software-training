<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Meeting Up</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="'/'">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/meet-up/meet-up-list'"
                >Meet up</router-link
              >
            </li>
            <li class="nav-item" @click="onLogout()" v-if="userIsAuthenticated">
              <div class="nav-link">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </div>
              >
            </li>
            <li class="nav-item" v-if="!userIsAuthenticated">
              <router-link class="nav-link" :to="'/account/sign-in'"
                >Sign In</router-link
              >
            </li>
            <li class="nav-item" v-if="!userIsAuthenticated">
              <router-link class="nav-link" :to="'/account/sign-up'"
                >Sign Up</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="fluid-container">
      <router-view></router-view>
    </div>
    <notifications group="notification" position="bottom right" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["user"]),
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
  methods: {
    ...mapActions(["logout", "loadMeetUps"]),
    onLogout() {
      this.logout();
    },
  },
  mounted() {
    this.loadMeetUps();
  },
};
</script>
<style lang="scss">
.nav-link {
  i {
    cursor: pointer;
  }
}
.form-error {
  color: red;
  margin-top: 5px;
  font-size: 12px;
}
</style>
