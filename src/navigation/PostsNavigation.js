import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIconButton from "../components/AppHeaderIcon";

const Stack = createStackNavigator();

export const PostsNavigation = () => {
  const MainScrHeaderRight = () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIconButton}>
      <Item name="Take a photo" iconName="camera" />
    </HeaderButtons>
  );

  const MainScrHeaderLeft = (navigation) => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIconButton}>
        <Item name="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    );
  };

  const PostRight = (booked) => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIconButton}>
        <Item
          name="Toggle drawer"
          iconName={booked ? "ios-star" : "ios-star-outline"}
          onPress={() => console.log("press photo")}
        />
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
        name="Home"
        component={MainScreen}
        options={({ navigation }) => ({
          title: "My Blog",
          headerRight: MainScrHeaderRight,
          headerLeft: () => MainScrHeaderLeft(navigation),
        })}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Post ${route.params.postId} от ${new Date(route.params.date).toLocaleDateString()}`,
          headerRight: () => PostRight(route.params.booked),
        })}
      />
    </Stack.Navigator>
  );
};
