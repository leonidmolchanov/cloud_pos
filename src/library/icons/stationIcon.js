import React from "react";
import {Svg} from 'expo';

export class StationIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M90,66H86V58A12,12,0,0,0,74,46H54V34h4a8,8,0,0,0,8-8V10a8,8,0,0,0-8-8H42a8,8,0,0,0-8,8V26a8,8,0,0,0,8,8h4V46H26A12,12,0,0,0,14,58v8H10a8,8,0,0,0-8,8V90a8,8,0,0,0,8,8H26a8,8,0,0,0,8-8V74a8,8,0,0,0-8-8H22V58a4,4,0,0,1,4-4H74a4,4,0,0,1,
                    4,4v8H74a8,8,0,0,0-8,8V90a8,8,0,0,0,8,8H90a8,8,0,0,0,8-8V74A8,8,0,0,0,90,66ZM42,10H58V26H42ZM26,90H10V74H26Zm64,0H74V74H90Z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}