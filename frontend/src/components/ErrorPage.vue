<template>
  <div class="error-page-container">
    <div class="error-page-content">
      <h1 class="error-title">404 Not Found</h1>
      <p class="error-description">Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style scoped>
.error-page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.error-page-content {
  text-align: center;
}

.error-title {
  font-size: 3rem;
  color: #f5365c; /* Atur warna sesuai keinginan Anda */
}

.error-description {
  font-size: 1.5rem;
  color: #999; /* Atur warna sesuai keinginan Anda */
}
</style>
