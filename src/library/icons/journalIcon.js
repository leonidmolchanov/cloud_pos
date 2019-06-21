import React from "react";
import {Svg} from 'expo';

export class JournalIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M6,82a4,4,0,0,0,4,4H34a12,12,0,0,1,11.56,9,4,4,0,0,0,3.87,3h1.14a4,4,0,0,0,3.87-3A12,12,0,0,1,66,86H90a4,4,0,0,0,4-4V22a4,
                            4,0,0,0-4-4H66a19.79,19.79,0,0,0-12,4.1V22A20,20,0,0,0,34,2H30a4,4,0,0,0-4,4V18H10a4,4,0,0,0-4,4ZM66,26H86V78H66a19.83,19.83,
                            0,0,0-12,4.07V38A12,12,0,0,1,66,26ZM34,10A12,12,0,0,1,46,22V66.1A19.79,19.79,0,0,0,34,62ZM14,26H26V66a4,4,0,0,0,4,4h4A12,12,0,
                            0,1,46,82v.07A19.81,19.81,0,0,0,34,78H14Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}