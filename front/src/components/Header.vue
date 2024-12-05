<template>
  <header>
    <div class="site-header">
      <div class="burger-btn" v-bind:class="burger? 'open':''" @click="burger = !burger">
        <hr>
        <hr>
        <hr>
      </div>
      <div class="logo">
        <img src="../assets/VK.jpg" alt="Logo" />
      </div>
      <nav class="nav-menu">
        <ul class="menu">
          <li><router-link to="/">{{translation.home}}</router-link></li>
          <li
            class="dropdown"
            @mouseover="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <router-link>{{translation.paintings}}</router-link>
            <ul v-if="showDropdown" class="dropdown-menu">
              <li v-for="category in categories" v-bind:key="category">
                <router-link :to="{path:category.route}">{{category.name}}</router-link>
              </li>              
            </ul>
          </li>
          <li><router-link to="/presentation">{{translation.presentation}}</router-link></li>
          <li><router-link to="/events">{{translation.events}}</router-link></li>
          <li><router-link to="/contact">{{translation.contact}}</router-link></li>
        </ul>
      </nav>
      <div class="language-selector">
        <button
          v-for="lang in ['en', 'fr', 'nl']"
          :key="lang"
          @click="changeLanguage(lang)"
          :class="{ current: language.current === lang }"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
    </div>
      <nav class="nav-burger">
        <ul class="burger" v-if="burger">
          <li><router-link to="/" @click="burger = !burger">{{translation.home}}</router-link></li>
          <li class="dropdown">
            <router-link>{{translation.paintings}}</router-link>
            <ul class="dropdown-burger">
              <li v-for="category in categories" v-bind:key="category">
                <router-link :to="{path:category.route}" @click="burger = !burger">{{category.name}}</router-link>
              </li> 
            </ul>
          </li>
          <li><router-link to="/presentation" @click="burger = !burger">{{translation.presentation}}</router-link></li>
          <li><router-link to="/events" @click="burger = !burger">{{translation.events}}</router-link></li>
          <li><router-link to="/contact" @click="burger = !burger">{{translation.contact}}</router-link></li>
          <li>
            <div class="language-burger">
        <button
          v-for="lang in ['en', 'fr', 'nl']"
          :key="lang"
          @click="changeLanguage(lang)"
          :class="{ current: language.current === lang }"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
        </li>
      </ul>
    </nav>
  <hr class="header-divider" />

  </header>
</template>


<script>
import { inject, computed } from "vue";
import translations from "../assets/translate.json";

export default {
  data() {
    return {
      showDropdown: false,
      burger: false,
      categories: [
        { name: "Squaring Up", route: "/paintings/squaring_up" },
        { name: "Pins & Needles", route: "/paintings/pins_&_needles" },
        { name: "Vibrations", route: "/paintings/vibrations" },
        { name: "Staging Paintings", route: "/paintings/staging_paintings" },
      ],
    };
  },
  setup() {
    // Access global language state
    const language = inject("language");

    // Computed translation based on current language
    const translation = computed(() => translations[language.current].header);
    // Change language and update global state
    const changeLanguage = (lang) => {
      if (translations[lang]) {
        language.current = lang;
      } else {
        console.warn(`Translation for language "${lang}" not found.`);
      }
    };

    return {
      language,
      translation,
      changeLanguage,
    };
  },
};
</script>

<style scoped>
/* General header styling */
header {
  padding: 1rem 1rem 0;
  background-color: #ffffff;
  z-index: 5;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo styling */
.logo img {
  max-height: 150px;
}

.burger-btn, .burger {
  display: none;
}

/* Menu styling */
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 4rem; /* Space between menu items */
}

.menu li {
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #555555;
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
}

.dropdown-menu a {
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
  font-size: 0.8rem;
  padding: 0.8rem;
  cursor: pointer;
  border-bottom: 1px solid #ffffff;
  transition: color 0.3s, background-color 0.3s;
  font-family: 'GeosansLight', sans-serif;
}

.language-selector .current{
  background-color: #ededed;
  font-weight: bold;
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


}

@media (max-width: 992px) {


}

@media (max-width: 1200px) {
  .nav-menu {
    display: none;
  }
  .language-selector {
    display: none;
  }

  .burger-btn {
    display: block;
    border: none;
    padding: 0.2rem 0;
    transition: all ease-in-out 0.2s;
  }

  .burger-btn hr {
    width: 1.5rem;
    margin: 0.4rem;
    border: 1px solid #555555;
    border-radius: 2rem;
  }

  .open {
    background-color: #ededed;
  }

  .open hr {
    border: 1px solid #000000;
  }
  .nav-burger {
    display: block;
    overflow: hidden;
  }

  .burger {
    display: block;
    margin: 0;
    padding: 0.5rem;
    transform-origin: top;
    transition: transform .4s ease-in-out;
  }

  .burger li {
    list-style: none;
    padding: 0.1rem 0.2rem;
  }

  .burger a {
    text-decoration: none;
    color: #555555;
    transition: color 0.3s;
    border-bottom: 1px solid #ffffff;
    transition: all 0.3s ease-in-out;
  }
  .burger a:active {
    background-color: #ededed;
    border-bottom: 1px solid #000000;
    color: #000000;
  }

  .dropdown-burger {
    padding-left: 0.5rem;
  }

  .language-burger{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  .language-burger button {
    border: none;
    font-family: 'GeosansLight', sans-serif;
    padding: 0.3rem 0.1rem;
    min-width: 25px;
    background-color: #ffffff;
    border-bottom: 1px solid #ffffff;
    transition: all 0.3s ease-in-out;
  }
  .language-burger button:active {
    background-color: #ededed;
    border-bottom: 1px solid #000000; 
  }

  .language-burger .current {
    background-color: #ededed;
    font-weight: bold;
  }
}

@media (max-width: 1800px) {
  .logo img {
    max-height: 100px;
  }
  .menu {
    gap: 2rem;
  }
}

.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
</style>
