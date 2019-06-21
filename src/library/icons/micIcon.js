import React from "react";
import {Svg} from 'expo';

export class MicIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M15,8h-1h-2V4c0-2.209-1.791-4-4-4S4,1.791,4,4v4H2H1H0v1
	c0,4.078,3.055,7.438,7,7.931V19H4c-0.553,0-1,0.447-1,1s0.447,1,1,1h8c0.553,0,1-0.447,1-1s-0.447-1-1-1H9v-2.069
	c3.945-0.493,7-3.853,7-7.931V8H15z M6,4c0-1.104,0.896-2,2-2s2,0.896,2,2v5c0,1.104-0.896,2-2,2s-2-0.896-2-2V4z M8,15
	c-2.972,0-5.433-2.164-5.91-5h2.052C4.588,11.722,6.139,13,8,13s3.412-1.278,3.858-3h2.052C13.433,12.836,10.972,15,8,15z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}