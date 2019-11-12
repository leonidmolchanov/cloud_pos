import React from "react";
import {TouchableOpacity, Image, View, Text} from 'react-native'
import {FilterIcon} from "../../icons";
import {CatalogElementStyle} from "../../../styles";
import { Button, Input, Badge } from 'nachos-ui'

export  class CatalogElement extends React.Component {
    constructor(props) {
        super(props);
    }
_getSumWeight = (item)=>{
        // console.log(item)
let res=0;
if(item) {
        item.forEach((ev) => {
                ev.weight ?

                                res += Number(ev.weight)
                                :
            0
        })
    }
return res
}

    _getSumCount = (item)=>{
        // console.log(item)
        let res=0;
        if(item) {
            item.forEach((ev) => {
               res++
            })
        }
        return res
    }
    render() {
        return (
            <TouchableOpacity
                onPress = {()=>{
this.props.navigate({data:this.props.articles,id:this.props.categoryId})

    }}
                style={CatalogElementStyle.elementContainer}>
                <Image
                    style={CatalogElementStyle.elementImageContainer}
                    source={require('./../../images/folder.png')}
                />
                {this.props.count ?
                < Badge value={this.props.count ? this.props.count : 0} style={CatalogElementStyle.elementBandleStyle} />
                    :
                    false
                }
                <View style={CatalogElementStyle.elementTitleContainer}>
                    <Text style={CatalogElementStyle.elementTitleText}>{this.props.content.name}</Text>

                </View>
                <View style={CatalogElementStyle.elementDescriptionContainer}>
                    {this.props.count ?
                        <Text
                            style={CatalogElementStyle.elementDescriptionText}>{this._getSumCount(this.props.articles)} шт.</Text>
                        : false
                    }
                </View>
            </TouchableOpacity>
        )

    }
}