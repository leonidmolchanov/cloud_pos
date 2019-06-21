import React from "react";
import {Svg} from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class SmsHeader extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M22,74h4V94a4,4,0,0,0,7.07,2.56L51.87,74H78A16,16,0,0,0,94,58V18A16,16,0,0,0,78,2H22A16,16,0,0,0,6,18V58A16,16,0,0,0,22,
                    74ZM14,18a8,8,0,0,1,8-8H78a8,8,0,0,1,8,8V58a8,8,0,0,1-8,8H50a4,4,0,0,0-3.07,1.44L34,83V70a4,4,0,0,0-4-4H22a8,8,0,0,1-8-8Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
                <Svg.Circle cx="70" cy="58" r="4"/>
                <Svg.Circle cx="54" cy="58" r="4"/>
                <Svg.Circle cx="86" cy="58" r="4"/>

                <Svg.Circle cx="30" cy="40" r="32" fill={"#666666"}/>
                <Svg.Text x="10" y="52" fill="#fff" fontSize={30}>{this.props.bundle}</Svg.Text>

            </Svg>
        )

    }
}