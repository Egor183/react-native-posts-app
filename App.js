import React, { useState } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";
import store from "./src/store/index";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading onFinish={() => setIsReady(true)} onError={(e) => console.log(e)} startAsync={bootstrap} />;
  }

  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
}
