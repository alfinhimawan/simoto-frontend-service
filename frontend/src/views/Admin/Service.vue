<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <service-table />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ServiceTable from "./components/ServiceTable.vue";
  
  export default {
    name: "service",
    components: {
      ServiceTable,
    },
  };
  </script>
  