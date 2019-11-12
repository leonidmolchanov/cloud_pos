import React from "react";
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native'
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'
import {BasketContentStyle} from "../../../styles";
export  class BasketContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <View style={BasketContentStyle.container}>
                <View style={BasketContentStyle.leftContainer}><Text style={BasketContentStyle.leftLabelText}>В корзине</Text></View>
                <View style={BasketContentStyle.rightContainer}><Text style={BasketContentStyle.rightLabelText}>3 гр. / 1 шт. / 1.250.000 сум</Text></View>
            </View>
        )

    }
}


