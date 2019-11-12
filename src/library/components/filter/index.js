import React from "react";
import {TouchableOpacity, Image, View} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'

export  class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            filterInputValue:''
        }
    }

    render() {
        return (
            <View style={FilterStyle.filterContainer}>
                <View style={FilterStyle.filterInputContainer}>
                    <Input
                        style={{margin:10, borderRadius:20}}
                        placeholder={this.props.placeholder ? this.props.placeholder :'Поиск'}
                        value={this.props.string ? this.props.string :this.state.filterInputValue}
                        onChangeText={(value) => {this.props.callback ? this.props.callback(value) : this.setState({ filterInputValue:value })}}
                    />
                </View>
                {this.props.bottom ?
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('filter')

                        }}

                        style={FilterStyle.filterIconContainer}>
                        <FilterIcon width={40} height={40} x={0} y={3} viewBox={"0 0 30 30"} fill={"#000"}/>

                    </TouchableOpacity>
                    :
                    false
                }
            </View>
        )

    }
}