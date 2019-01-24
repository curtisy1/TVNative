import React, { Component } from 'react';
import { Provider as PaperProvider, BottomNavigation, Text } from 'react-native-paper';
import { Header } from "./Header";
import { ChannelList } from "./ChannelList";


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class App extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
    active: 'first',
    expanded: false
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <PaperProvider>
        <Header />
        <ChannelList />
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </PaperProvider>
    );
  }
}