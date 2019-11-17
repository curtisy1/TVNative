import React from "react";
import { Navigation } from "react-native-navigation";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  GestureResponderEvent
} from "react-native";

interface CustomEvent {
  event: GestureResponderEvent;
  path: string;
}

export default class Sidemenu extends React.Component {
  navigateToScreen = (evt: CustomEvent) => {
    Navigation.push((this.props as any).componentId, {
      component: {
        name: `TvNative.${evt.path}`
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={evt =>
                  this.navigateToScreen({ event: evt, path: "Settings" })
                }
              >
                Settings
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={evt =>
                  this.navigateToScreen({ event: evt, path: "About" })
                }
              >
                About
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: "lightgrey"
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: "lightgrey"
  }
});
