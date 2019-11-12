import React from "react";
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterSelectStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';



export  class FilterSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:this.props.value
        }
    }

    render() {
        let list=[];
if(this.props.list){
    let list=this.props.list;

}

        return (
            <View style={FilterSelectStyle.container}>
                <View style={FilterSelectStyle.headContainer}>
                    <Text style={FilterSelectStyle.headLabelText}>{this.props.title}</Text>
                </View>
                <View style={FilterSelectStyle.bodyContainer}>
                    <RNPickerSelect
                        placeholder={{label:this.props.placeholderText}}
                        items={this.props.list ? this.props.list : []}
                        onValueChange={value => {
                            this.props.setFilter(this.props.type,value)
                            this.setState({
                                value: value,
                            });
                        }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                        value={this.state.value}
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
const placeholder = {
    label: 'Select a sport...',
    value: null,
    color: '#9EA0A4',
};