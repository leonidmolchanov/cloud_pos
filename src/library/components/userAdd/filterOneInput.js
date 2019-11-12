import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {UserAddOneInputStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class UserAddOneInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flterType:''
        }
    }

    render() {
        return (
            <View style={UserAddOneInputStyle.container}>
                <View style={UserAddOneInputStyle.headContainer}>
                    <Text style={UserAddOneInputStyle.headLabelText}>{this.props.title}</Text>
                </View>
                <View style={UserAddOneInputStyle.bodyContainer}>
                    <View style={UserAddOneInputStyle.bodyLeftContainer}>
                        <Input inputStyle={UserAddOneInputStyle.bodyLeftContainerInputStyle}
                               placeholder={this.props.placeholder}
                               value={this.props.value ? this.props.value : ''}
                               onChangeText={(text) => this.props.setInput(text)}
                        />
                    </View>
                </View>

            </View>
        )

    }
}