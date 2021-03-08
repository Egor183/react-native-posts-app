import React from "react";
import { AboutScreen } from "../screens/AboutScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIconButton from "../components/AppHeaderIcon";

const Stack = createStackNavigator();

export const AboutScreenNavigation = () => {
  const MainScrHeaderLeft = (navigation) => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIconButton}>
        <Item name="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          title: "About",
          headerLeft: () => MainScrHeaderLeft(navigation),
        })}
      />
    </Stack.Navigator>
  );
};
