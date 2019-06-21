import React from "react";
import {Svg} from 'expo';

export class PrinterIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M86,26H78V6a4,4,0,0,0-4-4H26a4,4,0,0,0-4,4V26H14A12,12,0,0,0,2,38V70A12,12,0,0,0,14,82h8V94a4,4,0,0,0,4,4H74a4,4,0,0,0,4-4V82h8A12,12,0,0,0,98,70V38A12,12,0,0,0,86,26ZM30,10H70V26H30ZM70,
                    90H30V66H70ZM90,70a4,4,0,0,1-4,4H78V62a4,4,0,0,0-4-4H26a4,4,0,0,0-4,4V74H14a4,4,0,0,1-4-4V38a4,4,0,0,1,4-4H86a4,4,0,0,1,4,4Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
                <Svg.Circle

                    cx={22}
                    cy={46}
                    r={4}
                />

            </Svg>
        )

    }
}