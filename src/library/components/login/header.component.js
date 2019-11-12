import React from "react";
import {Text, View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import {Svg} from 'expo';
import {loginHeaderStyle} from "../../../styles/components/loginHeader";

export  class LoginHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={loginHeaderStyle.container}>

                <View style={loginHeaderStyle.iconContainer}>
                    <Svg height={5*EStyleSheet.value('$remJsx')} width={5*EStyleSheet.value('$remJsx')}>
                        <Svg.Circle

                            cx={2*EStyleSheet.value('$remJsx')}
                            cy={2*EStyleSheet.value('$remJsx')}
                            r={2*EStyleSheet.value('$remJsx')}
                            fill={'rgb(10,80,155)'}
                        />
                    </Svg>
                </View>
                <View style={loginHeaderStyle.textContainer}>
                    <Text style={loginHeaderStyle.textLabel}>CloudPos</Text>
                </View>
            </View>
        )

    }
}