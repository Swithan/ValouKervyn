<template>
  <header>
    <div class="site-header">
    <div class="logo">
      <img src="../assets/VK.jpg" alt="Logo" />
    </div>
    <nav>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li
          class="dropdown"
          @mouseover="showDropdown = true"
          @mouseleave="showDropdown = false"
        >
          <router-link>Paintings</router-link>
          <ul v-if="showDropdown" class="dropdown-menu">
            <li><router-link to="/paintings/squaring-up">Squaring Up</router-link></li>
            <li><router-link to="/paintings/pins-and-needles">Pins & needles</router-link></li>
            <li><router-link to="/paintings/vibrations">Vibrations</router-link></li>
            <li><router-link to="/paintings/staging-paintings">Staging Paintings</router-link></li>
          </ul>
        </li>
        <li><router-link to="/presentation">Presentation</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="language-selector">
      <button @click="changeLanguage('en')">EN</button>
      <button @click="changeLanguage('fr')">FR</button>
      <button @click="changeLanguage('nl')">NL</button>
    </div>
  </div>
    <hr class="header-divider" />

  </header>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    changeLanguage(lang) {
      console.log(`Language changed to: ${lang}`);
    },
  },
};
</script>

<style scoped>
/* General header styling */
header {
  padding: 1rem 1rem 0;
  background-color: #ffffff;

}
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo styling */
.logo img {
  max-height: 100px;
}

/* Menu styling */
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2rem; /* Space between menu items */
}

.menu li {
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #555555;
  font-size: 1rem;
  transition: color 0.3s;
  position: relative; /* Needed for pseudo-element positioning */
}

.menu a:hover {
  color: #000000;
}

/* Animated underline effect */
.menu a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px; /* Adjust distance below the text */
  width: 0; /* Start with no width */
  height: 1px;
  background-color: #000000; /* Color of the underline */
  transition: width 0.2s ease-in-out; /* Smooth animation */
}

.menu a:hover::after {
  width: 100%; /* Full width on hover */
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 100%; /* Positioned right below the parent menu item */
  left: -0.5rem; /* Aligned to the left edge of the parent item */
  background-color: #ffffff;
  list-style: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 0;
  min-width: 115px;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.dropdown-menu a {
  font-size: 0.9rem;
  color: #555555;
  display: block; /* Makes the entire dropdown item clickable */
  padding: 0.2rem 0.5rem;
}

.dropdown-menu a:hover {
  color: #000000;
  background-color: #f7f7f7; /* Subtle hover background */
}

/* Language selector */
.language-selector {
  position: absolute;
  top: 0;
  right: 1.5rem;
  display: flex;
  gap: 0.5rem;
}

.language-selector button {
  background-color: transparent;
  border: none;
  color: #555555;
  font-size: 0.85rem;
  padding: 0.8rem;
  cursor: pointer;
  border-bottom: 1px solid #ffffff;
  transition: color 0.3s, background-color 0.3s;
  font-family: 'GeosansLight', sans-serif;
  font-weight: bolder;
}

.language-selector button:hover {
  color: #000000;
  background-color: #ededed;
  border-bottom: 1px solid #000000;

}

header .header-divider {
  border: none;
  border-top: 2px solid #ededed; /* Horizontal line for separation */
  margin: 0 auto 0.3rem;
  width: 50%; /* Keep the line shorter than the full width */
  background-color: #ffffff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

}

@media (max-width: 992px) {
  .menu {
    display: none;
  }

}

@media (max-width: 1200px) {
  .menu {
    display: none;
  }

}
</style>
