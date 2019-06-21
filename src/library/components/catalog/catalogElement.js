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
                    source={require('./../../images/folder.png')}
                />
                <View style={ArticlesElementStyle.elementIconContainer}>

                </View>
                <View style={ArticlesElementStyle.elementTitleContainer}>
                    <Text style={ArticlesElementStyle.elementTitleText}>Кольца (20)</Text>

                </View>
                <View style={ArticlesElementStyle.elementDescriptionContainer}>
                    <Text style={ArticlesElementStyle.elementDescriptionText}>550 гр / 1150 шт.</Text>
                </View>
            </View>
        )

    }
}