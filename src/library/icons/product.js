import React from "react";
import {Svg} from 'expo';

export class ProductIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>

                <Svg.Rect  height={8} width={30} x={6} y={13}
                           fill='none'
                           stroke={this.props.fill}
                           strokeWidth={2}/>
                <Svg.Rect  height={20} width={26} x={8} y={21}
                           fill='none'
                           stroke={this.props.fill}
                           strokeWidth={2}/>
                <Svg.Rect  height={4} width={14} x={14} y={27}
                           fill='none'
                           stroke={this.props.fill}
                           strokeWidth={2}/>
            </Svg>
        )

    }
}