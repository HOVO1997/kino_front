<template>
<div>
  <Header></Header>
  <Items_of_this_season></Items_of_this_season>
  <Home_content></Home_content>
  <Home_content_items></Home_content_items>
  <Expected_premiere></Expected_premiere>
  <Partner_section></Partner_section>
  <Footer></Footer>
</div>
</template>

<script>
import Items_of_this_season from "@/components/Items_of_this_season";
import Home_content from "@/components/Home_content";
import Home_content_items from "@/components/Home_content_items";
import Expected_premiere from "@/components/Expected_premiere";
import Partner_section from "@/components/Partner_section";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
name: "Home",
  components: {
    Partner_section,
    Expected_premiere,
    Home_content_items,
    Home_content,
    Items_of_this_season,
    Footer,
    Header
  },
}
</script>

<style scoped>

</style>
