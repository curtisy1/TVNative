import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export class Header extends Component {
    _onMore = () => console.log('Shown more');

    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content
                        title="TVNative"
                        subtitle="Overview"
                        titleStyle={styles.appHeader}
                        subtitleStyle={styles.appHeader}
                    />
                    <Appbar.Action icon="menu" onPress={this._onMore} />
                </Appbar.Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appHeader: {
        alignSelf: "center",
        paddingLeft: 30
    }
})
