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
            <h1 class="details__title">I Dream in Another Language</h1>
          </div>
          <!-- end title -->

          <!-- content -->
          <div class="col-12 col-xl-6">
            <div class="card card--details">
              <div class="row">
                <!-- card cover -->
                <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover.jpg" alt="">
                  </div>
                </div>
                <!-- end card cover -->

                <!-- card content -->
                <div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                  <div class="card__content">
                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>8.4</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <ul class="card__meta">
                      <li><span>Genre:</span> <a href="#">Action</a>
                        <a href="#">Triler</a></li>
                      <li><span>Release year:</span> 2017</li>
                      <li><span>Running time:</span> 120 min</li>
                      <li><span>Country:</span> <a href="#">USA</a></li>
                    </ul>

                    <div class="b-description_readmore_wrapper js-description_readmore_wrapper"
                         style="max-width: 302.5px;">
                      <div  class="card__description card__description--details b-description_readmore_ellipsis"
                           style="transition: min-height 1s ease 0s;min-height: 150px; height: 150px; max-height: 150px;"
                      :style="read ? '  overflow: unset;min-height: 300px': 'overflow: hidden'"
                      >
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
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
                  src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
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

export default {
  name: "Show",
  components: {Footer, Header},
  data() {
    return {
      image: require('@/assets/img/home/home__bg.jpg'),
      read: false
    }
  },
  methods:{
    readmore(){
      this.read = !this.read;
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
