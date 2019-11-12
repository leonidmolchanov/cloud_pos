import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {LoginSubmitButton, LoginUserInput, SalesPage} from "../../styles";
import {Svg} from 'expo';
import { Button, Input } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {Filter, SalesElement, Inform} from '../../library/components'
import store from './../../store';


export default class Sales extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:'',
            orderList:[],
            filterString:''
        }
    }

    ajaxFetch = async ()=>{
        await fetch('http://'+this.props.address + '/index.php?route=rest/order_admin/orders/details',
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
                            let   orderList=this.state.orderList;
                            let reversed = content.data.reverse();
                            reversed.forEach((item, index) => {

                                orderList[index]={
                                    data:[],
                                    date:item.date_added
                                }

                                fetch('http://'+this.props.address + '/index.php?route=rest/order_admin/orders&id='+item.order_id,
                                    {
                                        method: 'GET', headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json',
                                            'X-Oc-Restadmin-Id': this.props.token
                                        }
                                    })  .then(async (response2) => {
                                    if (response2._bodyInit) {
                                        if (JSON.parse(response2._bodyInit)) {

                                            let content2 = JSON.parse(response2._bodyInit)

                                            if (content2.success == 1) {
                                                content2.data.products.forEach((item2, index2)=>{
                                                    orderList[index].data.push(item2)
                                                    this.setState({orderList:orderList})


                                                })

                                            }
                                        }
                                    }

                                }).catch(function (err) {
                                    console.log('err sales')
                                    console.log(err)
                                })







                            })
                        }
                    }
                }

            }).catch(function (err) {
                console.log('err')
                console.log(err)
            })
    }

    async componentDidMount() {
        await this.ajaxFetch()

        store.subscribe(() => {
             this.ajaxFetch()

        })
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
    checkElement=(content)=>{
        check=false

        content.data.forEach((a)=>{
         if((a.name).toLowerCase().indexOf(this.state.filterString.toLowerCase())>-1 ||
             (a.sku.toLowerCase()).indexOf(this.state.filterString.toLowerCase())>-1) {
             check=true
         }
        })

        return check
    }
        render() {
        return (
            <View style={SalesPage.container}>
                <GlobalHeader title={'Продажи'} />
                <View style={SalesPage.contentContainer}>
                    <Filter callback={this.setFilterString} string = {this.state.filterString} />
                    <Divider style={SalesPage.dividerStyle} />
                    {/*<Inform basket = {this.props.basket} />*/}
                    <Divider style={SalesPage.dividerStyle} />
                    <ScrollView style={SalesPage.ScrollViewStyle} >
                        {this.state.orderList.map((item, index)=>{
                           return(
                               this.state.filterString!=''?
                                   this.checkElement(item)
                                   ?
                                       <SalesElement key={index} filterString={this.state.filterString} date_added={item.date_added} content={item} />
                                   :false
:
                                   <SalesElement key={index} filterString={this.state.filterString} date_added={item.date_added} content={item} />



                            )
                        })
                        }


                    </ScrollView>
                </View>

                {/*<Text>Article</Text>*/}
                {/*<Button>Button</Button>*/}


            </View>
        );
    }
}
