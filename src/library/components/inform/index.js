import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {CatalogElementStyle, InformStyle} from "../../../styles";
import { Button, Input, Badge} from 'nachos-ui'
import {connect} from "react-redux";
import store from './../../../store'
  class Inform extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            filterInputValue:''
        }
    }
componentDidMount(){


    store.subscribe(() => {

        this.setState({
            update:true
        })

    })
}
    render() {
        let sum= 0
        let gSum = 0
        if(this.props.basket){
            if(this.props.basket.length>0){
                this.props.basket.forEach((item)=>{
                    if(item.price) {
                        sum += Number(item.price)
                    }
                    if(item.product_attributes){
                        if(item.product_attributes.attributes) {
                            if(item.product_attributes.attributes[25]) {
                                if(item.product_attributes.attributes[25][2]) {
                                    if(item.product_attributes.attributes[25][2].text) {
                                        gSum+= Number(Number((item.product_attributes.attributes[25][2].text).replace(',', '.')))

                                    }
                                }
                            }
                        }
                    }
                })
            }
        }


        return (
            <View style={InformStyle.informContainer}>
                <View style={InformStyle.informLeftContainer}>
                    <Text style={InformStyle.informRightText}>Всего({this.props.basket? this.props.basket.length : 0})</Text>

                </View>
                <View style={InformStyle.informRightContainer}>
                    <Text style={InformStyle.informLeftText}>{gSum.toFixed(2)} гр / {this.props.basket? this.props.basket.length : 0} шт. / {sum} сум</Text>

                </View>
            </View>
        )

    }
}



export default Inform
