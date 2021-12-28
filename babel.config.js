module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*': './',
          '@assets': './assets',
          '@constants': './constants',
          '@features': './features',
          '@helpers': './helpers',
          '@hooks': './hooks',
          '@type': './types',
        },
      },
    ],
  ],
};
