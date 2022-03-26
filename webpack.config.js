const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: "main.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Noto Sans Thai", variants: ["400", "sans-serif"] },
      ],
    }),
  ],
};
