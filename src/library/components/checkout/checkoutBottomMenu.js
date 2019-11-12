import React from "react";
import {TouchableOpacity, Image, View} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class CheckoutBottomMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <View style={{width:'90%'}}>
            <Switcher style={{paddingTop:0}}
                onChange={valueOne => this.props.callback({ valueOne })}
                defaultSelected={this.props.index}
            >
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='Наличные' text='Наличные' />
                <SegmentedControlButton textStyle={{color:'#666'}} style={{ borderColor:'#ccc'}} value='Терминал' text='Терминал' />

            </Switcher>
            </View>
        )

    }
}