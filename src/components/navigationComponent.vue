<template>
  <nav class="navbar navbar-expand-lg navbar navbar navbar-dark bg-dark">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <h5 class="Home" href="#">Home</h5>
          </li>
        </ul>

        <div class="d-flex align-items-center">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
          <button type="button" @click="current" class="btn btn-dark px-3 me-2">
            {{ firstName }}
          </button>
          <button type="button" @click="submit" class="btn btn-dark me-3">
            Sign out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  props: {
    firstName: {
      type: String,
      default() {
        return "My name";
      },
    },
    submit: {
      type: Function,
      default() {
        return {};
      },
    },
    current: {
      type: Function,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.d-flex {
  font-size: 80px;
  color: rgb(8, 1, 26);
}
.Home {
  font-size: 40px;
  color: rgb(234, 232, 241);
}
</style>