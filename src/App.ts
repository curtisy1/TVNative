import { Navigation } from "react-native-navigation";
import MainView from "./components/MainView";
import Sidemenu from "./components/Sidemenu";
import Settings from "./components/Settings";

Navigation.registerComponent(`TvNative.MainMainView`, () => MainView);
Navigation.registerComponent(`TvNative.Sidemenu`, () => Sidemenu);
Navigation.registerComponent(`TvNative.Settings`, () => Settings);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: "TvNative.Sidemenu"
          }
        },
        center: {
          component: {
            name: "TvNative.MainView"
          }
        }
      }
    }
  });
});
