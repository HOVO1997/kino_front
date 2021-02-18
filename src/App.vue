<template>
  <div>
    <Header></Header>
  <Items_of_this_season></Items_of_this_season>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Items_of_this_season from "@/components/Items_of_this_season";

export default {
  name: 'App',
  components: {Items_of_this_season, Footer, Header},
}
</script>

<style>
.container {
  max-width: 1140px;
}

a {
  text-decoration: none;
}
</style>
