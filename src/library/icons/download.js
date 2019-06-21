import React from "react";
import {Svg} from 'expo';

export class MoreIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width}>
                <Svg.Circle

                    cx={25}
                    cy={30}
                    r={18}
                    fill='none'
                    stroke={this.props.fill}
                    strokeWidth={3}
                />
                <Svg.Circle

                    cx={15}
                    cy={30}
                    r={2}
                    fill={this.props.fill}

                />
                <Svg.Circle

                    cx={25}
                    cy={30}
                    r={2}
                    fill={this.props.fill}

                />
                <Svg.Circle

                    cx={35}
                    cy={30}
                    r={2}
                    fill={this.props.fill}

                />
            </Svg>


        )

    }
}