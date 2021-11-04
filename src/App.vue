<template>
  <div class="cards-container">
    <card
      v-for="card in tarot.cards"
      :key="card.image"
      :card="card"
      :frontCardUrl="tarot.imagesUrl"
      :backCardImg="tarot.imageBackCard"
    />
  </div>
</template>

<script>
import Card from "./components/Card.vue";

import { tarot } from "./services/tarot";

export default {
  name: "App",

  components: {
    Card,
  },

  data() {
    return {
      tarot,
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

.cards-container {
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  gap: 30px;
}
</style>
