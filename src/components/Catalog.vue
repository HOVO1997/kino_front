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
                <li class="breadcrumb__item"><a href="#">Home</a></li>
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
                    <input type="button" value="Action/Adventure">
                    <span></span>
                  </div>

                  <ul class="filter__item-menu dropdown-menu scr"
                      aria-labelledby="filter-genre" style="overflow: visible;">

                    <li data-value="action/adventure">Action/Adventure</li>
                    <li data-value="animals">Animals</li>
                    <li data-value="animation">Animation</li>
                    <li data-value="biography">Biography</li>
                    <li data-value="comedy">Comedy</li>
                    <li data-value="cooking">Cooking</li>
                    <li data-value="dance">Dance</li>
                    <li data-value="documentary">Documentary</li>
                    <li data-value="drama">Drama</li>
                    <li data-value="education">Education</li>
                    <li data-value="entertainment">Entertainment</li>
                    <li data-value="family">Family</li>
                    <li data-value="fantasy">Fantasy</li>
                    <li data-value="history">History</li>
                    <li data-value="horror">Horror</li>
                    <li data-value="independent">Independent</li>
                    <li data-value="international">International</li>
                    <li data-value="kids">Kids</li>
                    <li data-value="kids &amp; family">Kids &amp; Family</li>
                    <li data-value="medical">Medical</li>
                    <li data-value="military/war">Military/War</li>
                    <li data-value="music">Music</li>
                    <li data-value="musical">Musical</li>
                    <li data-value="mystery/crime">Mystery/Crime</li>
                    <li data-value="nature">Nature</li>
                    <li data-value="paranormal">Paranormal</li>
                    <li data-value="politics">Politics</li>
                    <li data-value="racing">Racing</li>
                    <li data-value="romance">Romance</li>
                    <li data-value="sci-fi/horror">Sci-Fi/Horror</li>
                    <li data-value="science">Science</li>
                    <li data-value="science fiction">Science Fiction</li>
                    <li data-value="science/nature">Science/Nature</li>
                    <li data-value="spanish">Spanish</li>
                    <li data-value="travel">Travel</li>
                    <li data-value="western">Western</li>
                  </ul>
                </div>
                <!-- end filter item -->

                <!-- filter item -->
                <div class="filter__item" id="filter__quality">
                  <span class="filter__item-label">QUALITY:</span>

                  <div class="filter__item-btn dropdown-toggle" role="navigation" id="filter-quality"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <input type="button" value="HD 1080">
                    <span></span>
                  </div>

                  <ul class="filter__item-menu dropdown-menu  _mCS_2 mCS_no_scrollbar scr"
                      aria-labelledby="filter-quality" style="overflow: visible;">
                    <div id="mCSB_2" class="mCustomScrollBox mCS-custom-bar mCSB_vertical mCSB_outside" tabindex="0">
                      <div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                           style="position:relative; top:0; left:0;" dir="ltr">
                        <li data-value="hd 1080">HD 1080</li>
                        <li data-value="hd 720">HD 720</li>
                        <li data-value="dvd">DVD</li>
                        <li data-value="ts">TS</li>
                      </div>
                    </div>

                  </ul>
                </div>
                <!-- end filter item -->

                <!-- filter item -->
                <div class="filter__item" id="filter__rate">
                  <span class="filter__item-label">IMBd:</span>

                  <div class="filter__item-btn dropdown-toggle" role="button" id="filter-rate" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                    <div class="filter__range">
                      <div id="filter__imbd-start">2.5</div>
                      <div id="filter__imbd-end">8.6</div>
                    </div>
                    <span></span>
                  </div>

                  <div class="filter__item-menu filter__item-menu--range dropdown-menu" aria-labelledby="filter-rate">
                    <div id="filter__imbd" class="noUi-target noUi-ltr noUi-horizontal">
                    </div>
                  </div>
                </div>
                <!-- end filter item -->

                <!-- filter item -->
                <div class="filter__item" id="filter__year">
                  <span class="filter__item-label">RELEASE YEAR:</span>

                  <div class="filter__item-btn dropdown-toggle" role="button" id="filter-year" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                    <div class="filter__range">
                      <div id="filter__years-start">2005</div>
                      <div id="filter__years-end">2015</div>
                    </div>
                    <span></span>
                  </div>
                  <div class="filter__item-menu filter__item-menu--range dropdown-menu" aria-labelledby="filter-year">
                    <div id="filter__years" class="noUi-target noUi-ltr noUi-horizontal">
                    </div>
                  </div>
                </div>
                <!-- end filter item -->
              </div>
              <!-- filter btn -->
              <button class="filter__btn" type="button">apply filter</button>
              <!-- end filter btn -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    Film Catalog-->
    <div class="catalog">
      <div class="container">
        <div class="row">
          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover.jpg" alt="">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                    <span class="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>8.4</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look
                        like readable English.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover2.jpg" alt="">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">Benched</a></h3>
                    <span class="card__category">
										<a href="#">Comedy</a>
									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>7.1</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover3.jpg" alt="">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">Whitney</a></h3>
                    <span class="card__category">
										<a href="#">Romance</a>
										<a href="#">Drama</a>
										<a href="#">Music</a>
									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>6.3</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover4.jpg" alt="">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">Blindspotting</a></h3>
                    <span class="card__category">
										<a href="#">Comedy</a>
										<a href="#">Drama</a>
									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>7.9</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover5.jpg" alt="">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                    <span class="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>8.4</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                        anything embarrassing hidden in the middle of text.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- card -->
          <div class="col-6 col-sm-12 col-lg-6">
            <div class="card card--list">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="card__cover">
                    <img src="../assets/img/covers/cover6.jpg" alt="">
                    <a href="#" class="card__play">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12 col-sm-8">
                  <div class="card__content">
                    <h3 class="card__title"><a href="#">Benched</a></h3>
                    <span class="card__category">
										<a href="#">Comedy</a>
									</span>

                    <div class="card__wrap">
                      <span class="card__rate"><i class="fas fa-star color"></i>7.1</span>

                      <ul class="card__list">
                        <li>HD</li>
                        <li>16+</li>
                      </ul>
                    </div>

                    <div class="card__description">
                      <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
                        words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                        or non-characteristic words etc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- paginator -->
          <div class="col-12">
            <ul class="paginator paginator--list">
              <li class="paginator__item paginator__item--prev">
                <a href="#"><i class="fas fa-angle-left"></i></a>
              </li>
              <li class="paginator__item"><a href="#">1</a></li>
              <li class="paginator__item paginator__item--active"><a href="#">2</a></li>
              <li class="paginator__item"><a href="#">3</a></li>
              <li class="paginator__item"><a href="#">4</a></li>
              <li class="paginator__item paginator__item--next">
                <a href="#"><i class="fas fa-angle-right"></i></a>
              </li>
            </ul>
          </div>
          <!-- end paginator -->
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

export default {
  name: "Catalog",
  components: {Expected_premiere, Footer, Header},
  data() {
    return {
      image: require('@/assets/img/section/section.jpg'),
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
.card{
  background: transparent;
  border: none;
}
.color{
  color: #FF5682;
  margin-right: 5px;
}
.scr{
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
#bg_to_div{
  background: url(../assets/img/section/section.jpg) center center / cover no-repeat;
}
</style>
