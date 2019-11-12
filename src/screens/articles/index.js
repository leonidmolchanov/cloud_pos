import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, RefreshControl } from 'react-native';
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
            filterString:'',
            refreshing: false
        }

    }

    navToArticles= (content)=>{
        navigator = this.props.navogation
        this.props.navigation.navigate('articles', {content:content})
        // navigator.navigate('profile')

    }
    setCard= (content)=>{
        navigator = this.props.navogation
        this.props.navigation.navigate('articleCard', {content:content})
        // navigator.navigate('profile')

    }
    setFilterString=(ev)=>{
        if(!ev){
            this.setState({
                filterString: ''
            })
        }
        else{
            this.setState({
                filterString: ev
            })
        }
    }

    searchFilter = (string)=>{

    }

    _onRefresh = (content) => {
        this.setState({refreshing: true});

        let articles = [];

        fetch('http://'+this.props.address + '/index.php?route=rest/product_admin/products&category=' + content.id,
            {
                method: 'GET', headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Oc-Restadmin-Id': this.props.token
                }
            })
            .then(async (response) => {
                if (response._bodyInit) {
                    if (JSON.parse(response._bodyInit)) {
                        let content = JSON.parse(response._bodyInit)

                        if (content.success == 1) {
                            articles = content.data.map((item)=>{
                                return(
                                    this.props.filter.filterZero && item.quantity==0 ?
                                        false
                                        :

                                        this.props.filter.filterPriceMax || this.props.filter.filterPriceMin ?

                                            this.props.filter.filterPriceMax && (Number(this.props.filter.filterPriceMax) > Number(item.price).toFixed()) ?
                                                item
                                                :
                                                this.props.filter.filterPriceMin && (Number(this.props.filter.filterPriceMin) < Number(item.price).toFixed()) ?
                                                    item
                                                    :


                                                    false

                                            :


                                            this.props.filter.filterWidthMax &&
                                            Number(item.weight).toFixed(2) > this.props.filter.filterWidthMax ?
                                                false :
                                                this.props.filter.filterWidthMin &&
                                                Number(item.weight).toFixed(2) < this.props.filter.filterWidthMin ?
                                                    false :
                                                    item
                                )

                            });

                            this.setState({arrArticles:articles,
                                refreshing: false})
                        }
                    }
                }

            }).catch(function (err) {
            console.log('err articles')
            console.log(err)
        })











    }

    render() {
let content  = false;
if(this.state.arrArticles){
    content= this.state.arrArticles
}
else {
    if (this.props.navigation.state.params) {
        if (this.props.navigation.state.params.content) {
            if (this.props.navigation.state.params.content.data) {
                content = this.props.navigation.state.params.content.data;

            }

        }
    }
}
return (
            <View style={articlesPage.container}>
                <GlobalHeader navigation = {this.props.navigation} leftIcon={true} title={'Товары'} />
                <View style={articlesPage.contentContainer}>
                    <Filter callback={this.setFilterString} string = {this.state.filterString} bottom={true} navigation = {this.props.navigation} />
                    <Divider style={articlesPage.dividerStyle} />
                    <Inform basket = {content} />
                    <Divider style={articlesPage.dividerStyle} />
                    <ScrollView style={articlesPage.ScrollViewStyle}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={()=>{this._onRefresh(this.props.navigation.state.params.content)}}
                                    />
                                }
                    >


                        {
                            content ?
                            content.map((item, index)=>{
                                return(
                                    item && item.sku ?
                                        this.state.filterString!='' ?
                                             (item.product_description[0].meta_title).toLowerCase().indexOf(this.state.filterString.toLowerCase())>-1 ||
                                            (item.sku.toLowerCase()).indexOf(this.state.filterString.toLowerCase())>-1
                                                ?
                                                <ArticleElement setCard={this.setCard} content={item} key={index} />
//                                                 :
//                                                 item.sku.toLowerCase().indexOf(this.state.filterString.toLowerCase())?
//                                                     <ArticleElement setCard={this.setCard} content={item} key={index} />
//                                                     :
// false
//                                             :
// false
                                            :
                                            false
                                            :
                                            <ArticleElement setCard={this.setCard} content={item} key={index} />
                                        :
                                        false

                                )

                            })
                                :
                                false
                        }


                    </ScrollView>
                </View>

                {/*<Text>Article</Text>*/}
                {/*<Button>Button</Button>*/}


            </View>
        );
    }
}
