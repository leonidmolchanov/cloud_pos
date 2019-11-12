import React from "react";
import {TouchableOpacity, Image, View, Text, Switch} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterZeroSliderStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class FilterZeroSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={FilterZeroSliderStyle.container}>
                <View style={FilterZeroSliderStyle.headContainer}>
                    <Text style={FilterZeroSliderStyle.headLabelText}>
                        Скрыть нуливые остатки
                    </Text>
                </View>
                <View style={FilterZeroSliderStyle.bodyContainer}>
                    <Switch
                        onValueChange = {(value)=>{
                            this.props.setFilter('zero', value)
                        }}
                        value = {this.props.value}/>
                </View>
            </View>
        )

    }
}