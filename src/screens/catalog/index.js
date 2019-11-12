import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, AsyncStorage, RefreshControl} from 'react-native';
import {LoginSubmitButton, LoginUserInput, catalogPage} from "../../styles";
import {Svg} from 'expo';
import { Button, Input } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {Filter, ArticleElement, Inform, CatalogElement} from '../../library/components'


export default class Catalog extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:'',
            data:[],
            arrArticles:[],
            filterString:'',
            refreshing: false
        }
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

navToArticles= (content)=>{
    this.props.navigation.navigate('articles', {content:content})
    // navigator.navigate('profile')

}
    ajaxFetchData = async ()=> {
        arrayContent=[]
        _getContent = async (data)=>{

            fetchData = async (data)=> {
                let articles = [];
                let string = ''
                if(this.props.filter.filterSex || this.props.filter.filterIron || this.props.filter.filterShop ||
                    this.props.filter.filterPoint){
                    string+='&filter='

                    if(this.props.filter.filterSex){
                        string+=this.props.filter.filterSex+','
                    }
                    if(this.props.filter.filterIron){
                        string+=this.props.filter.filterIron+','
                    }
                }
               await data.forEach(async (item, index) => {
                    await setTimeout(async () => {
                       await fetch('http://'+this.props.address + '/index.php?route=rest/product_admin/products&category=' + item.category_id+string,
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
                                            articles[item.category_id] = content.data.map((item)=>{
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
                                            // console.log(articles)

                                            this.setState({arrArticles:articles,
                                                refreshing: false})
                                        }
                                    }
                                }

                            }).catch(function (err) {
                            console.log('err articles')
                            console.log(err)
                        })

                    }, index * 300);


                })
// this.setState({arrArticles:articles})
            }
            await fetchData(data)
        }
        let string = ''
        if(this.props.filter.filterCategory){
            string+='&id='+this.props.filter.filterCategory
        }

      await fetch('http://'+this.props.address+'/index.php?route=rest/category_admin/category'+string,
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
 await _getContent(content.data).then(console.log('done'))
                          this.setState({data:content.data})
                      }
                  }
              }

          }).catch(function (err) {
              console.log('err get Categody')
              console.log(err)
          })
    }

    async componentDidMount() {
        this.ajaxFetchData()
    }


    _onRefresh = () => {
        this.setState({refreshing: true});

        this.ajaxFetchData()
    }

    render() {
        if(this.props.screen){
        this.props.navigation.navigate(this.props.screen)
        }
        let arrArticles = this.state.arrArticles

        // console.log(this.state.arrArticles.length)
        return (
            <View style={catalogPage.container}>
                <GlobalHeader   title={'Каталог'} />
                <View style={catalogPage.contentContainer}>
                    <Filter placeholder = 'Поиск' callback={this.setFilterString} string = {this.state.filterString} bottom={true} navigation = {this.props.navigation}/>
                    <Divider style={catalogPage.dividerStyle} />
                    {/*<Inform basket={this.props.basket} />*/}
                    <Divider style={catalogPage.dividerStyle} />
                    <ScrollView style={catalogPage.ScrollViewStyle}

                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={()=>{this._onRefresh()}}
                                    />
                                }

                    >
                        {this.state.data.map((item,index)=>{
                           let count = false
                            if(arrArticles[item.category_id]){
                               count=0;
                                arrArticles[item.category_id].forEach((item)=>{
                                    if(item && item!==undefined){
                                        count ++
                                    }
                                })
                            // count = arrArticles[item.category_id].length
                            }
                            return(

                                item ?
                                    count==0?
                                        false
                                        :
                                    this.state.filterString!=''?
                                        (item.name).indexOf(this.state.filterString)?
                                                false                                                    :
                                            <CatalogElement categoryId = {item.category_id} navigate = {this.navToArticles} count ={count} articles={arrArticles[item.category_id]} content={item} key={index} />
                                            :

                                <CatalogElement categoryId = {item.category_id} navigate = {this.navToArticles} count ={count} articles={arrArticles[item.category_id]} content={item} key={index} />
:
                                    false
                            )

                        })}

                    </ScrollView>
                </View>
            </View>
        );
    }
}
