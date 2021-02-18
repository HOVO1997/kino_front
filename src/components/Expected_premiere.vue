<template>
  <section class="section section--bg" :data-bg="image"
           style="background: url(../src/assets/img/section/section.jpg) center center / cover no-repeat;">
    <div class="container">
      <div class="row">
        <!-- section title -->
        <div class="col-12">
          <h2 class="section__title">Expected premiere</h2>
        </div>
        <!-- end section title -->

        <!-- card -->
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card__cover">
              <img src="../assets/img/covers/cover.jpg" alt="">
              <a href="#" class="card__play">
                <i class="fas fa-play"></i>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
              <span class="card__category">
								<a href="#">Action</a>
								<a href="#">Triler</a>
							</span>
              <span class="card__rate"><i class="fas fa-star"></i>8.4</span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- card -->
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card__cover">
              <img src="../assets/img/covers/cover3.jpg" alt="">
              <a href="#" class="card__play">
                <i class="fas fa-play"></i>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title"><a href="#">Benched</a></h3>
              <span class="card__category">
								<a href="#">Comedy</a>
							</span>
              <span class="card__rate"><i class="fas fa-star"></i>7.1</span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- card -->
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card__cover">
              <img src="../assets/img/covers/cover2.jpg" alt="">
              <a href="#" class="card__play">
                <i class="fas fa-play"></i>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title"><a href="#">Whitney</a></h3>
              <span class="card__category">
								<a href="#">Romance</a>
								<a href="#">Drama</a>
								<a href="#">Music</a>
							</span>
              <span class="card__rate"><i class="fas fa-star"></i>6.3</span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- card -->
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card__cover">
              <img src="../assets/img/covers/cover6.jpg" alt="">
              <a href="#" class="card__play">
                <i class="fas fa-play"></i>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title"><a href="#">Blindspotting</a></h3>
              <span class="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
              <span class="card__rate"><i class="fas fa-star"></i>7.9</span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- card -->
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card__cover">
              <img src="../assets/img/covers/cover4.jpg" alt="">
              <a href="#" class="card__play">
                <i class="fas fa-play"></i>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
              <span class="card__category">
								<a href="#">Action</a>
								<a href="#">Triler</a>
							</span>
              <span class="card__rate"><i class="fas fa-star"></i>8.4</span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- card -->
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
          <div class="card">
            <div class="card__cover">
              <img src="../assets/img/covers/cover5.jpg" alt="">
              <a href="#" class="card__play">
                <i class="fas fa-play"></i>
              </a>
            </div>
            <div class="card__content">
              <h3 class="card__title"><a href="#">Benched</a></h3>
              <span class="card__category">
								<a href="#">Comedy</a>
							</span>
              <span class="card__rate"><i class="fas fa-star"></i>7.1</span>
            </div>
          </div>
        </div>
        <!-- end card -->

        <!-- section btn -->
        <div class="col-12">
          <a href="#" class="section__btn">Show more</a>
        </div>
        <!-- end section btn -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Expected_premiere",
  data() {
    return {
      image: require('@/assets/img/section/section.jpg'),
    }
  }
}
</script>

<style scoped>
.card{
  background: transparent;
  border: none;
}
</style>
