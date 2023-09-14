<template>
  <div class="light">
    <Header />
    <section id="MovieCont">
      <div class="container">
        <div class="movie__cont">
          <div class="movie">
            <div class="moviebox" v-for="movie in movies" :key="movie.id">
              <router-link :to="'/MovieDetail' + movie.id">
                <img
                  :src="
                    `https://image.tmdb.org/t/p/original` + movie.poster_path
                  "
                  :alt="movie.title"
                />
                <p class="title">{{ movie.title }}</p>
                <p class="release">{{ movie.release_date }}</p>
              </router-link>
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
import { ref } from "vue";
import env from "@/env.js";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const movies = ref([]);

    const searchMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${env.movieApiKey}&language=en-US&page=1`
      ).then((responsive) =>
        responsive.json().then((data) => {
          movies.value = data.results;
          console.log(movies.value);
        })
      );
    };
    searchMovie();

    return {
      movies,
      searchMovie,
    };
  },
};
</script>

<style lang="scss">
#MovieCont {
  color: #fff;
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: #000;
}
.movie__cont {
  color: #000;
  .movie {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    cursor: pointer;

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
        color: #fff;
      }
      .release {
        color: #fff;
      }
    }
  }
}
</style>
