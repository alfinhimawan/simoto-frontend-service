<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Daftar Kendaraan Operasional</h6>
      <div class="d-flex align-items-center">
        <!-- Search Input -->
        <div class="col-sm-2 mt-n3">
          <!-- Coba beberapa nilai untuk mt-n -->
          <input
            type="text"
            style="margin-left: 1px"
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
                Nopol
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Alias Name
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Merk
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Jenis
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tanggal Pajak
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vehicle, index) in paginatedVehicle" :key="index">
              <td class="text-center">
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </td>
              <td class="text-center">{{ vehicle.nopol }}</td>
              <td class="text-center">{{ vehicle.alias_name }}</td>
              <td class="text-center">{{ vehicle.merk }}</td>
              <td class="text-center">{{ vehicle.jenis }}</td>
              <td class="text-center">{{ vehicle.tanggal_pajak }}</td>
              <td
                class="text-center"
                :style="{
                  'background-color': getColorForStatus(vehicle.status),
                  color: 'white',
                  padding: '8px 12px',
                  'border-radius': '10px',
                  width: '50px',
                }"
              >
                {{ vehicle.status }}
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
  name: "kendaraan-tables",
  data() {
    return {
      vehicle: [
        {
          nopol: "AB-2370-JD",
          alias_name: "Unit 1",
          merk: "Revo",
          jenis: "Honda",
          tanggal_pajak: "2024-05-04",
          status: "Tidak Dipakai",
        },
        {
          nopol: "AB-2351-AC",
          alias_name: "Unit 2",
          merk: "Avanza",
          jenis: "Toyota",
          tanggal_pajak: "2024-08-04",
          status: "Dipakai",
        },
        {
          nopol: "AB-2300-IB",
          alias_name: "Unit 3",
          merk: "Mobilio",
          jenis: "Honda",
          tanggal_pajak: "2024-01-04",
          status: "Tidak Dipakai",
        },
      ],
      currentPage: 1,
      itemsPerPage: 5, // Ubah jumlah item per halaman sesuai kebutuhan
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.vehicle.length / this.itemsPerPage);
    },
    paginatedVehicle() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.vehicle.slice(startIndex, endIndex);
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
    getColorForStatus(status) {
      switch (status) {
        case "Dipakai":
          return "rgba(76, 175, 80, 0.7)";
        case "Tidak Dipakai":
          return "rgba(255, 0, 0, 0.7)";
        default:
          return "rgba(0, 0, 0, 0)";
      }
    },
  },
};
</script>
