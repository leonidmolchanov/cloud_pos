import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {ArticlesElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'
import {SalesElementContent} from "./salesElementContent";

export  class SalesElement extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            totalPrice:0,
                totalQuality:0
        }
    }
componentDidMount(){
    this.props.content.data.forEach((item, index)=>{
           let totalPrice = this.state.totalPrice
            let totalQuality = this.state.totalQuality

        if(item.price){
            totalPrice+=this.state.totalPrice+  item.price

        }
        if(item.quantity){
            totalQuality+=this.state.totalQuality+  item.quantity

        }
        this.setState({totalPrice:totalPrice,
            totalQuality:totalQuality
        })

        }

    )
}
    render() {
        return (
            <View>
                <View style={{width:'100%', height:40, flexDirection:'row'}}>
                    <View style={{width:'50%', alignItems:'flex-start'}}>
                        <Text>{this.props.content.date ? this.props.content.date : ''}</Text>
                    </View>
                    <View style={{width:'50%', alignItems:'flex-end'}}>
                        <Text>{this.props.content.data.reduce(function(sum, current) {
                            if(Number(sum)!==0)
                                return Number(Number(sum) + Number(current.quantity))
                            else
                            return Number(current.quantity);
                        }, 0)} шт. / {this.props.content.data.reduce(function(sum, current) {
                            if(Number(sum)!==0)
                                return Number(Number(sum) + Number(current.price))
                            else
                                return Number(current.price);
                        }, 0)} сум</Text>
                    </View>
                    </View>
                {this.props.content.data.map((item, index)=>{
                   return(

                           <SalesElementContent content={item} sku={item.sku} quantity={item.quantity} total={item.total_formated} key={index} />


                   )
                })}

            </View>
        )

    }
}