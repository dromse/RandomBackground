import { namedColors } from "../libs/colors";
import { ColorType } from "../libs/types";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * (max + 1));
};

export const getRandomColor = (type: ColorType) => {
  if (type === "hex") {
    let hex = "#";

    for (let i = 0; i < 3; i++) {
      hex = hex.concat(getRandomInt(255).toString(16));
    }

    return hex;
  } else if (type === "simple") {
    const randomIndex = Math.floor(Math.random() * namedColors.length);

    return namedColors[randomIndex];
  }
};
