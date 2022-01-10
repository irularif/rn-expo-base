module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["import-glob"],
      [
        "module-resolver",
        {
          alias: {
            app: "./app/",
            pkgs: "./pkgs/",
            libs: "./pkgs/libs/",
            assets: "./assets/",
            root: "./",
          },
        },
      ],
    ],
  };
};
