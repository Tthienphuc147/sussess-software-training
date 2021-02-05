<template>
  <div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mx-auto"
          >
            <div class="form-container">
              <h3 class="login-heading mb-4">Sign up</h3>
              <form @submit.prevent="handleSubmit">
                <div class="form-label-group">
                  <input
                    type="email"
                    placeholder="Email address"
                    autofocus
                    v-model="signUpForm.email"
                    id="email"
                    name="email"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.signUpForm.email.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.signUpForm.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.signUpForm.email.required"
                      >Email is required</span
                    >
                    <span v-if="!$v.signUpForm.email.email"
                      >Email is invalid</span
                    >
                  </div>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    v-model="signUpForm.password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.signUpForm.password.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.signUpForm.password.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.signUpForm.password.required"
                      >Password is required</span
                    >
                    <span v-if="!$v.signUpForm.password.minLength"
                      >Password must be at least 6 characters</span
                    >
                  </div>
                </div>
                <div class="form-label-group">
                  <input
                    type="password"
                    v-model="signUpForm.confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    class="form-control"
                    placeholder="Confirm password"
                    :class="{
                      'is-invalid':
                        submitted && $v.signUpForm.confirmPassword.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.signUpForm.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.signUpForm.confirmPassword.required"
                      >Confirm Password is required</span
                    >
                    <span
                      v-else-if="!$v.signUpForm.confirmPassword.sameAsPassword"
                      >Passwords must match</span
                    >
                  </div>
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
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  created() {},
  data() {
    return {
      signUpForm: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  validations: {
    signUpForm: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  props: {},
  methods: {
    ...mapActions(["signUserUp"]),
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const requestModel = {
          email: this.signUpForm.email,
          password: this.signUpForm.password,
        };
        this.signUserUp(requestModel);
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
