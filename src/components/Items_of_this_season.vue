<template>
  <section class="home">
    <!-- home bg -->
    <div class="owl-carousel home__bg owl-loaded">


      <div class="owl-stage-outer">
        <div class="owl-stage"
             style="transform: translate3d(-3038px, 0px, 0px); transition: all 0s ease 0s; width: 12154px;">
          <div class="owl-item cloned" style="width: 1519.2px;">
            <div class="item home__cover" :data-bg="image1"
                 style="background: url(../src/assets/img/home/home__bg3.jpg) center center / cover no-repeat; height: 692.575px;"></div>
          </div>
          <div class="owl-item cloned" style="width: 1519.2px;">
            <div class="item home__cover" :data-bg="image2"
                 style="background: url(&quot;../assets/img/home/home__bg4.jpg&quot;) center center / cover no-repeat; height: 692.575px;"></div>
          </div>
          <div class="owl-item active" style="width: 1519.2px;">
            <div class="item home__cover" :data-bg="image3"
                 style="background: url(&quot;../assets/img/home/home__bg.jpg&quot;) center center / cover no-repeat; height: 692.575px;"></div>
          </div>
          <div class="owl-item" style="width: 1519.2px;">
            <div class="item home__cover" :data-bg="image4"
                 style="background: url(&quot;../assets/img/home/home__bg2.jpg&quot;) center center / cover no-repeat; height: 692.575px;"></div>
          </div>
        </div>
      </div>
      <div class="owl-nav disabled">
        <button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>
        <button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>
      </div>
      <div class="owl-dots disabled"></div>
    </div>
    <!-- end home bg -->

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

          <button class="home__nav home__nav--prev" type="button">
            <i class="fas fa-long-arrow-alt-left"></i>
          </button>
          <button class="home__nav home__nav--next" type="button">
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>


        <div class="col-12">
          <div class="owl-carousel home__carousel">

            <div class="item">
              <!-- card -->
              <div class="card card--big">
                <div class="card__cover">
                  <img src="../assets/img/covers/cover.jpg" alt="">
                  <router-link :to="{name: 'show'}">
                  <a href="#" class="card__play">
                    <i class="fas fa-play"></i>
                  </a>
                  </router-link>
                </div>
                <div class="card__content">
                  <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                  <span class="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
                  <span class="card__rate"><i class="fas fa-star color"></i>8.4</span>
                </div>
              </div>
              <!-- end card -->
            </div>

            <div class="item">
              <!-- card -->
              <div class="card card--big">
                <div class="card__cover">
                  <img src="../assets/img/covers/cover2.jpg" alt="">
                  <router-link :to="{name: 'show'}">
                  <a href="#" class="card__play">
                    <i class="fas fa-play"></i>
                  </a>
                  </router-link>
                </div>
                <div class="card__content">
                  <h3 class="card__title"><a href="#">Benched</a></h3>
                  <span class="card__category">
										<a href="#">Comedy</a>
									</span>
                  <span class="card__rate"><i class="fas fa-star color"></i>7.1</span>
                </div>
              </div>
              <!-- end card -->
            </div>

            <div class="item">
              <!-- card -->
              <div class="card card--big">
                <div class="card__cover">
                  <img src="../assets/img/covers/cover3.jpg" alt="">
                  <router-link :to="{name: 'show'}">
                  <a href="#" class="card__play">
                    <i class="fas fa-play"></i>
                  </a>
                  </router-link>
                </div>
                <div class="card__content">
                  <h3 class="card__title"><a href="#">Whitney</a></h3>
                  <span class="card__category">
										<a href="#">Romance</a>
										<a href="#">Drama</a>
									</span>
                  <span class="card__rate"><i class="fas fa-star color"></i>6.3</span>
                </div>
              </div>
              <!-- end card -->
            </div>

            <div class="item">
              <!-- card -->
              <div class="card card--big">
                <div class="card__cover">
                  <img src="../assets/img/covers/cover4.jpg" alt="">
                  <router-link :to="{name: 'show'}">
                  <a href="#" class="card__play">
                    <i class="fas fa-play"></i>
                  </a>
                  </router-link>
                </div>
                <div class="card__content">
                  <h3 class="card__title"><a href="#">Blindspotting</a></h3>
                  <span class="card__category">
										<a href="#">Comedy</a>
										<a href="#">Drama</a>
									</span>
                  <span class="card__rate"><i class="fas fa-star color"></i>7.9</span>
                </div>
              </div>
              <!-- end card -->
            </div>



          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Items_of_this_season",
  data() {
    return {
      image1: require('@/assets/img/home/home__bg.jpg'),
      image2: require('@/assets/img/home/home__bg2.jpg'),
      image3: require('@/assets/img/home/home__bg3.jpg'),
      image4: require('@/assets/img/home/home__bg4.jpg'),
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
.home__nav{
    top: 3%;
}
.color{
  color: #FF5682;
  margin-right: 5px;
}
</style>
