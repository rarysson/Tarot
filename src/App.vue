<template>
  <header>
    <button @click="startGame">Iniciar jogo</button>
  </header>

  <transition-group class="cards-container" tag="div" name="cards">
    <card
      v-for="card in cards"
      :key="card.image"
      :card="card"
      :frontCardUrl="frontCardUrl"
      :backCardImg="backCardImg"
    />
  </transition-group>
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
      frontCardUrl: tarot.imagesUrl,
      backCardImg: tarot.imageBackCard,
      cards: [...tarot.cards],
    };
  },

  methods: {
    startGame() {
      this.emitter.emit("start-game");
      this.randomizeCards();
    },

    randomizeCards() {
      let currentIndex = this.cards.length;

      while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this.cards[currentIndex], this.cards[randomIndex]] = [
          this.cards[randomIndex],
          this.cards[currentIndex],
        ];
      }
    },
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

header {
  text-align: center;
  margin: 30px 0;
}

header button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: whitesmoke;
  background-color: #7ba8c3;
  font-size: 24px;
  padding: 5px 25px;
  box-shadow: 0 7px rgba(0, 0, 0, 0.3);
}

header button:hover {
  background-color: #5089b1;
}

header button:active {
  transform: translateY(5px);
  box-shadow: 0 2px rgba(0, 0, 0, 0.7);
}

.cards-container {
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  gap: 30px;
  justify-items: center;
}

.cards-enter-active,
.cards-leave-active {
  transition: all 250ms;
}

.cards-move {
  transition: transform 250ms;
}
</style>
