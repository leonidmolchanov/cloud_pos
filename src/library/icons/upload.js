import React from "react";
import {Svg} from 'expo';

export class UploadIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} >

                <Svg.Polyline
                    fill="none"
                    points="17,10 25,2 33,10   "
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
                    y1={33}
                    y2={2}/>

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