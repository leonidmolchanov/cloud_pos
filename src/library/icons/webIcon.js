import React from "react";
import {Svg} from 'expo';

export class WebIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M14,98H86A12,12,0,0,0,98,86V14A12,12,0,0,0,86,2H14A12,12,0,0,0,2,14V86A12,12,0,0,0,14,98ZM10,86V42H30V90H14A4,4,0,0,1,10,
                    86ZM90,42V62H38V42ZM86,90H38V70H90V86A4,4,0,0,1,86,90ZM10,14a4,4,0,0,1,4-4H86a4,4,0,0,1,4,4V34H10Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
                <Svg.Circle

                    cx={22}
                    cy={22}
                    r={4}
                />
                <Svg.Circle

                    cx={38}
                    cy={22}
                    r={4}
                />
                <Svg.Circle

                    cx={54}
                    cy={22}
                    r={4}
                />
            </Svg>

        )

    }
}