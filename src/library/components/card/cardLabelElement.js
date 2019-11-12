import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {ArticlesElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'

export  class CardLabelElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{width:'100%', backgroundColor:'#fff', flexDirection:'row', paddingTop:5, paddingBottom:5}}>
                <Text style={{fontWeight:'bold', paddingLeft:10, paddingRight:10}}>
                    {this.props.title}: {' '}
                    <Text style={{fontWeight:'normal'}}>{this.props.body}</Text></Text>

            </View>
        )

    }
}