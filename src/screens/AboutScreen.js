import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.font}>Note taking app.</Text>
      <Text>Version: 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font: { fontFamily: "open-bold" },
});
