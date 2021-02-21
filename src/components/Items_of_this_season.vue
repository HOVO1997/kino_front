<template>
  <section class="home" id="bg_1">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="home__title mb-5"><b>NEW ITEMS</b> OF THIS SEASON</h1>
          <div v-if="films.length > 0">
        <carousel  :nav="false" :items="4" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="3000">
          <div class="item" v-for="film in films" :key="film['id']">
            <div class="card" >
              <div class="card__cover">
                <img :src="film['image']" alt="">
                <router-link :to="{name: 'show', params:{id: film['id']}}">
                  <a href="#" class="card__play">
                    <i class="fas fa-play"></i>
                  </a>
                </router-link>
              </div>
              <div class="card__content">
                <h3 class="card__title"><a href="#">{{ film['name'] }}</a></h3>
                <span class="card__category">
										<a href="#" v-for="film_genre in film['genre']" :key="film_genre['id']">{{ film_genre['genre'].toUpperCase() }}</a>
									</span>
                <span class="card__rate"><i class="fas fa-star color"></i>{{ film['rating'] }}</span>
              </div>
            </div>
          </div>
        </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from "axios";

export default {
  name: "Items_of_this_season",
  components: { carousel },
  data() {
    return {
      films: [],
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  created() {
    this.getLatest();
  },
  methods:{
    getLatest(){
      axios
      .get('http://127.0.0.1:8000/api/home')
      .then(res => {
       this.films = res.data;
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.card {
  background: transparent;
  border: none;
}

i {
  text-shadow: 0 0 6px rgb(255 88 96);
  margin-right: 5px;
}

.home__nav {
  top: 3%;
}

.color {
  color: #FF5682;
  margin-right: 5px;
}

#bg_1{
  background: url(https://wallscloud.net/uploads/cache/4246659749/wallpaper_by_cybacreep-d7hprs3-1024x576-MM-90.jpg) center center / cover no-repeat;
  height: 680px !important;
}

.card{
  margin-right: 10px;
  margin-left: 10px;
}

</style>
