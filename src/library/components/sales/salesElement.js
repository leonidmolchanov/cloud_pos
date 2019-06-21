import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {ArticlesElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'
import {SalesElementContent} from "./salesElementContent";

export  class SalesElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{width:'100%', height:40, flexDirection:'row'}}>
                    <View style={{width:'50%', alignItems:'flex-start'}}>
                        <Text>17.04.2019</Text>
                    </View>
                    <View style={{width:'50%', alignItems:'flex-end'}}>
                        <Text>10 гр. / 2 шт. / 1.500.230 сум</Text>
                    </View>
                    </View>
            <SalesElementContent />
                <SalesElementContent />

            </View>
        )

    }
}