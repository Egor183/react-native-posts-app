import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading onFinish={() => setIsReady(true)} onError={(e) => console.log(e)} startAsync={bootstrap} />;
  }

  return <DrawerNavigation />;
}
