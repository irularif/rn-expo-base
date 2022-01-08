// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  const {
    resolver: { sourceExts, assetExts },
  } = config;

  config.transformer.minifierConfig.compress.drop_console = true;
  config.transformer.getTransformOptions = async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  });
  config.transformer.babelTransformerPath = require.resolve(
    "react-native-svg-transformer"
  );

  return {
    ...config,
    resolver: {
      ...config.resolver,
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
