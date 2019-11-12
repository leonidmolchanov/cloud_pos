import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterDblInputStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class FilterDblInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flterType:''
        }
    }

    render() {
        return (
            <View style={FilterDblInputStyle.container}>
                <View style={FilterDblInputStyle.headContainer}>
                    <Text style={FilterDblInputStyle.headLabelText}>{this.props.title}</Text>
                </View>
                <View style={FilterDblInputStyle.bodyContainer}>
                    <View style={FilterDblInputStyle.bodyLeftContainer}>
                        <Input inputStyle={FilterDblInputStyle.bodyLeftContainerInputStyle}
                               placeholder={this.props.placeholderLeft}
                               value={this.props.min ? this.props.min : ''}
                               onChangeText={(text) => this.props.setFilter(this.props.typeMin, text)}
                        />
                    </View>
                    <View style={FilterDblInputStyle.bodyRightContainer}>
                        <Input
                            value={this.props.max ? this.props.max : ''}
                            placeholder={this.props.placeholderRight}
                            onChangeText={(text) => this.props.setFilter(this.props.typeMax, text)}
                        />
                    </View>
                </View>

            </View>
        )

    }
}