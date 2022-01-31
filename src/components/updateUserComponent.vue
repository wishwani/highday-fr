<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h4 class="modal-title">Edit Employee</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Address</label>
            <textarea class="form-control" required></textarea>
          </div>
          <div class="form-group">
            <label>DOB</label>
            <input type="text" class="form-control" required />
          </div>
        </div>
        <div class="modal-footer">
          <input
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
            value="Cancel"
          />
          <input
            type="submit"
            class="btn btn-info"
            onclick="updateData(data.id)"
            value="Save"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import usercomp from "./allUserComponent.vue";
import axios from "axios";
export default {
  name: "Edit_User",

  methods: {
    updateData(id) {
      alert(id);
      axios

        .patch(
          "https://highday-fr-default-rtdb.firebaseio.com/userdata/" +
            id +
            ".json",
          {
            data: {},
          }
        )
        .then(
          (response) => {
            console.log(response);
            //alert('response = ' + response)
          },
          (error) => {
            console.log(error);
            //alert('error = ' + error)
          }
        );
    },
  },
};
</script>
