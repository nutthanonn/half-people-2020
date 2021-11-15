import React, { useEffect } from "react";
import "./App.css";
import Main from "./pages/main";
import Api from "./api/api";
import { apiStoreImpl } from "./stores/apiStore";
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
  }, [apiStore]);

  return (
    <div>
      <Main />
    </div>
  );
});

export default App;
