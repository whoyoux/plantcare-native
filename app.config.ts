import { ConfigContext, ExpoConfig } from "expo/config";

const EAS_PROJECT_ID = "464b6483-392e-442c-8e66-06c0c0153c01"
const PROJECT_SLUG = "plantcare"
const OWNER = "whoyoux"

// Production config
const APP_NAME = "Plantcare"
const BUNDLE_IDENTIFIER = "com.whoyoux.plantcare";
const PACKAGE_NAME = "com.whoyoux.plantcare";
const ICON = "./assets/images/icon.png";
const ADAPTIVE_ICON = "./assets/images/icons/Android-Prod.png";
const SCHEME = "plantcare";

// https://github.com/betomoedano/with-environments/blob/main/app.config.ts
export default ({ config }: ConfigContext): ExpoConfig => {
  console.log("⚙️ Building app for environment:", process.env.APP_ENV);
  const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
    getDynamicAppConfig(
      (process.env.APP_ENV as "development" | "preview" | "production") ||
      "development"
    );


  return {
    ...config,
    name,
    slug: PROJECT_SLUG,
    // TODO: FIX
    version: "1.0.0",
    orientation: "portrait",
    icon,
    scheme,
    userInterfaceStyle: "dark",
    ios: {
      // Todo
      icon,
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      //Todo
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: packageName,
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#0F0F0F",
          android: {
            image: "./assets/images/splash-icon.png",
            imageWidth: 76,
          },
        },
      ],
      [
        "expo-font",
        {
          fonts: [
            "./assets/fonts/inter/Inter-Regular.ttf",
            "./assets/fonts/inter/Inter-Italic.ttf",
            "./assets/fonts/inter/Inter-Medium.ttf",
            "./assets/fonts/inter/Inter-SemiBold.ttf",
            "./assets/fonts/inter/Inter-Bold.ttf",
          ],
        },
      ],
      "@rnrepo/expo-config-plugin",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    updates: {
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    extra: {
      router: {},
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    owner: OWNER,
  };
};

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
  environment: "development" | "preview" | "production"
) => {
  if (environment === "production") {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: SCHEME,
    };
  }

  if (environment === "preview") {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: "./assets/images/icons/iOS-Prev.png",
      adaptiveIcon: "./assets/images/icons/Android-Prev.png",
      scheme: `${SCHEME}-prev`,
    };
  }

  return {
    name: `${APP_NAME} Development`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: "./assets/images/icons/iOS-Dev.png",
    adaptiveIcon: "./assets/images/icons/Android-Dev.png",
    scheme: `${SCHEME}-dev`,
  };
};