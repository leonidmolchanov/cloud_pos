import React from "react";
import {Svg} from 'expo';

export class ImgIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M27,0H4C1.791,0,0,1.791,0,4v23c0,2.209,1.791,4,4,4h23c2.209,0,4-1.791,4-4V4C31,1.791,29.209,0,27,0z M29,27
		c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V12.114C4.655,10.03,7.223,10.223,9,12l7,7c3,3,6.906,1.844,8,1
		c0.857-0.662,3.441-2.74,5-3.608V27z M29,14.172c-1.691,0.508-3.497,2.159-6,3.828c-3,2-5,0-6-1l-6-6
		c-2.678-2.678-6.151-2.958-9-0.855V4c0-1.104,0.896-2,2-2h23c1.104,0,2,0.896,2,2V14.172z M21,5c-2.209,0-4,1.791-4,4s1.791,4,4,4
		s4-1.791,4-4S23.209,5,21,5z M21,11c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S22.104,11,21,11z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}