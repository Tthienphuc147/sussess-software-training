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
            <li class="nav-item">
              <router-link class="nav-link" :to="'/account/sign-in'"
                >Sign In</router-link
              >
            </li>
            <li class="nav-item">
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
  </div>
</template>

<style lang="scss" scoped>
</style>
