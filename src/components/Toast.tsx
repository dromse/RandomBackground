import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../libs/colors";

type ToastProps = {
  msg: string;
  visiblity: boolean;
};

export const Toast: React.FC<ToastProps> = ({ msg, visiblity }: ToastProps) => {
  return (
    <View style={[{ ...styles.toast, display: visiblity ? "flex" : "none" }]}>
      <Text
        style={{
          color: "#cdd6f4",
          fontSize: 20,
        }}
      >
        {msg}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    backgroundColor: colors.base,
    padding: 10,
    paddingHorizontal: 20,
    position: "absolute",
    zIndex: 99,
    top: 50,
    borderRadius: 5,
  },
});
