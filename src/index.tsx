import r2wc from "@r2wc/react-to-web-component";
import App from "./App";
import "./index.css";

const intWidget = r2wc(App, {
  props: {
    id_number_vapi: "string",
    voice_assistant_id: "string",
    btnColor: "string",
  },
});

customElements.define("int-widget", intWidget);
