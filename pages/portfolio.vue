<template>
  <div class="w-full flex justify-content-center gap-3 pt-3">
    <info-bar/>

    <div class="main-discover-section p-4 pt-5 relative">
      <lazy-header/>
      <div>
        <h3 class="mt-0">Portfolio</h3>

        <div class="flex justify-content-between">
          <div class="portfolio-section w-27rem h-17rem flex justify-content-center align-items-center">
            <a href="https://linare.am/" target="_blank"><img width="200" src="@/assets/linare.png" alt="" /></a>
          </div>

          <div class="portfolio-section w-27rem h-17rem flex justify-content-center align-items-center">
            <a href="https://likolad.am/" target="_blank"><img width="200" src="@/assets/likolad.png" alt="" /></a>
          </div>
        </div>
      </div>
      <lazy-footer/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.main-discover-section {
  background-color: #1E1E28;
  color: white;
  width: 59rem;
}

.portfolio-section {
  background-color: #2B2B36;
}
</style>