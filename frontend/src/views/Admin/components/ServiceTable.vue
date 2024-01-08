<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Kelola Riwayat Service</h6>
      <div class="d-flex align-items-center">
        <button
          type="button"
          class="btn btn-primary btn-sm"
          @click="tambahData"
        >
          <i class="fa fa-circle-plus"></i> Tambah
        </button>
        <!-- Search Input -->
        <div class="col-sm-2 mt-n3">
          <!-- Coba beberapa nilai untuk mt-n -->
          <input
            type="text"
            style="margin-left: 5px"
            class="form-control"
            v-model="searchTerm"
            placeholder="Search..."
          />
        </div>
        <div class="input-group-append">
          <button
            style="margin-left: 8px"
            class="btn btn-primary align-self-start"
            @click="search"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
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
                Alias Name
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tempat Service
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Service Awal
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Service Selesai
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Detail
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Pic
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(service, index) in paginatedService" :key="index">
              <td class="text-center">
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </td>
              <td class="text-center">{{ service.alias_name }}</td>
              <td class="text-center">{{ service.tempat_service }}</td>
              <td class="text-center">{{ service.tgl_service_awal }}</td>
              <td class="text-center">{{ service.tgl_service_selesai }}</td>
              <td class="text-center">{{ service.detail_service }}</td>
              <td class="text-center">{{ service.pic }}</td>
              <td class="text-center">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  @click="editService(index)"
                >
                  <i class="fas fa-pen-to-square"></i>
                </a>
                <span class="text-secondary font-weight-bold text-xs"> / </span>
                <a
                  href="javascript:;"
                  class="text-danger font-weight-bold text-xs"
                  @click="deleteService(index)"
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
  name: "service-tables",
  data() {
    return {
      service: [
        {
          alias_name: "Unit 1",
          tempat_service: "Madiun",
          tgl_service_awal: "2023-10-21",
          tgl_service_selesai: "2023-11-02",
          detail_service: "-",
          pic: "Aji Budiman",
        },
        {
          alias_name: "Unit 2",
          tempat_service: "Madiun",
          tgl_service_awal: "2023-10-29",
          tgl_service_selesai: "2023-11-05",
          detail_service: "-",
          pic: "Aji Budiman",
        },
      ],
      currentPage: 1,
      itemsPerPage: 5, 
      searchTerm: ""
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.service.length / this.itemsPerPage);
    },
    paginatedService() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.service.slice(startIndex, endIndex);
    },
  },
  methods: {
    // Fungsi-fungsi untuk navigasi halaman
    changePage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    tambahData() {
      // Fungsi untuk menangani tombol "Tambah Data"
      console.log("Tambah data");
    },
    editService(index) {
      // Fungsi untuk mengedit service
      console.log("Edit service", index);
    },
    deleteService(index) {
      // Fungsi untuk menghapus service
      console.log("Delete service", index);
    },
    search() {},
  },
};
</script>
