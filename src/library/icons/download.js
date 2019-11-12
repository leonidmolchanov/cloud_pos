import React from "react";
import {Svg} from 'expo';

export class DownloadIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width}>

                <Svg.Polyline
                    fill="none"
                    points="33,27 25,35 17,27   "
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />

                <Svg.Line
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    x1={25}
                    x2={25}
                    y1={2}
                    y2={33}/>

                <Svg.Rect
                    fill="none"
                    height="50"
                    width="50"/>
                <Svg.Path
                    d="M17,17H8v32h34V17h-9"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"/>
            </Svg>


        )

    }
}