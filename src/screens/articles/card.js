import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {LoginSubmitButton, LoginUserInput, articlesPage} from "../../styles";
import {Svg} from 'expo';
import { Button, Input } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {Filter, ArticleElement, Inform, CardLabelElement} from '../../library/components'
import { Icon } from 'react-native-elements'
import {AddBasket} from './../../action'

export default class ArticlesCard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:'',
            filterGroup:[]
        }
    }

    async componentDidMount(){


        await fetch(this.props.address+'/index.php?route=rest/filter_admin/filters&limit=1000&page=1',
            {method: 'GET',headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Oc-Restadmin-Id': this.props.token
                }})
            .then(async(response)=> {
                if(response._bodyInit) {
                    if (JSON.parse(response._bodyInit)) {
                        let content = JSON.parse(response._bodyInit)
                        if (content.success == 1) {
                            let array=[]
                            if(content.data){

                                this.setState({filterGroup:content.data})

                               return (content.data)

                            }
                        }
                    }
                }
            })
            .catch(function (err) {
                console.log('err')
            })
    }
    render() {
        let content  = false;
        if(this.props.navigation.state.params) {
            if (this.props.navigation.state.params.content){
                content = this.props.navigation.state.params.content;
            }
        }
        return (
            <View style={articlesPage.container}>
                <GlobalHeader navigation={this.props.navigation} leftIcon={true} size={12} title={content.category[0][0].name} />
                <View style={articlesPage.contentContainer}>
                    {/*<Filter />*/}
                    <Divider style={articlesPage.dividerCardStyle} />
                    <View>
                        <View style={articlesPage.cardContainer} >
                    <ScrollView style={articlesPage.cardScroll} >
                        <View style={articlesPage.cardSubContainer}>
                            <View style={articlesPage.cardSubContainerLeft}>
                            </View>
                            <View style={articlesPage.cardSubContainerCenter}>
                                <Image
                                    style={articlesPage.cardImage}
                                    source={content.image ?{uri: content.image}: {uri: 'https://cloudpos.uz/image/cache/catalog/kolco2-228x228.png'}}
                                />
                        </View>

                            <View style={articlesPage.cardSubContainerRight}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // this.props.addInBasket(content, this.props.navigation)
                                        AddBasket(content)
                                    }}
                                >
                                <Icon
                                    reverse
                                    name='add'
                                    color='#4e2'
                                    size={20}
                                />
                                </TouchableOpacity>
                        </View>
                        </View>
                        <View style={articlesPage.cardDescriptionContainer}>
                            <CardLabelElement title={'Артикул'} body={content.sku} />
                            <CardLabelElement title={'Название'} body={content.product_description[0].name} />
                            <CardLabelElement title={'Категория'} body={
                                content.category ?
                                    content.category[0] ?
                                        content.category[0][0] ?
                                            content.category[0][0].name ?
                                            content.category[0][0].name
                                            : ''
                                            : ''
                                        : ''
                                    : ''
                            } />
                            {
                                this.state.filterGroup.map((av, index)=>{
                                    if(content.filters.indexOf(av.filter_id)>-1) {
                                        return (
                                            <CardLabelElement key={index} title={av.group} body={av.name}/>

                                        )
                                    }

                                    else {
                                        return (
false
                                        )
                                    }
                                })
                            }
                            {
                                content.product_attributes ?
                                    content.product_attributes.attributes ?
                                        content.product_attributes.attributes[25] ?
                                            content.product_attributes.attributes[25][2] ?
                                                content.product_attributes.attributes[25][2].text ?

                                                    <CardLabelElement title={'Вес'} body={Number(Number((content.product_attributes.attributes[25][2].text).replace(',', '.')))+' гр'} />

                            : false
                                                :false
                                            : false
                                        : false
                                    : false

                            }
                            <CardLabelElement title={'Цена'} body={content.price_formated} />

                        </View>
                    </ScrollView>
                        </View>
                    </View>
                </View>

                <Text style={{marginTop:30}}></Text>
                {/*<Button>Button</Button>*/}


            </View>
        );
    }
}
