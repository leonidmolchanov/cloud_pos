import React from "react";
import {Svg} from 'expo';

export class TextIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M7,12H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h6c0.553,0,1-0.447,1-1S7.553,12,7,12z M13,8H1C0.447,8,0,8.447,0,9
		s0.447,1,1,1h12c0.553,0,1-0.447,1-1S13.553,8,13,8z M13,4H1C0.447,4,0,4.448,0,5s0.447,1,1,1h12c0.553,0,1-0.448,1-1
		S13.553,4,13,4z M1,2h12c0.553,0,1-0.448,1-1s-0.447-1-1-1H1C0.447,0,0,0.448,0,1S0.447,2,1,2z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}