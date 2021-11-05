import { createApp } from "vue";
import App from "./App.vue";
import emitter from "./plugins/emitter";

const app = createApp(App);

app.use(emitter);

app.mount("#app");
