import React from "react";
import {TouchableOpacity, Image, View, Text, Switch} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class FilterZeroSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{width:'100%', height:60, paddingTop:20, flex:1, flexDirection:'row'}}>
                <View style={{width:'80%'}}>
                    <Text style={{fontWeight:'bold', color:'#666'}}>
                        Скрыть нуливые остатки
                    </Text>
                </View>
                <View style={{width:'20%'}}>
                    <Switch
                        onValueChange = {()=>{}}
                        value = {true}/>
                </View>
            </View>
        )

    }
}