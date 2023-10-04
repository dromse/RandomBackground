import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../libs/colors";

type ButtonProps = {
  onPress: () => void;
  title: string;
  textStyle?: {};
};

export const MyButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={[styles.btn__text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.base,
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.base,
    justifyContent: "center",
    alignItems: "center",
  },
  btn__text: {
    color: colors.text,
    fontSize: 20,
  },
});
