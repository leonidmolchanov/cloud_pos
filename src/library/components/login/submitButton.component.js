import React from "react";
import {Text, View, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import {Svg} from 'expo';
import {loginHeaderStyle} from "../../../styles/components/loginHeader";
import {LoginSubmitButton} from "../../../styles";

export  class LoginSubmit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={LoginSubmitButton.container}
                onPress={() => {
                    this.props.callback(this.props.address, this.props.phone, this.props.password)
                }}
            >
                <Text style={LoginSubmitButton.labelText}>Войти</Text>

            </TouchableOpacity>
        )

    }
}