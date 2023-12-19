<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <penggunaan-table />
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import PenggunaanTable from './components/PenggunaanTable.vue';

  export default {
    name: "penggunaan",
    components: {
      PenggunaanTable
    },
  };
  </script>
  