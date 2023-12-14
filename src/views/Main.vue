<template>
  <div class="container">
    <Header />
    <div class="main_video_wrap">
      <div class="pentagon">
        <img src="@/assets/img/pentagon_border.png" alt="" />
      </div>
      <video
        autoplay
        muted
        loop
        controls
        v-for="(video, i) in videoList"
        :key="i"
        :class="video.className"
      >
        <source :type="video.type" :src="video.src" />
      </video>
      <div class="main_logo">
        <img
          src="https://www.leagueoflegends.com/static/logo-1200-04b3cefafba917c9c571f9244fd28a1e.png"
          alt=""
        />
        <div class="join_btn">
          <button class="blue_btn">무료로 플레이하기</button>
        </div>
      </div>
    </div>
    <div class="main_article_wrap">
      <div class="article_bg">
        <div class="main_sub_title_area">
          <div class="main_sub_title_box">
            <p>주목할 만한 소식</p>
          </div>
        </div>
        <div class="article_area">
          <div class="article_box">
            <div class="article_list">
              <article v-for="(article, i) in articleList" :key="i">
                <a href="#">
                  <div class="article_img">
                    <img :src="article.src" :alt="article.alt" />
                  </div>
                  <div class="article_contents">
                    <span class="article_category">{{ article.category }}</span>
                    <span class="article_title">{{ article.title }}</span>
                    <p class="article_cont">{{ article.contents }}</p>
                  </div>
                </a>
              </article>
            </div>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="social_channel_wrap">
      <span>공식 소셜 채널 살펴보기</span>
      <a :href="''"
        ><svg
          xml:space="preserve"
          x="0"
          y="0"
          class="style__SocialIcon-sc-nyu1wb-5-Facebook fCibMJ"
          style="enable-background: new 0 0 8.86 17.16"
          version="1.1"
          viewBox="0 0 8.86 17.16"
        >
          <g>
            <g>
              <path
                d="M2.62,17.16c0-0.04,0-0.26,0-0.31c0-2.51,0-5.02,0-7.52c0-0.03,0-0.06,0-0.1c-0.04,0-0.07,0-0.11,0 c-0.8,0-1.6,0-2.4,0C0,9.24,0,9.24,0,9.13c0-0.94,0-1.88,0-2.82c0-0.09,0.03-0.11,0.11-0.11c0.8,0,1.6,0,2.4,0 c0.03,0,0.07,0,0.11,0c0-0.03,0-0.06,0-0.09c0-0.78,0-1.56,0.01-2.34c0.01-0.63,0.13-1.24,0.4-1.81C3.4,1.2,3.99,0.64,4.78,0.32 C5.31,0.09,5.87-0.01,6.44,0C7.09,0.01,7.75,0.04,8.4,0.06c0.12,0,0.24,0.03,0.36,0.03c0.07,0,0.09,0.03,0.09,0.1 c0,0.39,0,0.78,0,1.17c0,0.46,0,0.92,0,1.37c0,0.08-0.02,0.1-0.1,0.1c-0.5,0-0.99-0.01-1.49,0C7.04,2.84,6.81,2.87,6.59,2.92 c-0.43,0.09-0.68,0.37-0.76,0.8C5.79,3.88,5.77,4.06,5.77,4.23c-0.01,0.64,0,1.27,0,1.91c0,0.02,0,0.04,0,0.07 c0.04,0,0.07,0,0.11,0c0.92,0,1.83,0,2.75,0c0.12,0,0.12,0,0.11,0.11c-0.06,0.5-0.13,1-0.2,1.5C8.49,8.24,8.44,8.66,8.39,9.08 C8.37,9.24,8.37,9.24,8.21,9.24c-0.78,0-1.56,0-2.33,0c-0.03,0-0.07,0-0.11,0c0,0.04,0,0.08,0,0.12c0,2.48,0,4.96,0,7.44 c0,0.06,0,0.3,0,0.36C4.72,17.16,3.67,17.16,2.62,17.16z"
                class="st0"
              />
            </g>
          </g></svg
      ></a>
      <a :href="''"
        ><svg
          xml:space="preserve"
          x="0"
          y="0"
          class="style__SocialIcon-sc-nyu1wb-5-Instagram hgbCEd"
          style="enable-background: new 0 0 40.47 40.47"
          version="1.1"
          viewBox="0 0 40.47 40.47"
        >
          <g>
            <path
              d="M33.47,9.43c0-1.35-1.09-2.43-2.43-2.43c-1.34,0-2.43,1.09-2.43,2.43c0,1.34,1.09,2.43,2.43,2.43 C32.38,11.86,33.47,10.77,33.47,9.43"
              class="st0"
            />
            <path
              d="M40.35,11.89c-0.1-2.16-0.44-3.63-0.94-4.91c-0.51-1.33-1.2-2.46-2.33-3.59c-1.12-1.12-2.25-1.81-3.58-2.33 c-1.29-0.5-2.76-0.84-4.91-0.94C26.42,0.02,25.73,0,20.23,0c-5.49,0-6.19,0.02-8.34,0.12C9.74,0.22,8.27,0.56,6.98,1.06 C5.65,1.58,4.52,2.27,3.4,3.39C2.27,4.52,1.58,5.65,1.06,6.98c-0.5,1.28-0.84,2.76-0.94,4.91C0.02,14.05,0,14.74,0,20.24 c0,5.49,0.02,6.18,0.12,8.34c0.1,2.15,0.44,3.62,0.94,4.91c0.52,1.33,1.21,2.46,2.34,3.58c1.12,1.12,2.25,1.82,3.58,2.34 c1.29,0.5,2.76,0.84,4.91,0.94c2.16,0.1,2.85,0.12,8.34,0.12c5.5,0,6.19-0.02,8.34-0.12c2.16-0.1,3.62-0.44,4.91-0.94 c1.33-0.52,2.46-1.21,3.58-2.34c1.13-1.12,1.82-2.26,2.33-3.58c0.5-1.29,0.84-2.76,0.94-4.91c0.1-2.16,0.12-2.85,0.12-8.34 C40.47,14.74,40.45,14.05,40.35,11.89z M36.7,28.41c-0.09,1.97-0.42,3.04-0.69,3.76c-0.37,0.94-0.81,1.62-1.52,2.33 c-0.7,0.71-1.38,1.15-2.32,1.51c-0.71,0.28-1.79,0.61-3.76,0.7c-2.13,0.09-2.77,0.11-8.17,0.11c-5.4,0-6.04-0.02-8.17-0.11 c-1.97-0.09-3.04-0.42-3.76-0.7c-0.95-0.36-1.62-0.8-2.33-1.51c-0.71-0.71-1.15-1.38-1.51-2.33c-0.27-0.71-0.61-1.78-0.69-3.76 c-0.1-2.13-0.12-2.78-0.12-8.17c0-5.41,0.02-6.05,0.12-8.18c0.09-1.97,0.42-3.04,0.69-3.76c0.36-0.94,0.8-1.61,1.51-2.32 C6.68,5.27,7.35,4.83,8.3,4.46c0.71-0.28,1.78-0.6,3.76-0.7c2.13-0.09,2.77-0.12,8.17-0.12c5.41,0,6.04,0.02,8.17,0.12 c1.97,0.09,3.05,0.42,3.76,0.7c0.94,0.37,1.62,0.81,2.32,1.51c0.71,0.71,1.15,1.38,1.52,2.32c0.27,0.72,0.6,1.79,0.69,3.76 c0.1,2.13,0.12,2.77,0.12,8.18C36.83,25.64,36.8,26.28,36.7,28.41z"
              class="st0"
            />
            <path
              d="M20.23,9.84c-5.74,0-10.39,4.66-10.39,10.4c0,5.73,4.65,10.39,10.39,10.39c5.74,0,10.39-4.65,10.39-10.39 C30.62,14.5,25.97,9.84,20.23,9.84z M20.23,26.98c-3.72,0-6.74-3.02-6.74-6.74c0-3.73,3.02-6.75,6.74-6.75 c3.72,0,6.75,3.02,6.75,6.75C26.98,23.96,23.96,26.98,20.23,26.98z"
              class="st0"
            />
          </g></svg
      ></a>
    </div>
    <div class="character_slide_wrap">
      <div class="main_sub_title_area">
        <div class="main_sub_title_box">
          <p>챔피언</p>
        </div>
      </div>
      <div class="champion_type">
        <p class="champion_type_tit">
          챔피언을<br /><strong>선택하세요</strong>
        </p>
        <p class="champion_type_desc">
          적진으로 돌격하거나 팀원을 보조하는 등, 소환사의 협곡에는 다양한
          역할군이 있습니다.
        </p>
      </div>
      <div class="slider_box">
        <div class="slider_video_wrap">
          <img src="@/assets/img/pentagon_border.png" alt="" />
          <video
            autoplay
            muted
            loop
            controls
            v-for="(video, i) in sliderVideoList"
            :key="i"
          >
            <source :type="video.type" :src="video.src" />
          </video>
        </div>
        <div class="slider_bg_area">
          <img v-for="slide in slides" :key="slide.i" :src="slide.src2" />
        </div>
        <div class="border_animation"></div>
        <div class="slider">
          <ul class="slides" :style="{ left: -width * current + 'px' }">
            <li v-for="slide in slides" :key="slide.i">
              <img :src="slide.src" alt="" />
              <strong>{{ slide.name }}</strong>
              <span>{{ slide.subname }}</span>
            </li>
          </ul>
        </div>
        <div class="bullets">
          <div class="bullet_box">
            <span
              v-for="(slide, i) in slides"
              :key="slide.i"
              :class="{ active: slide == selected }"
              @click="[selectSlide(i), currentActive(slide)]"
            >
              <strong>{{ slide.championtype }}</strong>
              <img class="chamion_type_icon" :src="slide.championIcon" />
            </span>
          </div>
          <div class="bullet_option_box"></div>
        </div>
      </div>
    </div>
    <div class="parallax_content">
      <div class="background_wrap">
        <div id="canvas"></div>
        <div class="img_border_box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img
          v-for="(el, i) in img1"
          :key="i"
          class="bg_img2"
          :style="{
            transform: `translate(${el.x}px, ${el.y}px)`,
          }"
          :src="el.src"
        />
      </div>
      <div class="main_sub_title_area abs">
        <div class="main_sub_title_box white">
          <p>챔피언 스킨</p>
        </div>
      </div>
      <div class="para_content_text_box">
        <span class="bold">개성있는</span>
        <strong class="more_bold">챔피언</strong>
        <p class="para_content_text">
          스킨으로 좋아하는 챔피언의 외형을 변경해 보세요.
        </p>
        <button class="blue_btn">지금 플레이하기</button>
      </div>
    </div>
    <Particle />
    <div class="main_video_wrap">
      <video autoplay muted loop controls class="background_video large">
        <source
          type="video/mp4"
          src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfa2accf67922dd3a/5f495972a11538653ea58f65/ss2020_lux_sylas_1920x1080.mp4"
        />
      </video>
      <div class="main_logo center">
        <div class="join_btn">
          <button class="blue_btn">무료로 플레이하기</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js"></script>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Particle from "@/components/Particle.vue";
import carousel from "vue-owl-carousel";
export default {
  components: {
    Header,
    Footer,
    carousel,
    Particle,
  },
  data() {
    return {
      plugin: null,
      options: {
        autoplay: true,
        item: 1,
        startPosition: 2,
        autoplayTimeout: 2000,
      },
      slides: [
        {
          src: require("@/assets/img/Aakali.png"),
          name: "아칼리",
          subname: "섬기는 이 없는 암살자",
          src2: require("@/assets/img/bg_option1.png"),
          championtype: "암살자",
          championIcon: require("@/assets/img/bg_option1.png"),
        },
        {
          src: require("@/assets/img/yasuo.png"),
          name: "야스오",
          subname: "용서받지 못한 자",
          src2: require("@/assets/img/bg_option2.png"),
          championtype: "전사",
          championIcon: require("@/assets/img/bg_option2.png"),
        },
        {
          src: require("@/assets/img/lux.png"),
          name: "럭스",
          subname: "광명의 소녀",
          src2: require("@/assets/img/bg_option3.png"),
          championtype: "마법사",
          championIcon: require("@/assets/img/bg_option3.png"),
        },
        {
          src: require("@/assets/img/Jinx.png"),
          name: "징크스",
          subname: "난폭한 말괄량이",
          src2: require("@/assets/img/bg_option4.png"),
          championtype: "원거리딜러",
          championIcon: require("@/assets/img/bg_option4.png"),
        },
        {
          src: require("@/assets/img/Thresh.png"),
          name: "쓰레쉬",
          subname: "지옥의 간수",
          src2: require("@/assets/img/bg_option5.png"),
          championtype: "서포터",
          championIcon: require("@/assets/img/bg_option5.png"),
        },
        {
          src: require("@/assets/img/leona.png"),
          name: "레오나",
          subname: "여명의 빛",
          src2: require("@/assets/img/bg_option6.png"),
          championtype: "탱커",
          championIcon: require("@/assets/img/bg_option6.png"),
        },
      ],
      current: 0,
      width: 700,
      timer: 0,
      selected: 0,
      videoList: [
        {
          className: "background_video",
          type: "video/mp4",
          src: "https://www.leagueoflegends.com/static/hero-blurred-77cd03702790edd87c7609df91d5c7d5.mp4",
        },
        {
          className: "center_video",
          type: "video/mp4",
          src: "https://www.leagueoflegends.com/static/hero-3e934348790824f4b800524f96a93020.mp4",
        },
      ],
      sliderVideoList: [
        {
          type: "video/mp4",
          src: "https://www.leagueoflegends.com/static/assassin-26d5e794c9f73d8e76a435d97dcff92c.mp4",
        },
      ],
      articleList: [
        {
          src: require("@/assets/img/nekko.jpg"),
          alt: "어둠의 니코",
          category: "게임 업데이트",
          title: "13.18 패치 상점 소식",
          contents:
            "철벅철벅 튀겨요. 거리의 악마들과 혼돈의 수정 탈리야를 만나보세요!",
        },
        {
          src: require("@/assets/img/briar.jpg"),
          alt: "브라이어",
          category: "미디어",
          title: "브라이어 챔피언 테마",
          contents:
            "귀에 좋은 음식 같은 음악을 원하시나요? 억눌린 허기 브라이어의 공식 테마를 감상해 보세요.",
        },
        {
          src: require("@/assets/img/ornn.jpg"),
          alt: "오른",
          category: "개발자 블로그",
          title: "게임플레이에 대한 단상: 신화급 아이템 문제",
          contents:
            "신화급 아이템을 없애는 이유와 아이템 체계의 미래를 말씀드립니다.",
        },
      ],
      img1: [],
      halfX: window.innerWidth / 2,
      halfY: window.innerHeight / 2,
    };
  },
  mounted() {
    this.initImages();
    this.initMousemoveListener();
  },
  methods: {
    initImages() {
      // 각 이미지에 대한 정보를 추가
      this.img1.push({
        x: 0,
        y: 0,
        src: "https://www.leagueoflegends.com/static/championstyle_02-ec1e19123689c03a81b99180faae71e8.png", // 첫 번째 이미지 소스
      });

      this.img1.push({
        x: -30,
        y: 0,
        src: "https://www.leagueoflegends.com/static/championstyle_01-ba6337ba3f72c510905ea99f3937ffd7.png", // 두 번째 이미지 소스
      });

      this.img1.push({
        x: 0,
        y: 0,
        src: "https://www.leagueoflegends.com/static/assassin-two-a5ebf8c8bc37fff89abf4dbbf4e347ed.png", // 세 번째 이미지 소스
      });

      // TweenMax를 사용하여 이미지에 애니메이션 적용
      this.img1.forEach((el) => {
        TweenMax.to(el, 2, {
          z: el.z,
        });
      });
    },
    initMousemoveListener() {
      document.addEventListener("mousemove", (e) => {
        this.img1.forEach((el, i) => {
          TweenMax.to(el, 5, {
            x: (e.clientX - this.halfX) * (i + 1) * 0.01,
            y: (e.clientY - this.halfY) * (i + 1) * 0.01,
          });
        });
      });
    },
    selectSlide(i) {
      this.current = i;
      this.resetPlay();
    },
    resetPlay() {
      clearInterval(this.timer);
      this.play();
    },
    nextSlide() {
      this.current++;
      if (this.current >= this.slides.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide() {
      this.current--;
      if (this.current < 0) this.current = this.slides.length - 1;
      this.resetPlay();
    },
    play: function () {
      let app = this;
      this.timer = setInterval(function () {
        app.nextSlide();
      }, 2000);
    },
    currentActive(index) {
      this.selected = index;
    },
  },
};
</script>
