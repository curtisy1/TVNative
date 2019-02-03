import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ChannelList } from "./ChannelList";

export class Settings extends React.Component {
  render() {
    return (
      <PaperProvider>
        <ChannelList />
      </PaperProvider>
    );
  }
}