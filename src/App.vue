<template>
  <div>
    <Header></Header>
    <Items_of_this_season></Items_of_this_season>
    <Home_content></Home_content>
    <Home_content_items></Home_content_items>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Items_of_this_season from "@/components/Items_of_this_season";
import Home_content from "@/components/Home_content";
import Home_content_items from "@/components/Home_content_items";

export default {
  name: 'App',
  components: {Home_content_items, Home_content, Items_of_this_season, Footer, Header},
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
