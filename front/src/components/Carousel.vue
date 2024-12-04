<template>
    <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
      <div
        class="carousel-inner"
        :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.5s ease' : 'none' }"
        @transitionend="handleTransitionEnd"
      >
        <!-- Render all images plus the first one appended at the end -->
        <div class="carousel-item" v-for="(src, index) in extendedImages" :key="index">
          <img :src="src" :alt="'Image ' + index" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0, // Start at the first image
        isTransitioning: true, // Controls the animation
        intervalId: null, // For autoplay
      };
    },
    computed: {
      extendedImages() {
        // Append the first image at the end for seamless scrolling
        return [...this.images, this.images[0]];
      },
    },
    methods: {
      startAutoplay() {
        this.intervalId = setInterval(() => {
          this.goToNext();
        }, 3000);
      },
      stopAutoplay() {
        clearInterval(this.intervalId);
      },
      goToNext() {
        this.isTransitioning = true;
        this.currentIndex++;
      },
      handleTransitionEnd() {
        // When transitioning from the last (fake) image to the first, reset position without animation
        if (this.currentIndex === this.images.length) {
          this.isTransitioning = false;
          this.currentIndex = 0; // Reset to the first real image
        }
      },
    },
    mounted() {
      this.startAutoplay();
    },
    beforeUnmount() {
      this.stopAutoplay();
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 600px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
  }
  </style>
  