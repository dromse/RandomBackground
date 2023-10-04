import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../libs/colors";

type ColorTextContainerProps = {
  colorStr: string;
};

export const ColorTextContainer: React.FC<ColorTextContainerProps> = ({
  colorStr,
}: ColorTextContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{colorStr}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base,
    borderRadius: 5,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 50,
    color: colors.text,
  },
});
