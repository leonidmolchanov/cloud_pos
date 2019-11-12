import React from "react";
import {TouchableOpacity, Image, View, Text, TextInput} from 'react-native'
import {FilterIcon} from "../../icons";
import {CheckoutElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'
import { Icon } from 'react-native-elements'

export  class CheckoutElement extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            sumSaleNumber:false,
            sumSaleProcent:false
        }
    }

    render() {
        return (

            <View style={CheckoutElementStyle.elementContainerGlobal}>
            <View >
            <View style={CheckoutElementStyle.elementContainer}>
                <Image
                    style={CheckoutElementStyle.elementImageContainer}
                    source={{uri: this.props.content.image}}
                />
                <View style={CheckoutElementStyle.elementIconContainer}>

                </View>
                <View style={CheckoutElementStyle.elementTitleContainer}>
                    <Text style={CheckoutElementStyle.elementTitleText}>{this.props.content.product_description[0].name}, {this.props.content.product_attributes.attributes ? this.props.content.product_attributes.attributes[12] ?this.props.content.product_attributes.attributes[12][2].text: '': ''}, {Number(this.props.content.weight).toFixed(2)} {this.props.content.weight_class}, Серебро, 925, Размер 16,


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
                    <Text style={CheckoutElementStyle.elementTitleTextBold}>
                        Артикул:
                        <Text style={CheckoutElementStyle.elementTitleText}> {this.props.content.sku}</Text>
                    </Text>
                    <Text style={CheckoutElementStyle.elementTitleTextBold}>
                        Цена:
                        <Text style={CheckoutElementStyle.elementTitleText}> {this.props.content.price_formated}</Text>
                    </Text>
                    <Text style={CheckoutElementStyle.elementTitleTextBold}>
                        Наличие:
                        <Text style={CheckoutElementStyle.elementTitleText}> {this.props.content.quantity} шт.</Text>
                    </Text>
                </View>


            </View>
                <View style={CheckoutElementStyle.elementSaleContainer}>
                    <View style={CheckoutElementStyle.elementSaleContainerSale}>
                        <Text>
                            Скидка на товар :
                        </Text>
                    </View>
                    <View style={CheckoutElementStyle.elementInputContainer}>
                        <TextInput style={CheckoutElementStyle.elementInputStyle}
                                   value = {this.props.value}
                                   placeholder={'%'}
                                   placeholderTextColor={'rgb(82, 82, 82)'}
                                   editable={this.state.sumSaleNumber ? false : true}
                            // onFocus={ () => this._setFocus() }
                            // onBlur={ () => this._unsetFocus() }
                                   onChangeText={(text) => {
                                       if(Number(text)) {
                                           this.props.setSale(this.props.content.id, ((Number(this.props.content.price).toFixed()/100)*Number(text)).toFixed()  )
                                           this.setState({sumSaleProcent:true})

                                       }
                                       else{
                                           this.props.setSale(this.props.content.id, 0)
                                           this.setState({sumSaleProcent:false})

                                       }
                                   }}
                        >
                        </TextInput>
                    </View>
                    <View style={CheckoutElementStyle.elementInputContainer}>
                        <TextInput style={CheckoutElementStyle.elementInputStyle}
                                   value = {this.props.value}
                                   placeholder={'СУМ'}
                                   placeholderTextColor={'rgb(82, 82, 82)'}
                            // onFocus={ () => this._setFocus() }
                            // onBlur={ () => this._unsetFocus() }
                                   editable={this.state.sumSaleProcent ? false : true}

                                   onChangeText={(text) => {
                                       if(Number(text)) {
                                           this.props.setSale(this.props.content.id, Number(text))

                                           this.setState({sumSaleNumber:true})
                                       }
                                       else{
                                           this.props.setSale(this.props.content.id, 0)
                                           this.setState({sumSaleNumber:false})

                                       }
                                   }}
                        >
                        </TextInput>
                    </View>
                </View>
            </View>
            </View>

        )

    }
}