<template>
    <div class="presentation-container">
        <img src="/src/assets/ValouKervyn.jpg" id="img1" alt="Valou Kervyn" class="presentation-image">
        <p class="italique">{{ presentation.about }}</p>
        <p class="nom">Valou Kervyn</p>
        <p class="gris">{{ presentation.work }}</p>
        <p>{{ presentation.text1 }}</p>
        <p class="italique"><u>{{ presentation.art }}</u></p>
        <p>{{ presentation.text2 }}</p>
    </div>
</template>

<script>
import translations from "../assets/translate.json";
import { inject, computed } from "vue";

export default {
    setup() {
        const language = inject("language");
        const presentation = computed(() => translations[language.current].presentation);
        return { presentation };
    },
};
</script>

<style scoped>
/* Base container for layout */
.presentation-container {
    max-width: 1200px;
    margin: 1rem 2rem;
    line-height: 1.6;
    color: #333;
    text-align: justify;
    align-items: center;
}

/* Image styling with float */
.presentation-image {
    float: left;
    max-width: 250px;
    height: auto;
    border-radius: 10px;
    margin: 0 1rem 0 0;
}

/* Font styles */
.italique {
    font-style: italic;
    color: #555;
}

.nom {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 10px 0;
}

.gris {
    color: #333333;
    font-size: 1rem;
}

/* Responsive styles */
@media (max-width: 768px) {
    .presentation-image {
        float: none;
        width: 100%;
        max-width: 300px;
        margin: 0 auto 20px;
        display: block;
    }
}
</style>
