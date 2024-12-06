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
            <div class="event">
                <h2>{{ event.ename }}</h2>
                <p>{{ event.ebegin }} - {{ event.eend }}</p>
            </div>
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
        if (!response.ok) throw new Error("Failed to fetch event");
        const data = await response.json();
        
        // set event data if found
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
        width: 100%;
    }
    .valou {
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        max-height: 400px;
        flex: 1;
    }
    .infos {
        flex: 3;
        margin: 0 2rem 0 2rem;
    }
    .infos h3 {
        margin: 1rem 0 1rem 0;
    }
    .infos p {
        margin: 0 0 1.5rem 1rem;
    }
    .card {
        text-decoration: none;
        color: #333333;
        flex: 1;
        margin: 0 2rem 0 2rem;
        background-color: #ededed;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        border-bottom: #ededed solid 1px;
    }

    .card p {
        margin: 0;
    }
    .event {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        text-align: center;
    }

    .event p {
        margin: auto;
        height: auto;
    }
    .card:hover {
        background-color: #edededaa;
        padding: 1.2rem;
        margin: 0 1.8rem;
        border-bottom: #333333 solid 1px;
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
            justify-content: space-between;
        }
        .valou {
            max-height: 400px;
        }
        .infos {
            flex: 3;
            margin: 0 2rem 0 2rem;
            width: 100%;
            text-align: center;
        }
        .infos h3 {
            margin: 0 0 0.5rem 0;
        }
        .infos p {
            margin: 0 0 0.8rem 0.5rem;
        }
        .card {
            width: 80%;
            font-size: normal;
        }
    }
    @media screen and (max-width: 768px) {

        .valou {
            max-height: 500px;
        }
        
    }
    


</style>