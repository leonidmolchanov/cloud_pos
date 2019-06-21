import React from "react";
import {Svg} from 'expo';

export class ChatIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M50,2A48,48,0,1,0,98,50,48.05,48.05,0,0,0,50,2ZM30,84.59V82a20,20,0,0,1,40,0v2.59a39.67,39.67,0,0,1-40,0ZM38,
                    42A12,12,0,1,1,50,54,12,12,0,0,1,38,42ZM77.79,78.71a28,28,0,0,0-14.9-21.54,20,20,0,1,0-25.78,0,28,28,0,0,0-14.9,
                    21.54,40,40,0,1,1,55.58,0Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}