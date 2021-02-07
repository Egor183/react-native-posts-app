import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
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
          options={{
            title: "My Blog",
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ route }) => ({
            title: `Post ${route.params.postId} от ${new Date(route.params.date).toLocaleDateString()}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
