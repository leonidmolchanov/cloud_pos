import React from "react";
import {Svg} from 'expo';

export class PhotoIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M15,7c-3.866,0-7,3.134-7,7s3.134,7,7,7s7-3.134,7-7
			S18.866,7,15,7z M15,19c-2.762,0-5-2.238-5-5s2.238-5,5-5s5,2.238,5,5S17.762,19,15,19z M28,4h-5.5L22,2c0-1.104-0.896-2-2-2H10
			C8.896,0,8,0.896,8,2L7.5,4H2C0.896,4,0,4.896,0,6v18c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V6C30,4.896,29.104,4,28,4z
			 M28,24H2V6h7l1-4h10l1,4h7V24z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}