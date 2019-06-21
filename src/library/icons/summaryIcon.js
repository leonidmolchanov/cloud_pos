import React from "react";
import {Svg} from 'expo';

export class SummaryIcon extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M8.53,49.1,14,44.62V82A12,12,0,0,0,26,94H74A12,12,0,0,0,86,82V44.62l5.47,4.48a4,4,0,0,0,5.06-6.2l-44-36a4,
                            4,0,0,0-5.06,0l-44,36a4,4,0,1,0,5.06,6.2ZM50,15.17,78,38.08V82a4,4,0,0,1-4,4H26a4,4,0,0,1-4-4V38.08Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
                <Svg.Path
                    d="M42,58h9.53L46.42,68.21a4,4,0,0,0,1.79,5.37A4.12,4.12,0,0,0,50,74a4,4,0,0,0,3.58-2.21l8-16A4,4,0,0,0,
                            58,50H48.47l5.11-10.21a4,4,0,1,0-7.16-3.58l-8,16A4,4,0,0,0,42,58Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}