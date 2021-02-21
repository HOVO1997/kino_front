<template>
  <div class="page-404 section--bg" id="bg_to_div">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="page-404__wrap">
            <div class="page-404__content">
              <h1 class="page-404__title">404</h1>
              <p class="page-404__text">The page you are looking for not available!</p>
              <router-link :to="{name:'home'}">
                <a href="#" class="page-404__btn">go back</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notfound",
  data() {
    return {
      image: require('@/assets/img/section/section.jpg'),
    }
  }
}
</script>

<style scoped>
#bg_to_div{
  background: url(../assets/img/section/section.jpg) center center / cover no-repeat;
}
</style>
