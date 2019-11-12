import React from "react";
import {TouchableOpacity, Image, View, Text, } from 'react-native'
import {FilterIcon} from "../../icons";
import {SalesElementStyle} from "../../../styles";
import { Button, Input } from 'nachos-ui'

export  class SalesElementContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={SalesElementStyle.elementContainer}>
                {/*<Image*/}
                    {/*style={{ alignItems:'center',*/}
                        {/*justifyContent: 'center',*/}
                        {/*width: 50,*/}
                        {/*height: 50}}*/}
                    {/*source={{uri: 'https://cloudpos.uz/image/cache/catalog/kolco2-228x228.png'}}*/}
                {/*/>*/}
                <View style={SalesElementStyle.elementIconContainer}>

                </View>
                <View style={SalesElementStyle.elementTitleContainer}>
                    <Text style={SalesElementStyle.elementTitleText}>
                        {this.props.content.name ? this.props.content.name : false}
                    </Text>
                    <Text style={SalesElementStyle.elementTitleText}>
                        Арт: {this.props.sku}
                    </Text>
                    <Text style={SalesElementStyle.elementTitleText}>Сумма: {this.props.total}</Text>
                    <Text style={SalesElementStyle.elementTitleText}>Кол-во: {this.props.quantity} шт.</Text>

                </View>
            </View>
        )

    }
}