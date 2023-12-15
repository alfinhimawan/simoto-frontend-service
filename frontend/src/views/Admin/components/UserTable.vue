<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Users Data</h6>
      <button type="button" class="btn btn-primary btn-sm" @click="tambahData">
        Add
      </button>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table datatable">
          <thead>
            <tr>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                No
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Departemen
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Nama
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Role
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Email
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in paginatedUser" :key="index">
              <td class="text-center">{{ user.number }}</td>
              <td class="text-center">{{ user.department }}</td>
              <td class="text-center">{{ user.name }}</td>
              <td class="text-center">{{ user.role }}</td>
              <td class="text-center">{{ user.email }}</td>
              <td class="text-center">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  @click="editUser(index)"
                >
                  <i class="fas fa-edit"></i>
                </a>
                <span class="text-secondary font-weight-bold text-xs"> / </span>
                <a
                  href="javascript:;"
                  class="text-danger font-weight-bold text-xs"
                  @click="deleteUser(index)"
                >
                  <i class="fas fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          aria-label="Page navigation example"
          style="margin-left: 20px; margin-right: 20px"
        >
          <ul class="pagination justify-content-start">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a
                class="page-link"
                href="javascript:;"
                @click="prevPage"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li
              class="page-item"
              v-for="page in totalPage"
              :key="page"
              :class="{ active: page === currentPage }"
            >
              <a
                class="page-link"
                href="javascript:;"
                @click="changePage(page)"
                >{{ page }}</a
              >
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPage }"
            >
              <a
                class="page-link"
                href="javascript:;"
                @click="nextPage"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-tables",
  data() {
    return {
      user: [
        {
          department: "Manajemen",
          name: "John Michael",
          role: "Manager",
          email: "john@creative-tim.com",
        },
        {
          department: "Pengembangan",
          name: "Alexa Liras",
          role: "Programator",
          email: "alexa@creative-tim.com",
        },
        {
          department: "Eksekutif",
          name: "Laurent Perrier",
          role: "Eksekutif",
          email: "laurent@creative-tim.com",
        },
        {
          department: "Pengembangan",
          name: "Michael Levi",
          role: "Programator",
          email: "michael@creative-tim.com",
        },
        {
          department: "Manajemen",
          name: "Richard Gran",
          role: "Manager",
          email: "richard@creative-tim.com",
        },
        {
          department: "Pengembangan",
          name: "Miriam Eric",
          role: "Programtor",
          email: "miriam@creative-tim.com",
        },
      ],
      currentPage: 1,
      itemsPerPage: 5,
      searchTerm: "",
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.user.length / this.itemsPerPage);
    },
    paginatedUser() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      const currentPageItems = this.user.slice(start, end);

      // Hitung nomor urut untuk item pada halaman saat ini
      const currentPageItemNumbers = currentPageItems.map(
        (item, index) => start + index + 1
      );

      // Gabungkan nomor urut dengan data user
      return currentPageItems.map((item, index) => ({
        ...item,
        number: currentPageItemNumbers[index],
      }));
    },
  },
  methods: {
    tambahData() {
      // Fungsi untuk menangani tombol "Tambah Data"
      console.log("Tambah data");
    },
    editUser(index) {
      // Fungsi untuk mengedit pengguna
      console.log("Edit user", index);
    },
    deleteUser(index) {
      // Fungsi untuk menghapus pengguna
      console.log("Delete user", index);
    },
    changePage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
  },
};
</script>
