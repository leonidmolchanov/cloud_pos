import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {ArticlesElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'

export  class ArticleElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={ArticlesElementStyle.elementContainer}
            onPress={()=>{this.props.setCard(this.props.content)}}
            >
                <Image
                    style={ArticlesElementStyle.elementImageContainer}
                    source={{uri: this.props.content.image}}
                />

                <View style={ArticlesElementStyle.elementTitleContainer}>
                    <Text style={ArticlesElementStyle.elementTitleText}>
                        {this.props.content.product_description ?
                            this.props.content.product_description[0] ?
                                this.props.content.product_description[0].meta_title ?
                                    this.props.content.product_description[0].meta_title

                                    : '' :'' :'' }
                    </Text>
                    <Text style={ArticlesElementStyle.elementTitleText}>
                        {/*Арт: {this.props.content.sku}*/}
                    </Text>
                </View>
                <View style={ArticlesElementStyle.elementDescriptionContainer}>
                    <Text style={ArticlesElementStyle.elementDescriptionText}>{
                        this.props.content.product_attributes ?
                            this.props.content.product_attributes.attributes ?
                            this.props.content.product_attributes.attributes[25]?
                                this.props.content.product_attributes.attributes[25][2]?
                                    this.props.content.product_attributes.attributes[25][2].text?
                                        this.props.content.product_attributes.attributes[25][2].text
                    :0 :0 :0 :0 :0
                    }  {
                        this.props.content.product_attributes ?
                            this.props.content.product_attributes.attributes ?
                            this.props.content.product_attributes.attributes[25]?
                                this.props.content.product_attributes.attributes[25][2]?
                                    this.props.content.product_attributes.attributes[25][2].name?
                                        this.props.content.product_attributes.attributes[25][2].name
                                        :'' :'' :'' :'' :''
                    }</Text>
                    <Text style={ArticlesElementStyle.elementDescriptionText}>{this.props.content.price_formated}</Text>
                    {/*<Text style={ArticlesElementStyle.elementDescriptionText}>{this.props.content.quantity} шт.</Text>*/}

                </View>
            </TouchableOpacity>
        )

    }
}