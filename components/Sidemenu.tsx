
import React from 'react';
import { NavigationActions, DrawerItemsProps } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, GestureResponderEvent } from 'react-native';

interface CustomEvent {
  event: GestureResponderEvent;
  path: string;
}

export class Sidemenu extends React.Component<DrawerItemsProps, {}> {
  navigateToScreen = (evt: CustomEvent) => {
    const navigateAction = NavigationActions.navigate({
      routeName: evt.path
    });

    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={(evt) => this.navigateToScreen({event: evt, path: "Settings"})}>
                Settings
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={(evt) => this.navigateToScreen({event: evt, path: "About"})}>
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
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});