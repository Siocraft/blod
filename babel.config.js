module.exports = function (api) {
  api.cache(true);
  return {
    presets: [ "babel-preset-expo" ],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [ ".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json" ],
          alias: {
            "@components": "./src/Components",
            "@screens": "./src/Screens",
            "@theme": "./src/Theme",
            "@hooks": "./src/Hooks",
            "@config": "./src/Config",
            "@services": "./src/Services",
            "@constants": "./src/Constants",
            "@context": "./src/Context",
            "@utils": "./src/Utils",
            "@assets": "./src/Assets",
            "@wrappers": "./src/Wrappers",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
