import React from "react";
import {TouchableOpacity, Image, View} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class FilterTopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flterType:0
        }
    }

    render() {
        return (
            <Switcher style={{paddingTop:10}}
                // onChange={valueOne => this.setState({ valueOne })}
                defaultSelected={this.state.flterType}
            >
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='По категориям' text='По категориям' />
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='По товарам' text='По товарам' />
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='По комплектам' text='По комплектам' />

            </Switcher>
        )

    }
}