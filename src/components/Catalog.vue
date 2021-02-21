<template>
  <div>
    <Header></Header>
    <!--    Catalog-->
    <section class="section section--first section--bg" id="bg_to_div">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section__wrap">
              <!-- section title -->
              <h2 class="section__title">Catalog list</h2>
              <!-- end section title -->

              <!-- breadcrumb -->
              <ul class="breadcrumb">
                <router-link :to="{name: 'home'}">
                  <li class="breadcrumb__item"><a href="#">Home</a></li>
                </router-link>
                <li class="breadcrumb__item breadcrumb__item--active">Catalog list</li>
              </ul>
              <!-- end breadcrumb -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Catalog-->

    <div class="filter">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="filter__content">
              <div class="filter__items">

                <!-- filter item -->
                <div class="filter__item" id="filter__genre">
                  <span class="filter__item-label">GENRE:</span>

                  <div class="filter__item-btn dropdown-toggle" role="navigation" id="filter-genre"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <input type="button" :value="genre_value">
                    <span></span>
                  </div>

                  <ul class="filter__item-menu dropdown-menu scr"
                      aria-labelledby="filter-genre" style="overflow: visible;">
                    <li @click="changeGenreValue(genre['genre'])" :data-value="genre['genre']" v-for="genre in genres"
                        :key="genre['id']">{{ genre['genre'] }}
                    </li>
                  </ul>
                </div>
                <!-- end filter item -->


                <!-- filter item -->
                <div class="filter__item" id="filter__quality">
                  <span class="filter__item-label">QUALITY:</span>

                  <div class="filter__item-btn dropdown-toggle" role="navigation" id="filter-quality"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <input type="button" :value="format_value">
                    <span></span>
                  </div>

                  <ul class="filter__item-menu dropdown-menu  _mCS_2 mCS_no_scrollbar scr"
                      aria-labelledby="filter-quality" style="overflow: visible;">
                    <div id="mCSB_2" class="mCustomScrollBox mCS-custom-bar mCSB_vertical mCSB_outside" tabindex="0">
                      <div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                           style="position:relative; top:0; left:0;" dir="ltr">
                        <li @click="changeFormatValue(format)" v-for="format in formats" :key="format.id">{{
                            format
                          }}
                        </li>
                      </div>
                    </div>

                  </ul>
                </div>
                <!-- end filter item -->

                <!-- filter item -->
                <div class="filter__item" id="filter__rate">
                  <span class="filter__item-label">RATING:</span>
                  <span style="color: white">FROM -</span>
                  <input @change="changeInputStart($event)" min="1" max="9" type="number" class="custom_year cst"
                         :value="rating_start">

                  <span style="color: white">TO -</span>
                  <input @change="changeInputEnd($event)" min="1" max="9" :value="rating_end" type="number"
                         class="custom_year cst">
                </div>
                <!-- end filter item -->

                <!-- filter item -->
                <div class="filter__item" id="filter__year">
                  <span class="filter__item-label">RELEASE YEAR:</span>
                  <span style="color: white">FROM -</span>
                  <input @change="changeYearStart($event)" min="1800" max="2021" type="number" class="custom_year"
                         :value="year_start">
                  <span style="color: white">TO -</span>
                  <input @change="changeYearEnd($event)" min="1800" max="2021" :value="year_end" type="number"
                         class="custom_year">
                </div>
                <!-- end filter item -->
              </div>
              <!-- filter btn -->
              <button @click.prevent="filterFilms('http://127.0.0.1:8000/api/catalog')" class="filter__btn" type="button">apply filter</button>
              <!-- end filter btn -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    Film Catalog-->
    <div class="catalog">
<div class="container d-flex justify-content-center">
      <h3 v-if="error" style="color:white;">Nothing!</h3>
</div>
      <div class="container">
        <span v-if="loading">
          <img style="margin-left: 40%;margin-top: 200px;margin-bottom: 200px"
               src="https://cutewallpaper.org/21/loading-gif-transparent-background/PolyRNN-Demo.gif" alt="loading">
        </span>
        <div v-else class="row">
          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6" v-for="film in films" :key="film['id']">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img :src="film['image']" alt="">
                    <router-link :to="{name: 'show', params: { id: film['id'] }}">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                    </router-link>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">{{ film['name'] }}</a></h3>
                    <span class="card__category">
                      <span v-for="film_genre in film['genre']" :key="film_genre['id']">
                        <a href="#">{{ film_genre['genre'].toUpperCase() }},</a>
                      </span>

									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>{{ film['rating'] }}</span>

                      <ul class="card__list">
                        <li>{{ film['format'] }}</li>
                        <li>{{ film['limit'] }}+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>{{ film['description'] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- end card -->

          <!-- paginator -->
          <div class="col-12">
            <ul class="paginator paginator--list" v-if="!filter">
              <li v-bind:class="{'d-none': !pagination.prev_page_url}" class="paginator__item paginator__item--prev"><a
                  href="#" class="page-link tr" @click.prevent="getFilms(pagination.prev_page_url)"><i
                  class="fas fa-angle-left"></i></a></li>
              <li v-for="n in pagination.last_page" v-bind:key="n.id"
                  v-bind:class="{'paginator__item--active': pagination.current_page === n}" class="paginator__item"><a
                  href="#" class="page-link tr" @click.prevent="getFilms(pagination.path_page + n)">{{ n }}</a></li>
              <li v-bind:class="{'d-none': !pagination.next_page_url}" class="paginator__item paginator__item--next"><a
                  href="#" class="page-link tr" @click.prevent="getFilms(pagination.next_page_url)"><i
                  class="fas fa-angle-right"></i></a></li>
            </ul>
          </div>
          <!--          end pagination-->
          <!-- paginator -->
          <div class="col-12" v-if="filter">
            <ul class="paginator paginator--list">
              <li v-bind:class="{'d-none': !pagination.prev_page_url}" class="paginator__item paginator__item--prev"><a
                  href="#" class="page-link tr" @click.prevent="filterFilms(pagination.prev_page_url)"><i
                  class="fas fa-angle-left"></i></a></li>
              <li v-for="n in pagination.last_page" v-bind:key="n.id"
                  v-bind:class="{'paginator__item--active': pagination.current_page === n}" class="paginator__item"><a
                  href="#" class="page-link tr" @click.prevent="filterFilms(pagination.path_page + n)">{{ n }}</a></li>
              <li v-bind:class="{'d-none': !pagination.next_page_url}" class="paginator__item paginator__item--next"><a
                  href="#" class="page-link tr" @click.prevent="filterFilms(pagination.next_page_url)"><i
                  class="fas fa-angle-right"></i></a></li>
            </ul>
          </div>
          <!--          end pagination-->
        </div>
      </div>
    </div>
    <!--    End Film Catalog-->

    <Expected_premiere></Expected_premiere>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Expected_premiere from "@/components/Expected_premiere";
import axios from 'axios';

export default {
  name: "Catalog",
  components: {Expected_premiere, Footer, Header},
  data() {
    return {
      films: {},
      genres: {},
      pagination: {},
      formats: [
        'HD',
        'SD',
        'DVD',
        'TS'
      ],
      genre_value: 'ACTION',
      format_value: 'HD',
      year_start: 2000,
      year_end: 2021,
      rating_start: 1,
      rating_end: 9,
      loading: false,
      error: false,
      filter: false,
    }
  },
  created() {
    this.getFilms();
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    getFilms(film_page) {
      const data = this.$route.params.param;
      this.loading = true;
      film_page = film_page || 'http://127.0.0.1:8000/api/catalog'
      axios.post(film_page, { key: data})
          .then(res => {
            this.films = res.data.films.data;
            this.genres = res.data.genres;
            this.makePagination(res.data.films);
            this.films.length === 0 ?  this.error = true : this.error = false;
          })
          .catch(() => {
            this.error = true
          })
          .finally(() => this.loading = false)
    },
    makePagination(response) {
      this.pagination = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url,
        per_page: response.per_page,
        total: response.total,
        to: response.to,
        from: response.from,
        path_page: response.path + "?page="
      }
    },
    changeGenreValue(genre) {
      this.genre_value = genre.toUpperCase();
    },
    changeFormatValue(format) {
      this.format_value = format;
    },
    changeInputStart(evt) {
      this.rating_start = evt.target.value
    },
    changeInputEnd(evt) {
      this.rating_end = evt.target.value
    },
    changeYearStart(evt) {
      this.year_start = evt.target.value
    },
    changeYearEnd(evt) {
      this.year_end = evt.target.value
    },
    filterFilms(film_page) {
      this.filter = true;
      film_page = film_page || 'http://127.0.0.1:8000/api/catalog'
      this.loading = true
      const send_data = {
        genre: this.genre_value,
        format: this.format_value,
        rating_start: this.rating_start,
        rating_end: this.rating_end,
        year_start: this.year_start,
        year_end: this.year_end,
      }
      axios
      .put(film_page,send_data)
      .then(res => {
        this.films = res.data.data;
        this.films.length === 0 ?  this.error = true : this.error = false;
        this.makePagination(res.data);
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>
.breadcrumb__item:before {
  content: '→';
}

.dropdown-toggle::after {
  display: none;
}

.card {
  background: transparent;
  border: none;
}

.color {
  color: #FF5682;
  margin-right: 5px;
}

.scr {
  overflow-y: auto !important;
}

.scr::-webkit-scrollbar {
  width: 5px; /* width of the entire scrollbar */
}

.scr::-webkit-scrollbar-track {
  background: #2A2A30; /* color of the tracking area */
}

.scr::-webkit-scrollbar-thumb {
  background-color: #FF5682; /* color of the scroll thumb */
  border-radius: 10px; /* roundness of the scroll thumb */
  border: 1px solid #FF5682; /* creates padding around scroll thumb */
}

#bg_to_div {
  background: url(../assets/img/section/section.jpg) center center / cover no-repeat;
}

.tr {
  background: transparent !important;
  border: none !important;
}

.paginator__item--active {
  background-image: linear-gradient(
      90deg, #ff55a5 0%, #ff5860 100%);
}

.page-link:focus {
  z-index: 0;
  color: white;
  background-image: linear-gradient(
      90deg, #ff55a5 0%, #ff5860 100%) !important;
  outline: 0;
  box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
}

.custom_year {
  width: 60px;
  background: transparent;
  border: none;
  color: white;
}

input[type="number"].custom_year::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  background: #28282D;
  width: 1em;
  border-left: none;
  opacity: 1; /* shows Spin Buttons per default (Chrome >= 39) */
  color: white;
}

.cst {
  width: 33px;
}
</style>
