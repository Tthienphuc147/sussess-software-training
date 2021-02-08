<template>
  <div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mx-auto"
          >
            <div class="form-container">
              <h3 class="login-heading mb-4">Welcome back!</h3>
              <form @submit.prevent="handleSubmit">
                <form-group
                  :validator="$v.signInForm.email"
                  class="form-label-group"
                >
                  <input
                    type="text"
                    v-model="signInForm.email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    :class="{
                      'is-invalid': submitted && $v.signInForm.email.$error,
                    }"
                  />
                </form-group>

                <form-group
                  class="form-label-group"
                  :validator="$v.signInForm.password"
                >
                  <input
                    type="password"
                    v-model="signInForm.password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.signInForm.password.$error,
                    }"
                  />
                </form-group>
                <button
                  class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  created() {},
  data() {
    return {
      signInForm: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  validations: {
    signInForm: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  props: {},
  methods: {
    ...mapActions(["signUserIn"]),
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const requestModel = {
          email: this.signInForm.email,
          password: this.signInForm.password,
        };
        this.signUserIn(requestModel);
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  padding: 40px 50px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
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
