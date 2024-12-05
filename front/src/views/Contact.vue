<template>
    <div class="contact">
        <div class="infos">
            <h3 class="phone">{{contact.phone}}</h3>
            <p>0473/66.32.41</p>
            <h3 class="mail">E-mail </h3>
            <p>valoukervyn@gmail.com</p>
            <h3 class="adress">{{contact.address}}</h3>
            <p>{{contact.city}}</p>
        </div>
        <router-link v-if="eventFound" :to="`/event/${event.eid}`" class="card">
            <img :src="event.eimage">
            <h2>{{ event.ename }}</h2>
            <p>{{ event.eplace }}</p>
        </router-link>
        <div class="error" v-else>
            <img src="/src/assets/ValouKervyn.jpg" class="valou" alt="Valou Kervyn">
        </div>
    </div>
</template>

<script>
import translations from "../assets/translate.json";
import { inject, computed } from "vue";

export default {
    data() {
        return {
            event: [],
            eventFound: false,
        };
    },
    setup() {
        const language = inject("language");
        const contact = computed(() => translations[language.current].contact);
        
        return { contact };
    },
    methods: {
    async fetchEvent() {
      this.$emit("start-loading"); // Notify App.vue to show loading screen
      try {
        // Example API call to fetch image URLs
        const response = await fetch("http://localhost:5000/contact");
        if (!response.ok) throw new Error("Failed to fetch image sources");
        const data = await response.json();
        console.log(data)
        // Extract image URLs from API response
        if (data.length > 0) {
            this.event = data[0];
            this.eventFound = true;
        } else {
            this.event = {event: "Aucun événement en cours"};
            this.eventFound = false;
        }
        this.$emit("finish-loading");
         // Notify App.vue to hide loading screen
      } catch (error) {
        console.error("Error fetching images:", error);
        this.$emit("finish-loading");
      }
    },
    
  },
  mounted() {
    this.fetchEvent(); // Fetch event sources when component is mounted
  },
};
</script>

<style>
    .contact {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 50px;
        width: 100%;
    }
    .valou {
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        max-height: 400px;
    }
    .infos h3 {
        margin: 1rem 0 1rem 0;
    }
    .infos p {
        margin: 0 0 1.5rem 1rem;
    }
    @media screen and (max-width: 1200px) {
        .contact {
            flex-direction: column;
        }
        .valou {
            max-height: 400px;
        }
        
    }
    @media (max-width: 992px) {
        .contact {
            flex-direction: column;
        }
        .valou {
            max-height: 400px;
        }
    }
    @media screen and (max-width: 768px) {

        .valou {
            max-height: 500px;
        }
        
    }
    


</style>