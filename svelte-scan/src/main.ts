import "./app.scss";
import "./ButtonAnimated";
import "./Ripples";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
