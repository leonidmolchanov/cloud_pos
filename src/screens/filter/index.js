import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {LoginSubmitButton, LoginUserInput, articlesPage} from "../../styles";
import {Svg} from 'expo';
import { Button, Input } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {Filter, ArticleElement, Inform} from '../../library/components'


export default class Articles extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:''
        }
    }
    render() {
        return (
            <View style={articlesPage.container}>
                <GlobalHeader title={'Товары'} />
                <View style={articlesPage.contentContainer}>
                    <Filter />
                    <Divider style={articlesPage.dividerStyle} />
                    <Inform />
                    <Divider style={articlesPage.dividerStyle} />
                    <ScrollView style={articlesPage.ScrollViewStyle} >
                        <ArticleElement />
                        <ArticleElement />
                        <ArticleElement />
                        <ArticleElement />
                        <ArticleElement />

                    </ScrollView>
                </View>

                {/*<Text>Article</Text>*/}
                {/*<Button>Button</Button>*/}


            </View>
        );
    }
}
