<template>
    <div class="contact">
        <div id="infos">
            <h3 id="phone">{{contact.phone}}</h3>
            <p>0473/66.32.41</p>
            <h3 id="mail">E-mail </h3>
            <p>valoukervyn@gmail.com</p>
            <h3 id="adress">{{contact.address}}</h3>
            <p>{{contact.city}}</p>
        </div>
        <router-link v-if="eventFound" to="/event" id="event">{{event.event}}</router-link>
        <div id="error" v-else="">
            <img src="/src/assets/ValouKervyn.jpg" id="valou" alt="Valou Kervyn">
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import translations from "../assets/translate.json";
import { inject, computed } from "vue";

export default {
    setup() {
        const language = inject("language");
        const contact = computed(() => translations[language.current].contact);
        const event = computed(() => translations[language.current].event);
        return { contact, event };
    },
};
</script>

<style>
</style>