import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { THEME } from "../theme";
import { BookedScreen } from "../screens/BookedScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIconButton from "../components/AppHeaderIcon";
import { PostsNavigation } from "./PostsNavigation";

const Stack = createStackNavigator();

export const BookedNavigation = () => {
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
        name="BookedScreen"
        component={BookedScreen}
        options={({ navigation }) => ({
          title: "My Blog",
          headerLeft: () => MainScrHeaderLeft(navigation),
        })}
      />
      <Stack.Screen name="Home" component={PostsNavigation} />
    </Stack.Navigator>
  );
};
