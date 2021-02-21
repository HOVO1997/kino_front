<template>
  <div>
    <Header></Header>

    <section class="section details">
      <!-- details background -->
      <div class="details__bg" id="bg_div"></div>
      <!-- end details background -->

      <!-- details content -->
      <div class="container">
        <div class="row">
          <!-- title -->
          <div class="col-12">
            <h1 class="details__title">{{ film['name'] }}</h1>
          </div>
          <!-- end title -->

          <!-- content -->
          <div class="col-12 col-xl-6">
            <div class="card card--details">
              <div class="row">
                <!-- card cover -->
                <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                  <div class="card__cover">
                    <img :src="film['image']" alt="">
                  </div>
                </div>
                <!-- end card cover -->

                <!-- card content -->
                <div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                  <div class="card__content">
                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>{{ film['rating'] }}</span>

                      <ul class="card__list">
                        <li>{{ film['format'] }}</li>
                        <li>{{ film['limit'] }}+</li>
                      </ul>
                    </div>

                    <ul class="card__meta">
                      <li><span>Genre:</span>
                        <span v-for="film_genre in film['genre']" :key="film_genre['id']">
                        <a href="#">{{ film_genre['genre'].toUpperCase() }}</a>,
                      </span>
                      </li>
                      <li><span>Release year:</span> {{ film['release'] }}</li>
                      <li><span>Running time:</span> {{ film['running'] }} min</li>
                      <li><span>Country:</span>
                        <a href="#">{{ country }}</a>,
                      </li>
                    </ul>

                    <div class="b-description_readmore_wrapper js-description_readmore_wrapper"
                         style="max-width: 302.5px;">
                      <div  class="card__description card__description--details b-description_readmore_ellipsis"
                           style="transition: min-height 1s ease 0s;min-height: 150px; height: 150px; max-height: 150px;"
                      :style="read ? '  overflow: unset;min-height: 300px': 'overflow: hidden'"
                      >
                        {{
                          film['description']
                        }}
                      </div>
                      <div @click="readmore()" class="b-description_readmore_button">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end card content -->
              </div>
            </div>
          </div>
          <!-- end content -->

          <!-- player -->
          <div class="col-12 col-xl-6">
            <div class="plyr__video-embed" id="player">
              <iframe
                  :src="film['video']"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
              ></iframe>
            </div>
          </div>

          <!-- end player -->

          <div class="col-12">
            <div class="details__wrap">
              <!-- availables -->
              <div class="details__devices">
                <span class="details__devices-title">Available on devices:</span>
                <ul class="details__devices-list">
                  <li><i class="fab fa-apple color fa-2x"></i><span>IOS</span></li>
                  <li><i class="fab fa-android color fa-2x"></i><span>Android</span></li>
                  <li><i class="fab fa-windows color fa-2x"></i><span>Windows</span></li>
                  <li><i class="fas fa-tv color fa-2x"></i><span>Smart TV</span></li>
                </ul>
              </div>
              <!-- end availables -->

              <!-- share -->
              <div class="details__share">
                <span class="details__share-title">Share with friends:</span>

                <ul class="details__share-list">
                  <li class="facebook"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></a></li>
                  <li class="instagram"><a href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
                  <li class="twitter"><a href="#"><i class="fab fa-twitter fa-2x"></i></a></li>
                  <li class="vk"><a href="#"><i class="fab fa-vk fa-2x"></i></a></li>
                </ul>
              </div>
              <!-- end share -->
            </div>
          </div>
        </div>
      </div>
      <!-- end details content -->
    </section>


    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "Show",
  components: {Footer, Header},
  data() {
    return {
      image: require('@/assets/img/home/home__bg.jpg'),
      read: false,
      film: {},
      country: ''
    }
  },
  created() {
    this.showFilm();
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods:{
    readmore(){
      this.read = !this.read;
    },
    showFilm(){
      axios
      .post('http://127.0.0.1:8000/api/show',{id: this.$route.params.id})
      .then(res => {
        this.film = res.data[0]
        this.country = res.data[0]['country']['country'];
      })
    }
  }
}
</script>

<style scoped>
.color {
  color: #FF5682;
  margin-right: 5px;
}
.card {
  background: transparent;
  border: none;
}
.b-description_readmore_button:before {
  content: '...';
}
#bg_div{
  background: url(../assets/img/home/home__bg.jpg) center center / cover no-repeat;
}

</style>
