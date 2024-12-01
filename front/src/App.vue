<template>
  <div id="app">
    <Header /> <!-- Always visible -->
    <main>
      <router-view /> <!-- Dynamic page content -->
    </main>
    <Footer /> <!-- Always visible -->
  </div>
</template> 

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style>
@font-face {
    font-family: 'GeosansLight';
    src: url('@/assets/fonts/GeosansLight.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

body{
    font-family: 'GeosansLight', sans-serif;
    margin: 0 15%;
    background-color: #ededed;
}
/* Global styles */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1; /* Ensures the main content takes the remaining space */
  padding: 1rem;
  background-color: #ffffff;
}
}

Footer {
  position: sticky;
  bottom: 0;
}
</style>
