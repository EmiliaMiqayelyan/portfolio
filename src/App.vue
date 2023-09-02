<template>
  <div id="app">
    <cursor-fx style="color: white" />
    <LandingPage />
  </div>
</template>

<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

import LandingPage from "@/components/landing/LandingPage.vue";

export default {
  name: 'App',
  components: {
    LandingPage,
    'cursor-fx': CursorFx
  },
}
</script>

<style>

body{
  background-color: #182947;
}

</style>
