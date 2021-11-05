import { shallowMount } from "@vue/test-utils";

import Card from "./Card.vue";

import emitter from "../plugins/emitter";

describe("Card", () => {
  let card;

  beforeEach(() => {
    card = shallowMount(Card, {
      global: {
        plugins: [emitter],
      },
      props: {
        card: {},
        frontCardUrl: "",
        backCardImg: "",
      },
    });
  });

  afterEach(() => {
    card.unmount();
  });

  it("should render", () => {
    expect(card.exists()).toBeTruthy();
  });

  it("should flip card", () => {
    card.setData({ isFlipped: false });

    card.get(".back").trigger("click");
    expect(card.vm.$data.isFlipped).toBe(true);
  });

  it("should reset card on start-game event", () => {
    expect(card.vm.$data.isFlipped).toBe(true);
    card.vm.emitter.emit("start-game");
    expect(card.vm.$data.isFlipped).toBe(false);
  });
});
