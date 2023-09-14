<template>
  <div class="light">
    <Header />
    <div class="MovieDetailCont"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
