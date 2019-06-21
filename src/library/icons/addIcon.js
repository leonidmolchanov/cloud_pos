import React from "react";
import {Svg} from 'expo';

export class AddIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M37.5,18H21V1.5C21,0.672,20.328,0,19.5,0
			C18.671,0,18,0.672,18,1.5V18H1.5C0.671,18,0,18.672,0,19.5S0.671,21,1.5,21H18v16.5c0,0.828,0.671,1.5,1.5,1.5
			c0.828,0,1.5-0.672,1.5-1.5V21h16.5c0.828,0,1.5-0.672,1.5-1.5S38.328,18,37.5,18z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}