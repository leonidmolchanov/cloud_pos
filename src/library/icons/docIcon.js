import React from "react";
import {Svg} from 'expo';

export class DocIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M19,23H6c-0.553,0-1,0.447-1,1s0.447,1,1,1h13
			c0.553,0,1-0.447,1-1S19.553,23,19,23z M5,14c0,0.552,0.447,1,1,1h13c0.553,0,1-0.448,1-1s-0.447-1-1-1H6C5.447,13,5,13.448,5,14z
			 M19,18H6c-0.553,0-1,0.447-1,1s0.447,1,1,1h13c0.553,0,1-0.447,1-1S19.553,18,19,18z M18,0H2C0.896,0,0,0.896,0,2v27
			c0,1.104,0.896,2,2,2h21c1.104,0,2-0.896,2-2V7L18,0z M18,3l4,4h-4V3z M23,29H2V2h14v5c0,1.104,0.896,2,2,2h5V29z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}