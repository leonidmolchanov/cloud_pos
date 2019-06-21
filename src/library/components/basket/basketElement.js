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
            <View style={ArticlesElementStyle.elementContainer}>
                <Image
                    style={ArticlesElementStyle.elementImageContainer}
                    source={{uri: 'https://cloudpos.uz/image/cache/catalog/kolco2-228x228.png'}}
                />
                <View style={ArticlesElementStyle.elementIconContainer}>

                </View>
                <View style={ArticlesElementStyle.elementTitleContainer}>
                    <Text style={ArticlesElementStyle.elementTitleText}>Обручальное кольцо, Женское, 3 гр, Серебро, 925, Размер 16, Вставка Цианит
                    </Text>
                    <Text style={ArticlesElementStyle.elementTitleText}>
                        Арт: 219109292
                    </Text>
                </View>
                <View style={ArticlesElementStyle.elementDescriptionContainer}>
                    <Text style={ArticlesElementStyle.elementDescriptionText}>3 гр.</Text>
                    <Text style={ArticlesElementStyle.elementDescriptionText}>1.250.000 сум.</Text>
                    <Text style={ArticlesElementStyle.elementDescriptionText}>0 шт.</Text>

                </View>
            </View>
        )

    }
}