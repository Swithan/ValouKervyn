<template>
  <div v-if="allImagesLoaded">
    <div v-for="(src, index) in imageSources" :key="index">
      <img :src="src" :alt="'Image ' + index" />
    </div>
  </div>
</template>

<script>
export default {
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
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=5");
        if (!response.ok) throw new Error("Failed to fetch image sources");
        const data = await response.json();
        console.log(data)
        // Extract image URLs from API response
        this.imageSources = data.map((item) => console.log(item.thumbnailUrl));
        setTimeout(()=> {}, 1000)
        this.allImagesLoaded = true
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        this.$emit("finish-loading"); // Notify App.vue to hide loading screen
      }
    },
    
  },
  mounted() {
    this.fetchImageSources(); // Fetch image sources when component is mounted
  },
};
</script>
