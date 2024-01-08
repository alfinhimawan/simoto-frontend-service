<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Kelola Log Penggunaan</h6>
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
                Kendaraan
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                User
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Nama Pengguna
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tujuan
              </th>
              <!-- <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Km Awal
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Km Akhir
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Bensin Awal
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Bensin Akhir
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tanggal Berangkat
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Jam Berangkat
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tanggal Kembali
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Jam Kembali
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Kondisi
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Keterangan
              </th> -->
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Status
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(penggunaan, index) in penggunaan" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ penggunaan.id_kendaraan }}</td>
              <td class="text-center">{{ penggunaan.id_user }}</td>
              <td class="text-center">{{ penggunaan.nama_pengguna }}</td>
              <td class="text-center">{{ penggunaan.tujuan }}</td>
              <!-- <td class="text-center">{{ penggunaan.km_awal }}</td>
              <td class="text-center">{{ penggunaan.km_akhir }}</td>
              <td class="text-center">{{ penggunaan.bensin_awal }}</td>
              <td class="text-center">{{ penggunaan.bensin_akhir }}</td>
              <td class="text-center">{{ penggunaan.tgl_berangkat }}</td>
              <td class="text-center">{{ penggunaan.jam_berangkat }}</td>
              <td class="text-center">{{ penggunaan.tgl_kembali }}</td>
              <td class="text-center">{{ penggunaan.jam_kembali }}</td>
              <td class="text-center">{{ penggunaan.kondisi }}</td>
              <td class="text-center">{{ penggunaan.keterangan }}</td> -->
              <td
                class="text-center"
                :style="{
                  'background-color': getColorForStatus(penggunaan.status),
                  color: 'white',
                  padding: '8px 12px',
                  'border-radius': '10px',
                  width: '50px',
                }"
              >
                {{ penggunaan.status }}
              </td>
              <td class="text-center">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  @click="detailPenggunaan(index)"
                >
                  <i class="fas fa-circle-info"></i>
                </a>
                <span class="text-secondary font-weight-bold text-xs"> / </span>
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  @click="editPenggunaan(index)"
                >
                  <i class="fas fa-pen-to-square"></i>
                </a>
                <span class="text-secondary font-weight-bold text-xs"> / </span>
                <a
                  href="javascript:;"
                  class="text-danger font-weight-bold text-xs"
                  @click="deletePenggunaan(index)"
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
  name: "penggunaan-tables",
  data() {
    return {
      penggunaan: [
        {
          id_kendaraan: "3",
          id_user: "1",
          nama_pengguna: "Yanti Debian",
          tujuan: "Tidak tau",
          status: "Menunggu",
        },
      ],
      currentPage: 1,
      itemsPerPage: 5,
      searchTerm: ""
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.penggunaan.length / this.itemsPerPage);
    },
    paginatedPenggunaan() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.penggunaan.slice(startIndex, endIndex);
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
    editPenggunaan(index) {
      console.log("Edit penggunaan", index);
    },
    deletePenggunaan(index) {
      console.log("Delete penggunaan", index);
    },
    getColorForStatus(status) {
      switch (status) {
        case "Menunggu":
          return "rgba(255, 165, 0, 0.7)";
        case "Telah Diacc":
          return "rgba(76, 175, 80, 0.7)";
        case "Ditolak":
          return "rgba(255, 0, 0, 0.7)";
        default:
          return "rgba(0, 0, 0, 0)";
      }
    },
    search() {},
  },
};
</script>
