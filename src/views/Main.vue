<template>
  <div class="light">
    <Header />
    <main id="main">
      <div class="mainCont">
        <div>{{ msg1 }}</div>
        <div>{{ msg2 }}</div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    return {
      msg1: "this is Vue project",
      msg2: "for practicing",
    };
  },
};
</script>

<style lang="scss">
#main {
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .mainCont {
    color: #fff;
    font-size: 10vw;
  }
}
</style>
