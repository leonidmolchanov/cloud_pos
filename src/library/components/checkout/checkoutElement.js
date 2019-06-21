import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {BasketElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'
import { Icon } from 'react-native-elements'

export  class BasketElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={BasketElementStyle.elementContainer}>
                <Image
                    style={BasketElementStyle.elementImageContainer}
                    source={{uri: 'https://cloudpos.uz/image/cache/catalog/kolco2-228x228.png'}}
                />
                <View style={BasketElementStyle.elementIconContainer}>

                </View>
                <View style={BasketElementStyle.elementTitleContainer}>
                    <Text style={BasketElementStyle.elementTitleText}>Обручальное кольцо, Женское, 3 гр, Серебро, 925, Размер 16, Вставка Цианит
                    </Text>
                    <Text style={BasketElementStyle.elementTitleTextBold}>
                        Артикул:
                        <Text style={BasketElementStyle.elementTitleText}> 432424324</Text>
                    </Text>
                    <Text style={BasketElementStyle.elementTitleTextBold}>
                        Цена:
                        <Text style={BasketElementStyle.elementTitleText}> 1.250.000 см</Text>
                    </Text>
                    <Text style={BasketElementStyle.elementTitleTextBold}>
                        Наличие:
                        <Text style={BasketElementStyle.elementTitleText}> 1 шт.</Text>
                    </Text>
                </View>
                <View style={BasketElementStyle.elementDescriptionContainer}>
                    <Icon
                        type='ionicon'
                        name='ios-trash'
                        size={40}
                    />

                </View>
            </View>
        )

    }
}