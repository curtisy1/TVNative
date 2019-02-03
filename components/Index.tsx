import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Header } from "./Header";
import { ChannelList } from "./ChannelList";
import SideMenu from 'react-native-ezsidemenu';

interface MainViewProps {

}

interface MainViewState {
  sideMenuOpen: boolean;
}

export default class App extends Component<MainViewProps, MainViewState> {
  constructor(props: MainViewProps){
    super(props);
    this.state = {
      sideMenuOpen: false
    }

    this.onMenuPress = this.onMenuPress.bind(this);
  }

  onMenuPress = () => this.setState({sideMenuOpen: !this.state.sideMenuOpen});

  render() {
    const menu = <View><Text>ABC</Text></View>;

    return (
      <PaperProvider>
        <SideMenu menu={menu} type={SideMenu.type.Overlay}>
          <View>
            <Header onMenuPress={this.onMenuPress}/>
            <ChannelList />
          </View>
        </SideMenu>
      </PaperProvider>
    );
  }
}
