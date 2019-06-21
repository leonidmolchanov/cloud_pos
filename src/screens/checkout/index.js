import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {LoginSubmitButton, LoginUserInput, basketPage, articlesPage} from "../../styles";
import {Svg} from 'expo';
import { Button, Input } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {BasketTopMenu, BasketElement, BasketSelect, Filter} from '../../library/components'


export default class Basket extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:''
        }
    }
    render() {
        return (
            <View style={basketPage.container}>
                <GlobalHeader title={'Продажа'} />
                <View style={basketPage.contentContainer}>
                    <BasketTopMenu />
                    <Filter/>

                    <BasketSelect placeholderText={'Магазин'}/>
                    <ScrollView style={basketPage.ScrollViewStyle} >
                        <BasketElement />

                        <BasketElement />

                    </ScrollView>

                </View>
                <Divider style={basketPage.dividerStyle} />

<View style={{width:'100%', flexDirection:'row'}}>
                <View style={{width:'50%'}}><Text style={{fontWeight:'bold'}}>В корзине</Text></View>
                <View style={{width:'50%'}}><Text style={{fontWeight:'bold'}}>3 гр. / 1 шт. / 1.250.000 сум</Text></View>
</View>
                <Divider style={basketPage.dividerStyle} />
                <Text></Text>

                {/*<Button>Button</Button>*/}


            </View>
        );
    }
}
