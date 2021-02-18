<template>
  <div class="sign section--bg" :data-bg="image" style="background: url(../src/assets/img/section/section.jpg) center center / cover no-repeat;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- registration form -->
            <form action="#" class="sign__form">
              <a href="index.html" class="sign__logo">
                <img src="../assets/img/logo.svg" alt="">
              </a>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Name">
              </div>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Email">
              </div>

              <div class="sign__group">
                <input type="password" class="sign__input" placeholder="Password">
              </div>

              <div class="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox">
                <label for="remember">I agree to the <a href="#">Privacy Policy</a></label>
              </div>

              <button class="sign__btn" type="button">Sign up</button>

              <span class="sign__text">Already have an account? <router-link :to="{name: 'login'}"><a href="#">Sign in!</a></router-link> </span>
            </form>
            <!-- registration form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      image: require('@/assets/img/section/section.jpg'),
    }
  }
}
</script>

<style scoped>
.sign__group--checkbox input:not(:checked) + label:after, .sign__group--checkbox input:checked + label:after {
  content: '✓';
}
</style>
