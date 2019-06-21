import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle} from "../../../styles";
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
            <View style={{width:'100%', height:80}}>
                <View style={{width:'100%', height:'40%'}}>
                    <Text style={{fontWeight:'bold', color:'#666'}}>{this.props.title}</Text>
                </View>
                <View style={{width:'100%',flex:1, height:'60%', flexDirection:'row'}}>
                    <View style={{width:'50%', height:'100%', paddingRight:20}}>
                        <Input inputStyle={{color:'#666'}}
                               placeholder={this.props.placeholderLeft}
                        />
                    </View>
                    <View style={{width:'50%', height:'100%'}}>
                        <Input
                            placeholder={this.props.placeholderRight}
                        />
                    </View>
                </View>

            </View>
        )

    }
}