import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostScreen = ({ navigation, route }) => {
  let postId = route.params.postId;

  return (
    <View styles={styles.center}>
      <Text>{postId}</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  title: "My",
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
