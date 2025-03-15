import { extendTheme } from "@chakra-ui/react";
import { colors as lightColors } from "./lightColors";

const generateTheme = () => {
  const selectedColors = lightColors;

  return extendTheme({
    colors: selectedColors,
    fonts: { body: "SF UI Text, system-ui, sans-serif" },
    textStyles: {},
    components: {
      Heading: {},
      Text: {},
      Headlight: {},
      Input: {
        defaultProps: {
          colorScheme: "primary",
          focusBorderColor: "primary.200",
        },
      },
      InputGroup: {},
      Card: {},
      Checkbox: { defaultProps: { colorScheme: "neutral" } },
      Tabs: { defaultProps: { colorScheme: "primary" } },
      Radio: { defaultProps: { colorScheme: "neutral" } },
      Switch: { defaultProps: { colorScheme: "neutral" } },
    },
  });
};

export default generateTheme;
