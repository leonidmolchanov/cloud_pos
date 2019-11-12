import React from "react";
import {TouchableOpacity, Image, View, Text, Switch} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle, FilterSubmitButton} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class FilterSubmitButtonPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{width:'100%', height:60, paddingTop:20,alignItems:'center'}}>

                <TouchableOpacity
                    style={FilterSubmitButton.container}
                    onPress={() => {
this.props.changeFilter()
                    }}
                >
                    <Text style={FilterSubmitButton.labelText}>Применить</Text>

                </TouchableOpacity>
            </View>

        )

    }
}