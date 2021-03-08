import React from "react";

import { PostsNavigation } from "./PostsNavigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { BookedNavigation } from "./BookedNavigation";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";
import { Platform } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export const BottomAppNavigation = () => {
  const PostIonicon = (color) => <Ionicons name="ios-albums" size={25} color={color} />;
  const BookedIonicon = (color) => <Ionicons name="ios-star" size={25} color={color} />;

  return (
    <Tab.Navigator
      initialRouteName="BottomNavigation"
      tabBarOptions={{
        activeTintColor: Platform === "android" ? "white" : THEME.MAIN_COLOR,
      }}
      barStyle={{ backgroundColor: Platform === "android" ? "white" : THEME.MAIN_COLOR }}
      shifting={true}
    >
      <Tab.Screen
        name="PostsNavigation"
        component={PostsNavigation}
        options={{
          tabBarIcon: (info) => PostIonicon(info.color),
          tabBarLabel: "all",
        }}
      />
      <Tab.Screen
        name="BookedNavigation"
        component={BookedNavigation}
        options={{
          tabBarIcon: (info) => BookedIonicon(info.color),
          tabBarLabel: "favorites",
        }}
      />
    </Tab.Navigator>
  );
};
