import React from "react";
import { CreateScreen } from "../screens/CreateScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIconButton from "../components/AppHeaderIcon";

const Stack = createStackNavigator();

export const CreateScreenNavigation = () => {
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
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => ({
          title: "Create",
          headerLeft: () => MainScrHeaderLeft(navigation),
        })}
      />
    </Stack.Navigator>
  );
};
