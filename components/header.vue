<template>
  <div class="nav-items flex gap-4 pb-4 pl-3">
    <NuxtLink href="/" class="no-underline text-white opacity-50">
      <span class="text-sm">HOME</span>
    </NuxtLink>
    <NuxtLink href="/portfolio" class="no-underline text-white opacity-50">
      <span class="text-sm">PORTFOLIO</span>
    </NuxtLink>
    <NuxtLink href="/history" class="no-underline text-white opacity-50">
      <span class="text-sm">HISTORY</span>
    </NuxtLink>
    <NuxtLink href="/contact" class="no-underline text-white opacity-50">
      <span class="text-sm">CONTACT</span>
    </NuxtLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav-items > a:hover {
  opacity: 1 !important;
}

.nav-items > a:focus {
  opacity: 1 !important;
}
</style>