import React from "react";
import {Svg} from 'expo';

export class EmailIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M18.1,98h64c6.6,0,12-5.4,12-12V38c0-1.2-0.6-2.4-1.6-3.2l-40-32c-1.4-1.2-3.6-1.2-5,0l-40,32c-1,0.8-1.6,2-1.6,3.2v48  C6.1,92.6,11.5,98,18.1,98z M35.3,63.2L14.1,84.4v-38L35.3,63.2z M86.1,84.4L64.9,63.2l21.2-16.8V84.4z M58.7,68.2L80.4,90H19.6  l21.8-21.8l6,4.8c0.8,0.6,1.6,0.8,2.6,0.8s1.8-0.2,2.6-0.8L58.7,
                    68.2z M50.1,11.2L83.7,38L50.1,64.8L16.5,38L50.1,11.2z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}