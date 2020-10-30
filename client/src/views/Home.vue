<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mevn.jpg" width="150" />
    <Main title="Custom MEVN Template" />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
