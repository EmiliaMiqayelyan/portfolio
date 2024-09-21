<template>
  <div class="w-full flex justify-content-center gap-3 pt-3">
    <info-bar/>
    <div class="main-discover-section p-4 pt-5 relative">
      <lazy-header/>
      <div class="discover-section flex align-items-center">
        <div class="pl-5">
          <h1>Discover my Amazing Art Space!</h1>

          <div class="animation-text flex align-items-center gap-1">
            <div class="flex">
              <p><</p>
              <p class="code-text">code</p>
              <p>></p>
            </div>
            <div class="flex align-items-center gap-1">
              <p class="text-lg">I'm a</p>
              <p class="animation-text-content m-0 text-lg">front end developer</p>
            </div>
            <div class="flex">
              <p><</p>
              <p>/</p>
              <p class="code-text">code</p>
              <p>></p>
            </div>
          </div>
        </div>
        <img class="w-16rem ml-6" src="@/assets/avatar-bg.png" alt=""/>
      </div>

      <div class="flex justify-content-between mt-5">
        <div class="flex gap-3 align-items-center">
          <p class="exp-year font-semibold text-2xl m-0">1 +</p>
          <p class="m-0">Years Experience</p>
        </div>

        <div class="flex gap-3 align-items-center">
          <p class="exp-year font-semibold text-2xl m-0">10 +</p>
          <p class="m-0">Completed Projects</p>
        </div>

        <div class="flex gap-3 align-items-center">
          <p class="exp-year font-semibold text-2xl m-0">8 +</p>
          <p class="m-0">Happy Customers</p>
        </div>
      </div>

      <div class="mt-5">
        <h3>My Services</h3>

        <div class="flex justify-content-between flex-wrap gap-3 mt-4">
          <div class="services p-4 w-18rem">
            <p class="m-0">Front-End Development</p>
            <p class="opacity-50 text-sm">
              Specializing in HTML, CSS, JavaScript, and frameworks like Vue.js and React.js, I build dynamic, interactive,
              and fast web applications tailored to your business needs.
            </p>
          </div>

          <div class="services p-4 w-18rem">
            <p class="m-0">Web Performance Optimization</p>
            <p class="opacity-50 text-sm">
              I enhance site performance by optimizing code, managing assets, and ensuring faster load times, which
              improves user retention and SEO rankings.
            </p>
          </div>

          <div class="services p-4 w-18rem">
            <p class="m-0">Responsive Web Design</p>
            <p class="opacity-50 text-sm">
              I create modern, responsive websites that look great on any device, providing optimal user experiences
              across desktops, tablets, and smartphones.
            </p>
          </div>
        </div>
      </div>
      <lazy-footer/>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-discover-section {
  background-color: #1E1E28;
  color: white;
  width: 59rem;
}

.discover-section, .services {
  background-color: #292933;
}

.animation-text-content {
  width: 11rem;
  overflow: hidden;
  white-space: nowrap;
  animation: type 4s steps(50) infinite;
}

.code-text, .exp-year {
  color: #FFC107;
}

@keyframes type {
  0% {
    width: 0;
  }
}
</style>