import React from "react";
import {TouchableOpacity, Image, View} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class BasketTopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flterType:0
        }
    }

    render() {
        return (
            <Switcher style={{paddingTop:0}}
                onChange={valueOne => {this.props.callback(valueOne)}}
                defaultSelected={this.state.flterType}
            >
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='Корзина' text='Корзина' />
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='Оплата' text='Оплата' />

            </Switcher>
        )

    }
}