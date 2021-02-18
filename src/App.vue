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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Items_of_this_season from "@/components/Items_of_this_season";
import Home_content from "@/components/Home_content";
import Home_content_items from "@/components/Home_content_items";
import Expected_premiere from "@/components/Expected_premiere";
import Partner_section from "@/components/Partner_section";


export default {
  name: 'App',
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

<style>
.container {
  max-width: 1140px;
}

a {
  text-decoration: none;
}

body::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #2A2A30; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #FF5682; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid #FF5682; /* creates padding around scroll thumb */
}
</style>
