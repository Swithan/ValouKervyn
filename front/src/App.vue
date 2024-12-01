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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
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
    margin: 0 20%;
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
Header {
  position: sticky;
  top: 0;
}

Footer {
  position: sticky;
  bottom: 0;
}

@media (max-width: 1200px) {
  body {
    margin: 0 15%;
  }

}

@media (max-width: 992px) {
  body {
    margin: 0 10%;
  }
}

@media (max-width: 768px) {
  body {
    margin: 0 2%;
  }

}

</style>
