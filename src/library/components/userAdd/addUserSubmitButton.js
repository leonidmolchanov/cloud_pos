import React from "react";
import {TouchableOpacity, Image, View, Text, Switch} from 'react-native'
import {FilterIcon} from "../../icons";
import {FilterStyle, AddUserSubmitButton} from "../../../styles";
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'

export  class UserAddSubmitButtonPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{width:'100%', height:60,paddingBottom:200, paddingTop:20,alignItems:'center'}}>

                <TouchableOpacity
                    style={AddUserSubmitButton.container}
                    onPress={() => {
this.props.addUser(this.props.address, this.props.token, this.props.login, this.props.phone)
                    }}
                >
                    <Text style={AddUserSubmitButton.labelText}>Создать</Text>

                </TouchableOpacity>
            </View>

        )

    }
}