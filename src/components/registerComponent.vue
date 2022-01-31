<template>
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="form-outline">
        <input
          v-model="firstName"
          placeholder="First Name"
          type="text"
          class="form-control form-control-lg"
          required
        />
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="form-outline">
        <input
          v-model="lastName"
          placeholder="Last Name"
          type="text"
          class="form-control form-control-lg"
          required
        />
      </div>
    </div>
  </div>

  <div class="row"></div>

  <div class="form-outline mb-4">
    <input
      v-model="address"
      placeholder="Address"
      type="text"
      class="form-control form-control-lg"
      required
    />
  </div>

  <div class="form-outline mb-4">
    <input
      v-model="DOB"
      placeholder="DOB"
      type="text"
      class="form-control form-control-lg"
      required
    />
  </div>

  <div class="form-outline mb-4">
    <input
      v-model="email"
      placeholder="Email"
      type="email"
      class="form-control form-control-lg"
      required
    />
  </div>

  <div class="form-outline mb-4">
    <input
      :rules="[required, min6]"
      v-model="password"
      placeholder="Password"
      type="password"
      class="form-control form-control-lg"
      required
      :counter="6"
    />
  </div>

  <div class="form-outline mb-4">
    <input
      :rules="[required, min6, matchingPasswords]"
      v-model="password1"
      :counter="6"
      placeholder="Confirm Password"
      type="password"
      class="form-control form-control-lg"
      required
    />
  </div>

  <div class="form-check d-flex justify-content-start mb-4 pb-3">
    <input
      class="form-check-input me-3"
      type="checkbox"
      value=""
      id="form2Example3c"
    />
    <label class="form-check-label text-gray" for="form2Example3">
      I do accept the
      <a href="#!" class="text-gray"><u>Terms and Conditions</u></a> of your
      site.
    </label>
  </div>

  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button type="reset" class="btn btn-dark">Reset</button>

    <button type="submit" class="btn btn-dark">Submit</button>
  </div>
</template>

<script>
export default {
  name: "registercomp",
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName;
      },
      set(value) {
        this.$store.commit("updateFirstName", value);
      },
    },

    lastName: {
      get() {
        return this.$store.state.lastName;
      },
      set(value) {
        this.$store.commit("updateLastName", value);
      },
    },

    address: {
      get() {
        return this.$store.state.address;
      },
      set(value) {
        this.$store.commit("updateAddress", value);
      },
    },
    DOB: {
      get() {
        return this.$store.state.DOB;
      },
      set(value) {
        this.$store.commit("updateDOB", value);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      },
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(value) {
        this.$store.commit("updatePassword", value);
      },
    },
  },
  methods: {
    onReset(event) {
      event.preventDefault();
      // Reset values
      this.firstName = "";
      this.lastName = "";
      this.address = "";
      this.DOB = null;
      this.email = "";
      this.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>


<style scoped>
.card-registration {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0m;
  padding-right: 0em;
  padding-top: 0cm;
  margin-top: 0ch;
}

input[type="text"] {
  border: 1px solid #ccc;
  height: 0.2cm;
}

::placeholder {
  font-size: 1em;
}
</style>