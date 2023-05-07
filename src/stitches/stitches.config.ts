import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
    space: {
      "0-5": "4px",
      1: "8px",
      "1-5": "12px",
      2: "16px",
      3: "24px",
      4: "32px",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    m: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

/**
 * Reset CSS file
 */
export const reset = {
  "*": {
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
  },
  "html, body, #root": {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    height: "100%",
  },
};
