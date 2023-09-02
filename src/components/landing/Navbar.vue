<template>
  <div class="navbar">
    <div class="navbar_items navigation" >
      <a data-cursor-hover href="/" @click="goSection">About /</a>
      <a data-cursor-hover>Work /</a>
      <a data-cursor-hover>Education /</a>
      <a data-cursor-hover href="/" @click="$emit('go-section', 'skills')">Skills /</a>
      <a data-cursor-hover href="/" @click="$emit('go-section', 'projects')">Projects /</a>
      <a data-cursor-hover @click="goSection" href="/">Contact /</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarPage",
  data() {
    return {}
  },

  methods: {
    goSection() {
      this.$emit("go-section", this.value);
    },
  },
}

</script>

<style>

.navbar_items {
  font-family: ui-sans-serif;
  display: flex;
  gap: 30px;
  justify-content: end;
  font-size: 19px;
  font-weight: 500;
  padding-right: 4%;
  padding-top: 2%;
}

a{
  text-decoration: none;
  color: white;
}

.navbar_items > a:hover {
  color: #CDCDCD;
}

</style>