import React from "react";
import {Svg} from 'expo';

export class BackIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M94,34H46V14a4,4,0,0,0-6.83-2.83l-36,36a4,4,0,0,0,0,5.66l36,36A4,4,0,0,0,46,86V66H94a4,
                    4,0,0,0,4-4V38A4,4,0,0,0,94,34ZM90,58H42a4,4,0,0,0-4,4V76.34L11.66,50,38,23.66V38a4,4,0,0,0,4,4H90Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}