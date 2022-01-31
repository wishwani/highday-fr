<template>
  <navBar :submit="goTosignout" :current="goTouser" :firstName="this.user" />
  <section
    class="vh-100 bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-10">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h6 class="my-3">
                  Welcome
                  {{ $store.state.signedUser.firstName }}
                  {{ $store.state.signedUser.lastName }}!
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import navBar from "../components/navigationComponent.vue";

export default {
  name: "form",
  components: {
    navBar,
  },
  data() {
    return {
      user: " Manage User Settings",
    };
  },
  created() {},
  methods: {
    goTosignout() {
      this.$router.push("/");
    },
    goTouser() {
      this.$router.push("/Userlist");
    },
    tet() {
      console.log(this.$store.state.userData);
    },
  },
};
</script>
<style scoped>
.my-3 {
  font-size: 80px;
  color: rgb(8, 1, 26);
}
</style>