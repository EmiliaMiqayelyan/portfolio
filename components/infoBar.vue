<template>
  <div class="main-info-section w-19rem">
    <div class="info-section-header p-4 flex flex-column justify-content-center align-items-center">
      <img class="mr-2 border-circle w-5rem h-5rem" src="../assets/avatar.png" alt=""/>
      <p class="mt-3 m-0 font-medium">Emilia Mikayelyan</p>
      <p class="mt-1 m-0 opacity-50 text-sm">Front-End Developer</p>
    </div>

    <div class="info-section-bottom px-5 py-3">
      <div>
        <div class="flex justify-content-between">
          <span>Residence:</span>
          <span class="opacity-50">Armenia</span>
        </div>

        <div class="flex justify-content-between mt-2">
          <span>City:</span>
          <span class="opacity-50">Yerevan</span>
        </div>

        <div class="flex justify-content-between mt-2">
          <span>Age:</span>
          <span class="opacity-50">19</span>
        </div>
      </div>

      <hr class="opacity-50 mt-4"/>

      <div class="card flex justify-content-between">
        <div class="flex flex-column align-items-center">
          <Knob v-model="armenian" valueTemplate="{value}%" :strokeWidth="5"/>
          <p class="m-0 text-sm">Armenian</p>
        </div>

        <div class="flex flex-column align-items-center">
          <Knob v-model="english" valueTemplate="{value}%" :strokeWidth="5"/>
          <p class="m-0 text-sm">English</p>
        </div>

        <div class="flex flex-column align-items-center">
          <Knob v-model="russian" valueTemplate="{value}%" :strokeWidth="5"/>
          <p class="m-0 text-sm">Russian</p>
        </div>
      </div>

      <hr class="opacity-50 mt-4"/>

      <div class="flex flex-column row-gap-4">
        <div>
          <div class="flex justify-content-between mb-2">
            <p class="m-0 text-sm">Javascript</p>
            <p class="m-0 text-sm opacity-70">80 %</p>
          </div>
          <ProgressBar value="80" style="height: 6px"></ProgressBar>
        </div>

        <div>
          <div class="flex justify-content-between mb-2">
            <p class="m-0 text-sm">Vue.js</p>
            <p class="m-0 text-sm opacity-70">75 %</p>
          </div>
          <ProgressBar value="75" style="height: 6px"></ProgressBar>
        </div>

        <div>
          <div class="flex justify-content-between mb-2">
            <p class="m-0 text-sm">React.js</p>
            <p class="m-0 text-sm opacity-70">70 %</p>
          </div>
          <ProgressBar value="70" style="height: 6px"></ProgressBar>
        </div>

        <div>
          <div class="flex justify-content-between mb-2">
            <p class="m-0 text-sm">Nuxt.js</p>
            <p class="m-0 text-sm opacity-70">65 %</p>
          </div>
          <ProgressBar value="65" style="height: 6px"></ProgressBar>
        </div>
      </div>

      <hr class="opacity-50 mt-4"/>

      <div class="flex flex-column row-gap-2">
        <div class="flex gap-2 align-items-center">
          <i class="pi pi-check font-bold text-xs"></i>
          <p class="m-0 text-sm opacity-50">Bootstrap, PrimeVue</p>
        </div>

        <div class="flex gap-2 align-items-center">
          <i class="pi pi-check font-bold text-xs"></i>
          <p class="m-0 text-sm opacity-50">CSS, Sass, PrimeFlex</p>
        </div>
      </div>

      <hr class="opacity-50 mt-4"/>

      <div class="mt-3 mb-0">
        <a href="https://www.canva.com/design/DAGRHBwtY5o/-Bsm4v9BRKzPIqNejiQIuA/view?utm_content=DAGRHBwtY5o&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
          <button
              class="download-btn opacity-50 border-none text-white text-sm font-semibold cursor-pointer">
            DOWNLOAD CV
            <i class="pi pi-download text-sm ml-2"></i>
          </button>
        </a>
      </div>
    </div>

    <div class="social-link-section p-3 flex justify-content-center align-items-center gap-3">
      <a href="https://www.linkedin.com/in/emilia-miqayelyan-a2635b231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
         target="_blank">
        <i class="pi pi-linkedin opacity-50"></i>
      </a>
      <a href="https://github.com/emiliamiqayelyan" target="_blank">
        <i class="pi pi-github opacity-50"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100065101335818&mibextid=LQQJ4d" target="_blank">
        <i class="pi pi-facebook opacity-50"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const armenian = ref(100);
const english = ref(70);
const russian = ref(40);
</script>

<style scoped>
.main-info-section {
  color: #ffffff;
}

.info-section-header, .social-link-section {
  background-color: #242430;
}

.info-section-bottom {
  background-color: #20202A;
}

:deep(.p-knob svg) {
  width: 70px;
  height: 70px;
}

:deep(.p-knob-value) {
  filter: brightness(-2%) saturate(80%) invert(94%) sepia(28%) saturate(2289%) hue-rotate(314deg) brightness(88%) contrast(150%) !important;
}

:deep(.p-knob-text) {
  fill: white !important;
  opacity: 0.7;
}

:deep(.p-knob-range) {
  filter: brightness(6%) saturate(82%) invert(23%) sepia(41%) saturate(2332%) hue-rotate(168deg) brightness(29%) contrast(115%);
}

:deep(.p-progressbar) {
  background: #191923;
  border-radius: unset;
}

:deep(.p-progressbar .p-progressbar-label) {
  display: none;
}

:deep(.p-progressbar .p-progressbar-value) {
  background: #FFC107;
}

:deep(.pi-check:before) {
  color: #FFC107;
}

.download-btn {
  background: none;
  transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease;
}

.download-btn:hover {
  opacity: unset !important;
}

.social-link-section > a {
  color: white;
}
</style>