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
      neutral100: "white",
      neutral400: "gainsboro",
      primary100: "#eee8ff",
      neutral500: "lightgray",
      primary400: "#7e62c9",
      primary500: "#644e9f",
      errorLight: "#ffeaea",
      errorDark: "#fc4b4b",
    },
    space: {
      "0-5": "4px",
      1: "8px",
      "1-5": "12px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      7: "56px",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    /* Margins */
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    /* Paddings */
    p: (value: string | number) => ({
      padding: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
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
