<template>
  <div class="card" :class="{ flipped: isFlipped }">
    <div class="front">
      <div class="info-container">
        <p class="title">{{ card.name }}</p>
        <p class="description">{{ card.description }}</p>
      </div>
    </div>
    <div class="back" @click="isFlipped = true"></div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    card: {
      type: Object,
      required: true,
    },

    frontCardUrl: {
      type: String,
      required: true,
    },

    backCardImg: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isFlipped: true,
    };
  },

  computed: {
    bgImg() {
      return `url(${this.backCardImg})`;
    },

    frontImg() {
      return `url(${this.frontCardUrl}${this.card.image})`;
    },
  },

  methods: {
    resetCard() {
      this.isFlipped = false;
    },
  },

  beforeMount() {
    this.emitter.on("start-game", this.resetCard);
  },

  beforeUnmount() {
    this.emitter.off("start-game", this.resetCard);
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 500ms;
  transform-style: preserve-3d;
  border-radius: 5px;
  width: 162px;
  height: 309px;
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  transition: all 250ms;
}

.front {
  height: 0;
  background-image: v-bind(frontImg);
}

.back {
  cursor: pointer;
  background-image: v-bind(bgImg);
}

.card:not(.flipped) .back:hover {
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.1);
}

.info-container {
  position: absolute;
  bottom: -30%;
  opacity: 0;
  transition: all 250ms;
  transform: translateY(-100%);
  pointer-events: none;
}

.info-container .title {
  text-align: center;
  margin-bottom: 10px;
}

.card.flipped {
  transform: rotateY(180deg) scaleX(-1);
  height: calc(341px + 125px);
}

.card.flipped .front {
  border-radius: 0;
  z-index: 1;
  height: 75%;
}

.card.flipped .back {
  z-index: -1;
}

.card.flipped .info-container {
  opacity: 1;
  transform: translateY(0%);
  pointer-events: all;
}
</style>
