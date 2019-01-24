import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Header } from "./Header";
import { ChannelList } from "./ChannelList";
import SideMenu from 'react-native-side-menu';

export default class App extends Component {
  render() {
    const menu = <View><Text>ABC</Text></View>;

    return (
      <PaperProvider>
        <SideMenu menu={menu}>
          <View>
            <Header />
            <ChannelList />
          </View>
        </SideMenu>
      </PaperProvider>
    );
  }
}
