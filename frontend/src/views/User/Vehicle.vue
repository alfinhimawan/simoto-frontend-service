<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <vehicle-table />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import VehicleTable from "./components/VehicleTable.vue";
  
  export default {
    name: "vehicle",
    components: {
      VehicleTable,
    },
  };
  </script>
  
  