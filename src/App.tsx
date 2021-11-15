import React, { useEffect } from "react";
import "./App.css";
import { apiStoreImpl } from "./stores/apiStore";
import Api from "./api/api";
import "@fontsource/roboto/300.css";
import { observer } from "mobx-react";

interface AppProps {
  apiStore: apiStoreImpl;
}

const App: React.FC<AppProps> = observer(({ apiStore }) => {
  useEffect(() => {
    async function fetch() {
      const res = await Api();
      apiStore.setApi(res);
    }

    fetch();
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
});

export default App;
