<template>
  <section
    class="vh-100 bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
    "
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <span class="h1 fw-bold mb-0" style="color: #393f81"
                        >Sign In</span
                      >
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="color: #393f81">
                      Please enter your login and password
                    </h5>

                    <form
                      v-on:submit.prevent="goTouser()"
                      @click="$store.dispatch('getData')"
                    >
                      <div>
                        <div class="form-floating mb-3 mt-3">
                          <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            id="email"
                            style="color: #393f81"
                            name="email"
                            required
                          />
                          <label for="email">Email</label>
                        </div>
                        <div class="form-floating mt-3 mb-3">
                          <input
                            v-model="password"
                            :type="value ? 'password' : 'text'"
                            class="form-control"
                            id="pwd"
                            name="pswd"
                            style="color: #393f81"
                            required
                            :append-icon="
                              value ? 'visibility' : 'visibility_off'
                            "
                            @click:append="() => (value = !value)"
                          />
                          <label for="pwd">Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>

                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Don't have an account?
                      <a
                        href="#!"
                        @click="goToRegister()"
                        style="color: #393f81"
                        >Create new account</a
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      value: String,
    };
  },

  computed: {
    email: {
      get() {
        return this.$store.state.currentEmail;
      },
      set(value) {
        this.$store.commit("updateCurrentEmail", value);
      },
    },
    password: {
      get() {
        return this.$store.state.currentPassword;
      },
      set(value) {
        this.$store.commit("updateCurrentPassword", value);
      },
    },
  },
  methods: {
    goToRegister() {
      this.$router.push("/Register");
    },
    goTouser() {
      console.log(this.$store.state.userData[0]);
      for (const element of this.$store.state.userData) {
        if (element.email == this.email && element.password == this.password) {
          this.$router.push("/User");
          this.$store.state.signedUser = element;
        }
      }
    },
    tst() {
      console.log(this.email);
      console.log(this.password);
    },
  },
};
</script>

<style scoped lang="scss">
.img-fluid {
  width: 650px;
  height: 609px;
  border-radius: 1rem 0 0 1rem;
}
</style>