``<template>
  <br />
  <table class="table table-hover table-light">
    <tbody>
      <tr>
        <td>{{ data.firstName }} {{ data.lastName }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.address }}</td>
        <td>{{ data.DOB }}</td>
        <td>
          <span>
            <a
              href="#editEmployee"
              role="button"
              class="response-edit btn btn-primary"
              data-toggle="modal"
            >
              Edit
            </a>
          </span>
          <span>
            <a
              href="#deleteEmployee"
              @click="deleteData(data.id)"
              role="button"
              class="response-edit btn btn-primary"
              data-toggle="modal"
              >Delete
            </a>
          </span>
        </td>
      </tr>
    </tbody>
  </table>

  <div id="editEmployee" class="modal fade">
    <editUser />
  </div>

  <div id="deleteEmployee" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h4 class="modal-title">Delete Account</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete these Record?</p>
          </div>
          <div class="modal-footer">
            <input
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              value="Cancel"
            />
            <input type="submit" class="btn btn-danger" value="Delete" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import editUser from "./updateUserComponent.vue";
import axios from "axios";
export default {
  name: "usercomp",
  components: {
    editUser,
  },

  methods: {
    deleteData(id) {
      axios

        .delete(
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
  props: {
    data: Object,
  },
  computed: {
    gt() {
      console.log("key", this.key);
      return this.key;
    },
  },
};
</script>

<style scoped>
span {
  padding-left: 35px;
}
table,
th,
td {
  table-layout: fixed;
  border-collapse: collapse;
  margin: 0;
  font-size: 0.9em;
  font-family: sans-serif;
}

td {
  width: 25%;
}
.edit {
  font-size: 15px;
  color: aliceblue;
}
.delete {
  font-size: 15px;
  color: aliceblue;
}
</style>
