<template>
  <div>
       <router-view></router-view>
  </div>
</template>

<script>




export default {
  name: 'App',
  components: {
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
