import React from "react";
import {Svg} from 'expo';

export class SendIcon extends React.Component {
    render() {
        return (
            <Svg height={this.props.height} width={this.props.width} viewBox={this.props.viewBox}>
                <Svg.Path
                    d="M20.181,20.125L4.281,21.665L0.097,35.045c-0.345,1.093,0.261,2.258,1.354,2.603
	c0.508,0.16,1.058,0.119,1.535-0.114l34.847-16.873c0.984-0.48,1.393-1.667,0.913-2.651c-0.194-0.397-0.516-0.719-0.913-0.913
	L3.01,0.211C1.981-0.292,0.739,0.134,0.235,1.164C0.002,1.641-0.039,2.192,0.121,2.7l4.185,13.381l15.869,1.539
	c0.688,0.068,1.191,0.682,1.124,1.37c-0.06,0.595-0.529,1.064-1.124,1.124L20.181,20.125z"
                    x={this.props.x}
                    y={this.props.y}
                    fill={this.props.fill}
                />
            </Svg>
        )

    }
}