import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator, createAppContainer, SafeAreaView, DrawerItemsProps } from 'react-navigation';
import { Header } from "./Header";
import { Settings } from "./Settings";
import { ChannelList } from "./ChannelList";
import { Sidemenu } from "./Sidemenu";
import TvDB from "../database/DbConnector";

interface MainViewProps {

}

interface MainViewState {
  sideMenuOpen: boolean;
}

class MainView extends React.Component<MainViewProps, MainViewState> {
  constructor(props: MainViewProps) {
    super(props);
    this.state = {
      sideMenuOpen: false
    }

    this.onMenuPress = this.onMenuPress.bind(this);
  }

  componentDidMount(){
    TvDB.onLoaded(() => console.log("Database initialized"));
  }

  onMenuPress = () => this.setState({ sideMenuOpen: !this.state.sideMenuOpen });

  render() {
    return (
      <PaperProvider>
        <View>
          <Header onMenuPress={this.onMenuPress} />
          <ChannelList />
        </View>
      </PaperProvider>
    );
  }
}

const CustomDrawerContentComponent = (props: DrawerItemsProps) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Sidemenu {...props} />
    </SafeAreaView>
  </ScrollView>
);

const SidebarDrawer = createDrawerNavigator({
  Home: {
    screen: MainView,
  },
  Settings: {
    screen: Settings,
  },
  About: {
    screen: MainView,
  }
}, {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {

    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = createAppContainer(SidebarDrawer);
export default App;