<template>
  <div class="light">
    <Header />
    <section id="aboutCont">
      <div class="container">
        <div class="about__cont">
          <div class="about" v-for="(item, index) in items" v-bind:key="index">
            <div class="about__img">
              <img :src="item.src" :alt="item.title" />
            </div>
            <div class="about__txt">
              <h3>{{ item.title }}</h3>
              <p>{{ item.cont }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  data: () => ({
    items: [
      {
        src: "https://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg",
        title: "귀여운강아지사진",
        cont: "저는 강아지를 좋아합니다.",
      },
      {
        src: "https://www.pet-news.or.kr/news/photo/202303/2834_4316_1516.jpg",
        title: "귀여운강아지사진",
        cont: "귀여운 강아지가 두마리나 있으면 기분이 더욱 좋습니다.",
      },
    ],
  }),
};
</script>

<style lang="scss">
#aboutCont {
  background-color: #000;
  color: #fff;
}
.about__cont {
  .about {
    padding-top: 250px;
    padding-bottom: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h3 {
      font-size: 30px;
      line-height: 1;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
    }

    &:nth-child(1) {
      .about__img {
        flex: 0 0 40%;
      }
      .about__txt {
        flex: 0 0 100%;

        h3 {
          margin-top: 2em;
        }
      }
    }
    &:nth-child(2) {
      .about__img {
        flex: 0 0 64%;
      }
      .about__txt {
        flex: 0 0 30%;
      }
    }
  }
}
</style>
