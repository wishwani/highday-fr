<template>
  <div class="test">
    <div>
      <navBar :submit="submitForm" :current="viewUser" :firstName="this.user" />
    </div>
    <div>
      <ul>
        <usercomp
          v-for="data in datas"
          :data="data"
          :key="data.id"
          ref="nameOfRef"
        >
        </usercomp>
      </ul>
    </div>
  </div>
</template>
<script>
import navBar from "../components/navigationComponent.vue";
import usercomp from "../components/allUserComponent.vue";

export default {
  components: {
    navBar,
    usercomp,
  },
  data() {
    return {
      user: "Current User",
      g: 0,
    };
  },
  computed: {
    datas: {
      get() {
        return this.$store.state.userData;
      },
    },
  },
  methods: {
    submitForm() {
      this.$router.push("/");
    },
    viewUser() {
      this.$router.push("/User");
    },
    save() {
      let Data = this.$refs.nameOfRef.$data;
      console.log(Data);
    },
  },
};
</script>

<style scoped>
.test {
  margin: 0;
}
</style>