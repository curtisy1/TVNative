import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

interface HeaderProps {
  onMenuPress: (isOpen: boolean) => void;
}

interface HeaderState {
  isOpen: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.onMore = this.onMore.bind(this);
  }

  onMore = () =>
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.props.onMenuPress(this.state.isOpen);
    });

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={this.onMore} />
          <Appbar.Content
            title="TVNative"
            subtitle="Overview"
            titleStyle={styles.appHeader}
            subtitleStyle={styles.appHeader}
          />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    alignSelf: "center",
    paddingRight: 60
  }
});
