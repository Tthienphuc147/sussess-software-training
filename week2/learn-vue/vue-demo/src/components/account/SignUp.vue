
<template>
  <div>
    <div class="row no-gutter m-0">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Sign up</h3>
                <form>
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Email address"
                      required
                      autofocus
                    />
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
}
.image {
  min-height: 100vh;
}
.bg-image {
  background-image: url("https://source.unsplash.com/WEQbe2jBg40/600x1200");
  background-size: cover;
  background-position: center;
}
.login-heading {
  font-weight: 300;
}
.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}
.form-label-group {
  position: relative;
  margin-bottom: 1rem;
  input {
    border-radius: 20px;
    height: 45px;
  }
}
</style>

