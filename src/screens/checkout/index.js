import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, KeyboardAvoidingView,  } from 'react-native';
import {LoginSubmitButton, LoginUserInput, checkoutPage, articlesPage, } from "../../styles";
import {Svg} from 'expo';
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import { Icon } from 'react-native-elements'
import {
    BasketTopMenu,
    CheckoutElement,
    BasketSelect,
    Filter,
    CheckoutBottomMenu,
    BasketElement
} from '../../library/components'
import { Button, Input, SegmentedControlButton, Switcher } from 'nachos-ui'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import UserAdd from '../../screens/userAdd'
import { connect } from 'react-redux';
import store from './../../store';
import {ClearBasket} from './../../action'
const sports = [
    {
        label: 'Football',
        value: 'football',
    },
    {
        label: 'Baseball',
        value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
    },
];
const placeholder = {
    label: 'Магазин',
    value: null,
    color: '#9EA0A4',
};
const placeholder2 = {
    label: 'Клиент',
    value: null,
    color: '#9EA0A4',
};
 class Checkout extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:'',
            proccess:false,
            store:[],
            saleForArticlesList:{},
            commentsForArticles:'',
            cashType:0,
            selectStore:false,
            sumWeight:0,
            sumPrice:0,
            sumSale:0,
            saleForArticles: 0,
            sumSaleNumber:0,
            sumSaleProcent:0,
            filterString:'',
            userAdd:false,
            count:0,
            createdUser:{
                id:false,
                value:'не создан'
            }

        }
    }
    deleteItem = (callback,index)=>{

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



    changeProccess=(status)=>{
        if(status=="Оплата"){
            this.setState({
                proccess: true

            })
        }
        else {
            this.setState({
                proccess: false

            })
        }
    }
setSaleForArticles = (ev)=> {
    if (ev > 0 && ev < 101) {
        this.setState({
            saleForArticles: ev
        })
    }
    if(!ev){
        this.setState({
            saleForArticles: ''
        })
    }
}

    setcommentsForArticles = (ev)=> {
        if(!ev){
            this.setState({
                commentsForArticles: ''
            })
        }
        else{
            this.setState({
                commentsForArticles: ev
            })
        }
    }
    setCashType = (ev)=> {
        if(ev.valueOne=='Терминал'){
    this.setState({
        cashType:1
    })
}
    else{
    this.setState({
        cashType:0
    })
}}
    async componentDidMount() {


        store.subscribe((act) => {

            let weight = 0
            let price = 0
            let count = 0
            this.props.basket.forEach((item)=>{
                if(item.product_attributes){
                    if(item.product_attributes.attributes) {
                        if(item.product_attributes.attributes[25]) {
                            if(item.product_attributes.attributes[25][2]) {
                                if(item.product_attributes.attributes[25][2].text) {
                                    weight+= Number(Number((item.product_attributes.attributes[25][2].text).replace(',', '.')))

                                }
                                }
                            }
                        }
                    }

                if(item.price) {
                    price+= Number(Number(item.price).toFixed(2))
count++
                }
            })


            this.setState({
                update:true,
                sumPrice:price,
                sumWeight:weight,
                count: count
            })

        })



        await fetch('http://'+this.props.address + '/index.php?route=rest/store_admin/store',
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
                            content.data.forEach((item) => {
                                this.setState({
                                    store: {
                                        label: item.name,
                                        value: item.store_id
                                    }
                                })
                            })
                        }
                    }
                }

            }).catch(function (err) {
                console.log('err')
                console.log(err)
            })

        await fetch('http://'+this.props.address + '/index.php?route=rest/customer_admin/customers&&limit=1000&page=1',
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
                            content.data.forEach((item) => {
                                // this.setState({
                                //     store: {
                                //         label: item.name,
                                //         value: item.store_id
                                //     }
                                // })
                            })
                        }
                    }
                }

            }).catch(function (err) {
                console.log('err')
                console.log(err)
            })

    }

    goBack=()=>{
        this.setState({userAdd:false})
    }
createdUser=(obj)=>{
        this.setState({createdUser:obj,
        userAdd:false})
}

addOrder=(address, token,)=>{
    let orders = this.props.basket.map((item, index) => {
return({
    "product_id": item.id,
    "quantity": "1",
})    });
    fetch('http://'+address + '/index.php?route=rest/order_admin/order',
        {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Oc-Restadmin-Id': token
            },
            body:JSON.stringify({
                "store_id": this.state.selectStore ? this.state.selectStore : 0,
                "comment": this.state.commentsForArticles ? this.state.commentsForArticles : '',
                "products": orders,
                    "payment_address": {
                        "firstname": "App Order",
                        "lastname": "App Order",
                        "city": "App Order",
                        "address_1": "App Order"
                    },
                    "payment_method": {
                        "title": this.state.cashType==0 ? 'Наличные' : 'Терминал',
                        "code": this.state.cashType==0 ? 'Наличные' : 'Терминал'
                    },
                    "customer": {
                        "firstname": "Demo",
                        "lastname": "User",
                        "email": "nash1@vipmail.hu",
                        "telephone": "1-541-754-3010",
                        "fax": "1-541-754-3010",
                        "customer_id": this.state.createdUser.id,
                        "customer_group_id": "1"
                    },
                    "shipping_method": {
                        "title": "Flat Shipping Rate",
                        "code": "flat.flat"
                    },
                    "shipping_address": {
                        "firstname": "Demo",
                        "lastname": "Demo",
                        "city": "Demo",
                        "address_1": "Demo",
                        "country_id": "81",
                        "postcode": "22222",
                        "zone_id": "1256",
                        "address_2": "",
                        "zone": "Berlin",
                        "country": "Germany"
                    }}
                )
        })
        .then(async (response) => {
            if (response._bodyInit) {
                if (JSON.parse(response._bodyInit)) {
                    let content = JSON.parse(response._bodyInit)
                    if (content.success == 1) {

                        ClearBasket()
this.setState({
    sumWeight:0,
    sumPrice:0,
    sumSale:0,
    saleForArticles: 0,
    sumSaleNumber:0,
    sumSaleProcent:0
})
                    }
                }
            }

        }).catch(function (err) {
        console.log('err')
        console.log(err)
    })
}

     changeSumSale=(e)=>{
        sale=0
         sale= sale +Number(e)
        this.setState({
            sumSale:sale
        })
     }

     getProcentSalesForAllArticles=(sale, basket)=>{
        let articlesPrice = 0;

        basket.forEach((e)=>{
            if(e.price){
                articlesPrice = articlesPrice + Number(Number(e.price).toFixed())

            }
        })
        return ((Number(articlesPrice) / 100)*Number(sale)).toFixed()
     }

     getSalesForAllArticlesList = ()=>{
        let sale=0;
         for (var key in this.state.saleForArticlesList) {
             sale+=this.state.saleForArticlesList[key]
         }

         return sale
     }
     setSalesForAllArticlesList=(id, value)=>{
        st=this.state.saleForArticlesList
         st[id]=Number(value)
         this.setState({
             saleForArticlesList:st
         })
     }
     deleteSalesForAllArticlesList=(id)=>{
         st=this.state.saleForArticlesList
         if(st[id]){
             delete st[id]
         }
         this.setState({
             saleForArticlesList:st
         })
     }
    render() {
        if(this.state.userAdd){

            return(
                <UserAdd createdUser={this.createdUser} address={this.props.address} token={this.props.token} goBack={this.goBack} />
            )


        }
        else {
            return (
                <KeyboardAvoidingView  style={checkoutPage.container} contentContainerStyle={checkoutPage.container} behavior="padding" enabled={this.state.proccess ? true : false}>
                    <GlobalHeader navigation={this.props.navigation} leftIcon={true} size={12} title={'Продажа'}/>
                    <View style={checkoutPage.contentContainer}>
                        <BasketTopMenu callback={this.changeProccess}/>

                        {this.state.proccess
                            ?
                            <View style={{width: '100%', height: 40, marginTop: 15, flexDirection: 'row',}}>
                                <View style={{width: '43%',}}>
                                    <RNPickerSelect
                                        placeholder={placeholder}
                                        items={this.state.store}
                                        onValueChange={value => {
                                            this.setState({
                                                selectStore: value,
                                            });
                                        }}
                                        style={{
                                            ...pickerSelectStyles,
                                            iconContainer: {
                                                top: 10,
                                                right: 12,
                                            },
                                        }}
                                        value={this.state.favSport4}
                                        useNativeAndroidPickerStyle={false}
                                        textInputProps={{underlineColor: 'yellow'}}
                                        Icon={() => {
                                            return <Ionicons name="md-arrow-down" size={24} color="gray"/>;
                                        }}
                                    />
                                </View>
                                <View style={{width: '43%'}}>
                                  <Text style={checkoutPage.userFont}>{this.state.createdUser.value}</Text>
                                </View>
                                <TouchableOpacity
onPress={()=>{
    this.setState({userAdd:true,
    proccess:true})
}}
                                    style={{width: '14%'}}>
                                    <Icon
                                        type='ionicon'
                                        name='md-person-add'
                                        size={40}
                                    />
                                </TouchableOpacity>
                            </View>
                            :
                            false
                        }



                        <ScrollView style={checkoutPage.ScrollViewStyle}>
                            {this.state.proccess ?
                                this.props.basket.map((item, index) => {
                                    return (<CheckoutElement
                                           setSale={this.setSalesForAllArticlesList} content={item} index={index} key={index}/>
                                    )
                                })
                                :
                                this.props.basket.map((item, index) => {
                                    return (

                                        item ?
                                            this.state.filterString != '' ?
                                                (item.product_description[0].name).indexOf(this.state.filterString) ?
                                                    item.sku.indexOf(this.state.filterString) ?
                                                        false :
                                                        <BasketElement
                                                            deleteSale={this.deleteSalesForAllArticlesList}
                                                            content={item} key={index}
                                                            navigation={this.props.navigation}
                                                            index={index}
                                                            callback={this.props.deleteInBasket}
                                                            remove={true}
                                                        />
                                                    :
                                                    <BasketElement
                                                        deleteSale={this.deleteSalesForAllArticlesList}

                                                        content={item} key={index}
                                                        navigation={this.props.navigation}
                                                        index={index}
                                                        callback={this.props.deleteInBasket}
                                                        remove={true}
                                                    />
                                                :
                                                <BasketElement
                                                    deleteSale={this.deleteSalesForAllArticlesList}

                                                    content={item} key={index}
                                                    navigation={this.props.navigation}
                                                    index={index}
                                                    callback={this.props.deleteInBasket}
                                                    remove={true}
                                                /> :
                                            false

                                    )
                                })
                            }


                        </ScrollView>

                    </View>
                    {

                        this.state.proccess ?
                            <View style={{
                                width: '100%',
                                height: 50,
                                marginTop: 0,
                                paddingTop: 5,
                                paddingBottom: 5,
                                flexDirection: 'row',
                                borderTopWidth: 1,
                                borderColor: '#666'
                            }}>
                                <View style={{
                                    width: '45%',
                                    alignItems: 'flex-end',
                                    paddingRight: 20,
                                    justifyContent: 'center'
                                }}>
                                    <Text>
                                        Скидка на товары :
                                    </Text>
                                </View>
                                <View style={{
                                    width: '25%',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    borderColor: 'rgb(82, 82, 82)',
                                    backgroundColor: '#fff',
                                    margin: 3
                                }}>
                                    <TextInput style={{height: '100%', textAlign: 'center'}}
                                               value={this.state.saleForArticles}
                                               placeholder={'%'}
                                                editable={this.state.sumSaleNumber ? false : true}
                                               keyboardType='numeric'
                                               placeholderTextColor={'rgb(82, 82, 82)'}
                                        // onFocus={ () => this._setFocus() }
                                        // onBlur={ () => this._unsetFocus() }

                                               onChangeText={(text) => this.setSaleForArticles(text)}
                                    >
                                    </TextInput>
                                </View>
                                <View style={{
                                    width: '25%',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    borderColor: 'rgb(82, 82, 82)',
                                    backgroundColor: '#fff',
                                    margin: 3
                                }}>
                                    <TextInput style={{height: '100%', textAlign: 'center'}}
                                               value={this.props.value}
                                               placeholder={'СУМ'}
                                               keyboardType = 'numeric'
                                               placeholderTextColor={'rgb(82, 82, 82)'}

                                        // onFocus={ () => this._setFocus() }
                                        // onBlur={ () => this._unsetFocus() }
                                               onChangeText={(text) => {

                                                   if(Number(text)){
                                                       this.setState({sumSaleNumber:Number(text)})
                                                   }
                                                   else{
                                                       this.setState({sumSaleNumber:0})

                                                   }

                                               }}
                                    >
                                    </TextInput>
                                </View>
                            </View>

                            : false
                    }

                    {
                        this.state.proccess ?
                            <View style={{
                                backgroundColor: 'rgb(221, 233, 211)',
                                paddingRight: 5,
                                paddingLeft: 5,
                                marginBottom: 5,
                                borderWidth: 1,
                                borderColor: 'rgb(82, 82, 82)'
                            }}>
                                <View style={{width: '100%', flexDirection: 'row'}}>
                                    <View style={{width: '30%'}}>
                                        <Text>Всего</Text>
                                    </View>

                                    <View style={{width: '70%', alignItems: 'flex-end'}}>
                                        <Text>{Number(this.state.sumWeight).toFixed(2)} гр. / {this.state.count} шт.
                                            / {this.state.sumPrice} сум</Text>

                                    </View>
                                </View>
                                <View style={{width: '100%', flexDirection: 'row'}}>
                                    <View style={{width: '30%'}}>
                                        <Text>Скидка</Text>
                                    </View>

                                    <View style={{width: '70%', alignItems: 'flex-end'}}>
                                        <Text>{ Number(this.state.sumSaleNumber) + Number(this.getProcentSalesForAllArticles(Number(this.state.saleForArticles), this.props.basket))+ Number(this.getSalesForAllArticlesList())} сум</Text>

                                    </View>
                                </View>
                                <View style={{width: '100%', flexDirection: 'row'}}>
                                    <View style={{width: '50%'}}>
                                        <Text style={{fontWeight: 'bold'}}>Цена после скидки</Text>
                                    </View>

                                    <View style={{width: '50%', alignItems: 'flex-end',}}>
                                        <Text style={{fontWeight: 'bold'}}>{Number(this.state.sumWeight).toFixed(2)} гр.
                                            / {this.state.count} шт. / { Number(this.state.sumPrice) -  Number(this.state.sumSaleNumber) - Number(this.getProcentSalesForAllArticles(this.state.saleForArticles, this.props.basket))- Number(this.getSalesForAllArticlesList()) } сум</Text>

                                    </View>
                                </View>
                            </View>
                            :
                            false
                    }
                    {

                        this.state.proccess ?
                            <CheckoutBottomMenu callback={this.setCashType} index={this.state.cashType}/>
                            :
                            false
                    }
                    {

                        this.state.proccess ?
                            <View style={{width: '90%', height: 40, marginTop: 5, alignItems: 'center'}}>

                                <TextInput
                                    style={{
                                        backgroundColor: '#fff',
                                        height: '100%',
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                    placeholdeText
                                    value={this.commentsForArticles}
                                    placeholder={'Комментарии к продаже'}
                                    placeholderTextColor={'rgb(82, 82, 82)'}
                                    // onFocus={ () => this._setFocus() }
                                    // onBlur={ () => this._unsetFocus() }
                                    onChangeText={(text) => this.setcommentsForArticles(text)}
                                >
                                </TextInput>
                            </View>
                            : false
                    }
                    {

                        this.state.proccess ?
                            <View style={{width: '90%', height: 40, marginTop: 5, alignItems: 'center'}}>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'rgb(126,167,86)',
                                        width: '100%',
                                        height: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => {
                                        this.addOrder(this.props.address, this.props.token)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Оформить продажу</Text>

                                </TouchableOpacity>
                            </View>
                            :
                            false
                    }
                    <Text></Text>


                </KeyboardAvoidingView>

            );
        }
    }
}

const mapStateToProps = function(store) {
    return {
        basket: store.basket
    };
}



export default connect(mapStateToProps)(Checkout)


const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 10,
        flex: 1,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        color: '#000',
        backgroundColor:'#fff',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#666',
        borderRadius: 8,
        color: '#000',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
