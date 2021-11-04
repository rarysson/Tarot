<template>
  <div class="cards-container">
    <card
      :card="tarot.cards[0]"
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
}
</style>
