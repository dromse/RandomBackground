import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../libs/colors";
import { ColorType } from "../libs/types";
import { MyButton } from "./MyButton";

type ColorTypeMenuProps = {
  colorType: ColorType;
  setColorType: (type: ColorType) => void;
};

export const ColorTypeMenu: React.FC<ColorTypeMenuProps> = ({
  colorType,
  setColorType,
}: ColorTypeMenuProps) => {
  return (
    <View style={styles.container}>
      {Object.values(ColorType).map((type) => (
        <MyButton
          textStyle={
            colorType === type ? { color: colors.mauve } : { color: colors.text }
          }
          key={type}
          onPress={() => setColorType(type)}
          title={type}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
});
