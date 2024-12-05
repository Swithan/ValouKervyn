<template>
    <div>
        <img src="../assets/ValouKervyn.jpg" class="valou" alt="Valou Kervyn">
        <div id="presentation">
            <p class="italique">{{ presentation.about }}</p><br>
            <p class="nom">Valou Kervyn</p> <br>
            <p class="gris">{{ presentation.work }}</p><br><br>{{ presentation.text1 }}
            <p class="italique"><u>{{ presentation.art }}</u></p><br><br>{{ presentation.text2 }}
        </div>
    </div>
</template>

<script>
import translations from "../assets/translate.json";
import { inject, computed } from "vue";

export default {
    setup() {
        // Access global language state
        const language = inject("language");

        // Computed translation based on current language
        const presentation = computed(() => translations[language.current].presentation);

        return {
            presentation, // Expose `presentation` to the template
        };
    },
};
</script>

<style>

</style>
