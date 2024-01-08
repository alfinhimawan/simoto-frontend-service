<template>
  <div>
    <div class="modal fade" tabindex="-1" role="dialog" ref="addUserModal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tambah User</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Form untuk menambahkan pengguna -->
            <form @submit.prevent="tambahUser">
              <div class="form-group">
                <label for="department">Departemen:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newUser.department"
                  required
                />
              </div>
              <div class="form-group">
                <label for="name">Nama:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newUser.name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="role">Role:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newUser.role"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="newUser.email"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Simpan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        department: "",
        name: "",
        role: "",
        email: "",
      },
      showModal: false,
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    tambahUser() {
      console.log("Tambah user", this.newUser);
      this.resetForm();
      this.hide();
    },
    resetForm() {
      this.newUser = {
        department: "",
        name: "",
        role: "",
        email: "",
      };
    },
  },
};
</script>
