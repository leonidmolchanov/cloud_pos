import React from "react";
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native'
import {FilterIcon} from "../../icons";
import {BasketSelectStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
const sports = [
    {
        label: 'Football',
        value: 'football',
    },
    {
        label: 'Baseball',
        value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
    },
];
const placeholder = {
    label: 'Select a sport...',
    value: null,
    color: '#9EA0A4',
};
export  class BasketSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flterType:''
        }
    }

    render() {
        return (
            <View style={BasketSelectStyle.container}>
                <View style={BasketSelectStyle.headContainer}>
                    <Text style={BasketSelectStyle.headLabelText}>{this.props.title}</Text>
                </View>
                <View style={BasketSelectStyle.bodyContainer}>
                    <RNPickerSelect
                        placeholder={{label:this.props.placeholderText}}
                        items={sports}
                        onValueChange={value => {
                            this.setState({
                                favSport4: value,
                            });
                        }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                        value={this.state.favSport4}
                        useNativeAndroidPickerStyle={false}
                        textInputProps={{ underlineColor: 'yellow' }}
                        Icon={() => {
                            return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                        }}
                    />
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 10,
        flex: 1,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        color: '#000',
        backgroundColor:'#fff',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#666',
        borderRadius: 8,
        color: '#000',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
