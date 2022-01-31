<template>
  <section
    class="vh-100 bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h3 class="mb-5 text-uppercase align-items-center">
                  Registration form
                </h3>
                <form @submit.prevent="onCreatePost">
                  <registercomp />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import registercomp from "../components/registerComponent.vue";
export default {
  components: {
    registercomp,
  },
  methods: {
    onCreatePost() {
      this.$router.push("/register_success");
      axios
        .post("https://highday-fr-default-rtdb.firebaseio.com/userdata.json", {
          firstName: this.$store.state.firstName,
          lastName: this.$store.state.lastName,
          address: this.$store.state.address,
          DOB: this.$store.state.DOB,
          email: this.$store.state.email,
          password: this.$store.state.password,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
