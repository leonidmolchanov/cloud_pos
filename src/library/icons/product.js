import React from "react";
import {Svg} from 'expo';

export class CircleIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width}>
                <Svg.Circle

                    cx={10}
                    cy={10}
                    r={6}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}