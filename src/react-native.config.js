module.exports = {
    project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    dependencies: {
        "@react-native-google-signin/google-signin": {
        platforms: {
          ios: null,
        },
      },
      'react-native-fbsdk': {
        platforms: {
          ios: null,
        },
      },
    }
}