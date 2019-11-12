import React from "react";
import {Text, View, TextInput} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import {Svg} from 'expo';
import {loginHeaderStyle} from "../../../styles/components/loginHeader";
import {LoginUserInput} from "../../../styles";

export  class LoginInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.error ? LoginUserInput.containerError : LoginUserInput.containerValid}>
                <View style={LoginUserInput.containerInputGroup}>
                    <View style={LoginUserInput.containerInputGroupInput}>
                        <TextInput style={LoginUserInput.textInput}
                                   placeholdeText
                                   value = {this.props.value}
                                   placeholder={this.props.placeholder}
                                   placeholderTextColor={'rgb(82, 82, 82)'}
                                   secureTextEntry={this.props.secureTextEntry}
                            // onFocus={ () => this._setFocus() }
                            // onBlur={ () => this._unsetFocus() }
                                   onChangeText={(text) => this.props.change(text)}
                        >
                        </TextInput>
                    </View>
                </View>
            </View>
        )

    }
}