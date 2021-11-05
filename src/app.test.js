import { shallowMount, mount } from "@vue/test-utils";

import App from "./App.vue";

import emitter from "./plugins/emitter";
import { tarot } from "./services/tarot";

describe("App", () => {
  let app;

  beforeEach(() => {
    app = shallowMount(App, {
      global: {
        plugins: [emitter],
      },
    });
  });

  afterEach(() => {
    app.unmount();
  });

  it("should render", () => {
    expect(app.exists()).toBeTruthy();
  });

  it("should render cards properly", () => {
    app.unmount();
    app = mount(App, {
      global: {
        plugins: [emitter],
      },
    });

    expect(app.findAll(".card").length).toBe(tarot.cards.length);
  });

  it("should start a game", () => {
    jest.spyOn(app.vm.emitter, "emit");
    const initialCards = [...app.vm.$data.cards];

    app.get("button").trigger("click");
    expect(app.vm.emitter.emit).toBeCalledTimes(1);
    expect(app.vm.$data.cards).not.toEqual(initialCards);
  });
});
