import React, { Component } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

export class ChannelList extends Component {
    state = {
        expanded: false
    };

    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
        });

    render() {
        return (
            <View>
                <List.Accordion
                    title="Das Erste"
                    left={props => <List.Icon {...props} icon="folder" />}
                >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion
                    title="ZDF"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={this.state.expanded}
                    onPress={this._handlePress}
                >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </View>
        );
    }
}