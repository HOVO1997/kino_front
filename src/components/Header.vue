<template>
  <header class="header">
    <div class="header__wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__content">
              <!-- header logo -->
              <router-link :to="{name: 'home'}">
                <a href="#" class="header__logo">
                  <img src="../assets/img/logo.svg" alt="">
                </a>
              </router-link>
              <!-- end header logo -->

              <!-- header nav -->
              <ul class="header__nav">
                <!-- dropdown -->
                <li class="header__nav-item">
                  <router-link :to="{name: 'home'}">
                    <a class="header__nav-link" href="#" role="button" aria-haspopup="true"
                       aria-expanded="false">Home</a>
                  </router-link>
                </li>
                <!-- end dropdown -->

                <!-- dropdown -->
                <li class="header__nav-item">
                  <router-link :to="{name: 'catalog'}">
                    <a class=" header__nav-link" href="#" role="button"
                       aria-expanded="false">Catalog</a>
                  </router-link>
                </li>
                <!-- end dropdown -->

                <li class="header__nav-item">
                  <a href="pricing.html" class="header__nav-link">Pricing Plan</a>
                </li>

                <li class="header__nav-item">
                  <a href="faq.html" class="header__nav-link">Help</a>
                </li>

                <!-- dropdown -->
                <li class="dropdown header__nav-item">
                  <a class="header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>

                  <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                    <li><a href="about.html">About</a></li>

                    <li>
                      <router-link :to="{name: 'login'}">
                        <a href="#">Sign In</a>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{name: 'register'}">
                        <a href="#">Sign Up</a>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <!-- end dropdown -->
              </ul>
              <!-- end header nav -->

              <!-- header auth -->
              <div class="header__auth">
                <button @click="search" class="header__search-btn" type="button">
                  <i class="fas fa-search"></i>
                </button>

                <router-link :to="{name: 'login'}">
                  <a href="#" class="header__sign-in">
                    <i class="icon ion-ios-log-in"></i>
                    <span>sign in</span>
                  </a>
                </router-link>
              </div>
              <!-- end header auth -->

              <!-- header menu btn -->
              <button class="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <!-- end header menu btn -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header search -->
    <form :style=" visibility ? 'top: 88px;' : 'top: 0px;' " action="#" class="header__search">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__search-content">
              <input v-model="searchVal" type="text"
                     placeholder="Search for a movie, TV Series that you are looking for">
              <button type="button" @click="redir()">search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- end header search -->
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      visibility: false,
      searchVal: '',
    }
  },
  methods: {
    search() {
      this.visibility = !this.visibility;
    },
    redir() {
      if (this.$route.path !== '/catalog') {
        this.$router.push({name: 'catalog', params: {param: this.searchVal}})
      }

    }
  }
}
</script>

<style scoped>

</style>
