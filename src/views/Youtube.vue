<template>
  <div class="light">
    <Header />
    <section id="youtubeCont">
      <div class="container">
        <div class="youtube__cont">
          <form @submit.prevent="searchYoutube()">
            <div class="search">
              <label for="search" class="sr-only">검색하기</label>
              <input
                type="search"
                id="검색하기"
                placeholder="검색하기"
                v-model="search"
              />
              <button type="submit" value="search">검색</button>
            </div>
            <div class="youtube">
              <div v-for="youtube in youtubes" :key="youtube.id.videoId">
                <router-link :to="'/youtubeDetail' + youtube.id.videoId">
                  <img
                    :src="youtube.snippet.thumbnails.medium.url"
                    :alt="youtube.snippet.title"
                  />
                  <p class="title">{{ youtube.snippet.title }}</p>
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import env from "@/env.js";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const search = ref("puppy");
    const youtubes = ref([]);

    const searchYoutube = () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q${search.value}&type=video&key=${env.apikey}`
      )
        .then((responsive) => responsive.json())
        .then((data) => {
          youtubes.value = data.items;
          search.value = "";
          console.log(youtubes.value);
        });
    };
    searchYoutube();

    return {
      search,
      youtubes,
      searchYoutube,
    };
  },
};
</script>

<style lang="scss">
#youtubeCont {
  background-color: #000;
  color: #fff;
  padding-top: 200px;
  padding-bottom: 400px;
  font-family: "SCoreDream";
}
.youtube__cont {
  color: #fff;

  h2 {
    border-bottom: 1px solid #fff;
    margin-bottom: 40px;
  }
  .youtube {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
      flex: 0 0 24%;
      margin-bottom: 2%;

      .title {
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    input {
      flex: 0 0 79%;
      background: transparent;
      border: 0;
      color: #fff;
      border: 1px solid #fff;
      font-family: "SCoreDream";
      padding: 5px 10px;
      outline: #fff;

      &::placeholder {
        color: #fff;
      }
    }
    button {
      flex: 0 0 20%;
      border: 0;
      font-family: "SCoreDream";
      background: #fff;
      padding: 10px;
    }
  }
}
</style>
