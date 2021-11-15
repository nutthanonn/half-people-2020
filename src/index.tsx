import ReactDOM from "react-dom";
import App from "./App";
import { apiStore } from "./stores/apiStore";

ReactDOM.render(
  <div>
    <App apiStore={apiStore} />
  </div>,
  document.getElementById("root")
);
