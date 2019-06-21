import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {ArticlesElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'

export  class SalesElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={SalesElementStyle.elementContainer}>
                <Image
                    style={SalesElementStyle.elementImageContainer}
                    source={{uri: 'https://cloudpos.uz/image/cache/catalog/kolco2-228x228.png'}}
                />
                <View style={SalesElementStyle.elementIconContainer}>

                </View>
                <View style={SalesElementStyle.elementTitleContainer}>
                    <Text style={SalesElementStyle.elementTitleText}>Обручальное кольцо, Женское, 3 гр, Серебро, 925, Размер 16, Вставка Цианит
                    </Text>
                    <Text style={SalesElementStyle.elementTitleText}>
                        Арт: 219109292
                    </Text>
                </View>
                <View style={SalesElementStyle.elementDescriptionContainer}>
                    <Text style={SalesElementStyle.elementDescriptionText}>3 гр.</Text>
                    <Text style={SalesElementStyle.elementDescriptionText}>1.250.000 сум.</Text>
                    <Text style={SalesElementStyle.elementDescriptionText}>0 шт.</Text>

                </View>
            </View>
        )

    }
}