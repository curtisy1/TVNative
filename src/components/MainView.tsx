import React from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./Header";
import ChannelList from "./ChannelList";
// import TvDB from "../database/DbConnector";

interface MainViewProps {}

interface MainViewState {
  sideMenuOpen: boolean;
}

export default class MainView extends React.Component<MainViewProps, MainViewState> {
  constructor(props: MainViewProps) {
    super(props);
    this.state = {
      sideMenuOpen: false
    };

    this.onMenuPress = this.onMenuPress.bind(this);
  }

  componentDidMount() {
    // TvDB.onLoaded(() => console.log("Database initialized"));
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
