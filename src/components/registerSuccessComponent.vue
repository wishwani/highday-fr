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
              <div class="card-body p-5"></div>

              <div class="text-center">
                <!-- Button HTML (to Trigger Modal) -->
              </div>

              <!-- Modal HTML -->
              <div id="myModal">
                <div class="modal-dialog modal-confirm">
                  <div class="modal-content">
                    <div class="modal-header justify-content-center">
                      <div class="icon-box">
                        <i class="material-icons"></i
                        ><i class="material-icons">&#xE876;</i>
                      </div>
                    </div>
                    <div class="modal-body text-center">
                      <h4>Well Done!</h4>
                      <p>You have been registered successfully.</p>
                      <button
                        @click="gotologin()"
                        class="btn btn-dark"
                        data-dismiss="modal"
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
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
  name: "registersuccess",
  methods: {
    gotologin() {
      this.$router.push("/");
    },
  },
};
</script>


<style scoped lang="scss">
.modal-confirm .modal-content {
  padding: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}
.modal-confirm .modal-header {
  background: #534c43;
  border-bottom: none;
  position: relative;
  text-align: center;
  margin: -20px -20px 0;
  border-radius: 5px 5px 0 0;
  padding: 35px;
}

.modal-confirm .icon-box {
  color: #fff;
  width: 95px;
  height: 95px;
  display: inline-block;
  border-radius: 50%;
  z-index: 9;
  border: 5px solid #fff;
  padding: 15px;
  text-align: center;
}
.modal-confirm .icon-box i {
  font-size: 58px;
  margin: -4px 0 0 -4px;
}

.modal-confirm .btn,
.modal-confirm .btn:active {
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  border-radius: 30px;
  margin-top: 10px;
  padding: 6px 20px;
  border: none;
}
</style>