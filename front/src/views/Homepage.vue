<template>
    <Carousel class="home" :images="imageSources" />
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      imageSources: [], // Array of image URLs from the API
      allImagesLoaded: false, // Track if all images are loaded
    };
  },
  methods: {
    async fetchImageSources() {
      this.$emit("start-loading"); // Notify App.vue to show loading screen
      try {
        // Example API call to fetch image URLs
        const response = await fetch("http://localhost:5000/homepage");
        if (!response.ok) throw new Error("Failed to fetch image sources");
        const data = await response.json();
        // Extract image URLs from API response
        this.imageSources = data.map((item) => item.himage);
        setTimeout(()=> {this.$emit("finish-loading");}, 1000)
        this.allImagesLoaded = true
         // Notify App.vue to hide loading screen
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
      }
    },
    
  },
  mounted() {
    this.fetchImageSources(); // Fetch image sources when component is mounted
  },
};
</script>

<style>
.home {
  height: 100%;
}
</style>