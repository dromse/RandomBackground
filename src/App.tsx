import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { ColorTextContainer } from "./components/ColorTextContainer";
import { ColorTypeMenu } from "./components/ColorTypeMenu";
import { MyButton } from "./components/MyButton";
import { Toast } from "./components/Toast";
import { colors } from "./libs/colors";
import { ColorType } from "./libs/types";
import { getRandomColor } from "./utils/utils";

export default function App() {
  const [background, setBackground] = useState<string>("white");
  const [colorType, setColorType] = useState<ColorType>(ColorType.simple);
  const [toastMsg, setToastMsg] = useState<string>("");
  const [toastVisiblity, setToastVisiblity] = useState<boolean>(false);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(background);

    showToast("color saved to clipboard!", 2000);
  };

  const showToast = (msg: string, duration: number) => {
    setToastMsg(msg);
    setToastVisiblity(true);

    setTimeout(() => {
      setToastVisiblity(false);
    }, duration);
  };

  const handleChangeBackground = () => {
    const colorStr = getRandomColor(colorType);

    if (colorStr) {
      setBackground(colorStr);
    }
  };

  return (
    <View style={{ ...styles.container, backgroundColor: background }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.base} />

      <ColorTypeMenu colorType={colorType} setColorType={setColorType} />

      <ColorTextContainer colorStr={background} />

      <View style={{ flexDirection: "row", gap: 20 }}>
        <MyButton onPress={copyToClipboard} title="Save to Clipboard" />
        <MyButton onPress={handleChangeBackground} title="Generate" />
      </View>

      <Toast msg={toastMsg} visiblity={toastVisiblity} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
});
