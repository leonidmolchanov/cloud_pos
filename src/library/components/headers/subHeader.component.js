import React from "react";
import {Text, View} from 'react-native';
import {SubHeaderStyle} from "../../../styles";

export default class SubHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View

                style={SubHeaderStyle.container,{marginTop: this.props.margintop,        height: this.props.height,}]}>
                {
                    this.props.string
                        ?
                        <Text style={{alignSelf: 'center'}}>

                            {this.props.string}
                        </Text>
                        :
                        false
                }
                {
                    this.props.substring
                        ?
                        <Text style={{alignSelf: 'center'}}>

                            {this.props.substring}
                        </Text>
                        :
                        false
                }
            </View>
        )

    }
}
