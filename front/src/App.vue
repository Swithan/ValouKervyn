<template>
  <div id="app">
    <Header /> <!-- Always visible -->
    <main>
      <!-- Show loading screen when loading -->
      <div v-if="loading" class="loading-screen">
        <div class="spinner"></div>
      </div>

      <!-- Keep router-view alive so events can propagate -->
      <router-view class="content"
        @start-loading="startLoading"
        @finish-loading="finishLoading"
      />
    </main>
    <Footer /> <!-- Always visible -->
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { reactive, provide } from "vue";

export default {  
  data() {
    return {
      loading: false, // Initially show loading
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    startLoading() {
      this.loading = true;
    },
    finishLoading() {
      console.log("End loading")
      this.loading = false;
    },
  },
  setup() {
    // Reactive global language state
    const language = reactive({ current: "en" });
    provide("language", language); // Provide the language globally
    console.log(language)
  },

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
    font-size: 1.2rem;
    margin: 0 20%;
    background-color: #ededed;
}

.content {
  z-index: 0;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-top: 5px solid #555;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
    font-size: 1rem;
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
