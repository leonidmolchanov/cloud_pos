import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {BasketElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'
import { Icon } from 'react-native-elements'
import {DeleteBasket} from './../../../action'

export  class BasketElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={BasketElementStyle.elementContainer}>
                <Image
                    style={BasketElementStyle.elementImageContainer}
                    source={{uri: this.props.content.image}}
                />
                <View style={BasketElementStyle.elementIconContainer}>

                </View>
                <View style={BasketElementStyle.elementTitleContainer}>
                    <Text style={BasketElementStyle.elementTitleText}>{this.props.content.product_description[0].name}, {this.props.content.product_attributes.attributes ? this.props.content.product_attributes.attributes[12] ?this.props.content.product_attributes.attributes[12][2].text: '': ''}

                        {
                            this.props.content.product_attributes.attributes ?
                                this.props.content.product_attributes.attributes[14] ?
                                    this.props.content.product_attributes.attributes[14][2]?
                                        this.props.content.product_attributes.attributes[14][2].name ?
                                            this.props.content.product_attributes.attributes[14][2].name :
                                            false : false: false : false
                        }

                        {
                            this.props.content.product_attributes.attributes ?
                                this.props.content.product_attributes.attributes[14] ?
                                    this.props.content.product_attributes.attributes[14][2]?
                                        this.props.content.product_attributes.attributes[14][2].text ?
                                            this.props.content.product_attributes.attributes[14][2].text :
                                            false : false: false : false
                        }
                    </Text>
                    <Text style={BasketElementStyle.elementTitleTextBold}>
                        Артикул:
                        <Text style={BasketElementStyle.elementTitleText}> {this.props.content.sku}</Text>
                    </Text>
                    <Text style={BasketElementStyle.elementTitleTextBold}>
                        Цена:
                        <Text style={BasketElementStyle.elementTitleText}> {this.props.content.price_formated}</Text>
                    </Text>
                    <Text style={BasketElementStyle.elementTitleTextBold}>
                        Наличие:
                        <Text style={BasketElementStyle.elementTitleText}> {this.props.content.quantity} шт.</Text>
                    </Text>
                </View>

                <TouchableOpacity style={BasketElementStyle.elementDescriptionContainer}
                onPress={()=>{
                    // this.props.callback(this.props.index, this.props.navigation)
this.props.deleteSale(this.props.content.id)
                    DeleteBasket(this.props.index)

                }}
                >
                    <Icon
                        type='ionicon'
                        name='ios-trash'
                        size={40}
                    />

                </TouchableOpacity>
            </View>
        )

    }
}