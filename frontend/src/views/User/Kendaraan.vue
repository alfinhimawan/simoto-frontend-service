<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <kendaraan-table />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import KendaraanTable from "./components/KendaraanTable.vue";
  
  export default {
    name: "kendaraan",
    components: {
      KendaraanTable,
    },
  };
  </script>
  
  