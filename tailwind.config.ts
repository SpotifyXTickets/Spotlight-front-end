import type { Config } from "tailwindcss";

// Define scaling factors for font sizes
const multiplier = {
  none: 1,
  md: 0.9,
  lg: 0.8,
  xl: 0.7,
  xxl: 0.6,
};

// Define font sizes, line heights and multipliers per custom font size.
const fontSizesList = [
  {
    name: "default",
    fontSize: 19,
    lineHeight: 22,
    multiplier: multiplier.md,
  },
  {
    name: "h1",
    fontSize: 50,
    lineHeight: 48,
    multiplier: multiplier.xxl,
  },
  {
    name: "h2",
    fontSize: 40,
    lineHeight: 44,
    multiplier: multiplier.xxl,
  },
  {
    name: "h3",
    fontSize: 30,
    lineHeight: 40,
    multiplier: multiplier.lg,
  },
  {
    name: "h4",
    fontSize: 24,
    lineHeight: 32,
    multiplier: multiplier.lg,
  },
  {
    name: "h5",
    fontSize: 22,
    lineHeight: 31,
    multiplier: multiplier.lg,
  },
];

type FontSize = {
  name: string;
  fontSize: number;
  lineHeight: number;
  multiplier?: number;
  fontSizeMob?: number;
  lineHeightMob?: number;
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    // Define custom breakpoints.
    screens: {
      xl: "1177px",
      lg: { max: "1176px" },
      md: { max: "900px" },
      sm: { max: "768px" },
      mob: { max: "600px" },
      xs: { max: "500px" },
      xxs: { max: "360px" },
    },

    extend: {
      // Define custom margins.
      margin: {
        xs: "6px",
        sm: "12px",
        mob: "18px",
        def: "24px",
        md: "36px",
        lg: "48px",
        xl: "60px",
        "2xl": "72px",
        "3xl": "96px",
        "1-col": "calc(100% / 12)",
        "2-col": "calc(100% / 12 * 2)",
      },
      // Define custom paddings.
      padding: {
        xs: "6px",
        sm: "12px",
        mob: "18px",
        def: "24px",
        md: "36px",
        lg: "48px",
        xl: "60px",
        "2xl": "72px",
        "3xl": "96px",
        "1-col": "calc(100% / 12)",
        "2-col": "calc(100% / 12 * 2)",
      },
      // Define custom inset.
      inset: {
        xs: "6px",
        sm: "12px",
        mob: "18px",
        def: "24px",
        md: "36px",
        lg: "48px",
        xl: "60px",
        "2xl": "72px",
        "3xl": "96px",
        "1-col": "calc(100% / 12)",
        "2-col": "calc(100% / 12 * 2)",
      },
      // Define custom z-index
      zIndex: {
        "-1": "-1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "99": "99",
        "999": "999",
      },
      // Define custom gap.
      gap: {
        xs: "6px",
        sm: "12px",
        mob: "18px",
        def: "24px",
        md: "36px",
        lg: "48px",
        xl: "60px",
      },
      // Define custom height
      height: {
        xs: "6px",
        sm: "12px",
        mob: "18px",
        def: "24px",
        md: "36px",
        lg: "48px",
        xl: "60px",
        "2xl": "72px",
        "3xl": "96px",
      },
      // Define custom width
      width: {
        xs: "6px",
        sm: "12px",
        mob: "18px",
        def: "24px",
        md: "36px",
        lg: "48px",
        xl: "60px",
        "2xl": "72px",
        "3xl": "96px",
      },
      // Define custom font sizes using the results of loadFontSizes()
      fontSize: loadFontSizes(fontSizesList),
    },
  },
  plugins: [],
};

// Take the fontList and return an object with the font sizes and line heights calculated using the fontClamp() function
function loadFontSizes(fontList: FontSize[]) {
  var response: { [key: string]: any } = {};
  fontList.forEach((element: FontSize) => {
    response[element.name] = fontClamp(
      element.fontSize,
      element.lineHeight,
      element.multiplier,
      element.fontSizeMob,
      element.lineHeightMob
    );
  });

  return response;
}

// The fontClamp function uses the necessary values in order to return an array containing a string and an object.
// The string is a CSS clamp function that sets the font size based on the current viewport width and the provided font size values.
// The object contains a lineHeight property that sets the line height based on the current viewport width and the provided line height values.
function fontClamp(
  fontsize: number,
  lineheight: number,
  multiplier = 0,
  fontsizeMob = 0,
  lineheightMob = 0
) {
  var useMultiplier = multiplier != 0 ? multiplier : 1;
  var useFontSize = fontsize;
  var useFontSizeMob =
    fontsizeMob > 0 ? fontsizeMob : useFontSize * useMultiplier;
  var useLineHeight = lineheight;
  var useLineHeightMob =
    lineheightMob > 0 ? lineheightMob : useLineHeight * useMultiplier;

  return [
    `clamp(${useFontSizeMob}px, calc(${useFontSizeMob}px + ((${fontsize} - ${useFontSizeMob}) * ((100vw - 360px) / (1230 - 360)))), ${useFontSize}px)`,
    {
      lineHeight: `clamp(${useLineHeightMob}px, calc(${useLineHeightMob}px + ((${lineheight} - ${useLineHeightMob}) * ((100vw - 360px) / (1230 - 360)))), ${useLineHeight}px)`,
    },
  ];
}

export default config;
