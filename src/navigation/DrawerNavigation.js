import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomAppNavigation } from "./BottomAppNavigation";
import { AboutScreenNavigation } from "./AboutScreenNavigation";
import { CreateScreenNavigation } from "./CreateScreeNavigation";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const HomeIcon = () => <Ionicons name="home" />;
  const AboutIcon = () => <Ionicons name="information-circle" />;
  const AddIcon = () => <Ionicons name="add" />;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{ activeTintColor: THEME.MAIN_COLOR, labelStyle: { fontWeight: "bold" } }}
      >
        <Drawer.Screen name="Home" component={BottomAppNavigation} options={{ drawerIcon: HomeIcon }} />
        <Drawer.Screen name="About" component={AboutScreenNavigation} options={{ drawerIcon: AboutIcon }} />
        <Drawer.Screen name="New post" component={CreateScreenNavigation} options={{ drawerIcon: AddIcon }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
