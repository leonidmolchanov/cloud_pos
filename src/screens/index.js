import React, {Component} from 'react';

import {createAppContainer, createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Main from './main/';
import Articles from './articles/';
import ArticlesCard from './articles/card';
import Checkout from './checkout'
import Documents from "./documents";
import Catalog from "./catalog";
import FilterScreen from "./filter";
import Sales from "./sales"
import More from "./more"
import {tabBarOptions} from './../styles/index.js'
import {fromLeft, zoomIn, zoomOut} from 'react-navigation-transitions'
import {SummaryIcon, ServiceIcon, TicketIcon, RecommendationIcon, JournalIcon, MoreIcon, DownloadIcon, UploadIcon, ReportIcon, ProductIcon} from "../library/icons";
import EStyleSheet from "react-native-extended-stylesheet";
import {View} from "react-native";
import {CatalogElement} from "../library/components";


export class Nav extends Component {
    constructor(props) {
        super(props);
this.state={
    basket:[],
    screen:false,
    filter:{

        filterPriceMin:false,
        filterPriceMax:false,
        filterCategory:false,
        filterSex:false,
        filterType:false,
        filterWidthMin:false,
        filterWidthMax:false,
        filterPoint:false,
        filterSaler:false,
        filterShop:false,
        filterIron:false,
        filterZero:true
    }
}


    }

    addInBasket=(item,navigator)=>{
        let basket = this.state.basket
        basket.push(item)

            this.setState(
                {basket: basket,
                //
                }
            )


    }
    deleteInBasket=(item,navigator)=>{
        let basket = this.state.basket
       delete basket[item]

        this.setState(
            {basket: basket,

            }
        )


    }
    _changeFilter=(
        filterPriceMin,
        filterPriceMax,
        filterCategory,
        filterSex,
        filterType,
        filterWidthMin,
        filterWidthMax,
        filterPoint,
        filterSaler,
        filterShop,
        filterIron,
        filterZero
    )=>{
        console.log('changeFilter')
        this.setState(
            {
                filter: {
                    filterPriceMin: filterPriceMin,
                    filterPriceMax: filterPriceMax,
                    filterCategory: filterCategory,
                    filterSex: filterSex,
                    filterType: filterType,
                    filterWidthMin: filterWidthMin,
                    filterWidthMax: filterWidthMax,
                    filterPoint: filterPoint,
                    filterSaler: filterSaler,
                    filterShop: filterShop,
                    filterIron: filterIron,
                    filterZero: filterZero,
                }
            }
        )
    }
    _bottomNavigator = createMaterialTopTabNavigator({

            catalog: {
                screen: props => (<Catalog basket = {this.state.basket} filter={this.state.filter} screen={this.state.screen} address={this.props.address} token = {this.props.token} content={this.props.content} {...props}/>),
                navigationOptions: () => ({
                    title: 'Товары',
                    tabBarIcon: ({tintColor}) => (
                        < ProductIcon width={3.125 * EStyleSheet.value('$remJsx')} height={3.125 * EStyleSheet.value('$remJsx')} x={20} y={30} viewBox={"0 0 42 42"} fill={"#000"}/>

                    )
                })
            },
            sale: {
                screen: props => (<Checkout deleteInBasket={this.deleteInBasket} basket = {this.state.basket} content={this.props.content} {...props}/>),
                navigationOptions: () => ({
                    title: 'Продажа',
                    tabBarIcon: ({tintColor}) => (
                        < UploadIcon width={3.125 * EStyleSheet.value('$remJsx')} height={3.125 * EStyleSheet.value('$remJsx')} x={20} y={30} viewBox={"0 0 130 130"} fill={"#000"}/>

                    )
                })
            },
            repayment: {
                screen: props => (<Articles content={this.props.content} {...props}/>),
                navigationOptions: () => ({
                    title: 'Возврат',
                    tabBarIcon: ({tintColor}) => (
                        < DownloadIcon width={3.125 * EStyleSheet.value('$remJsx')} height={3.125 * EStyleSheet.value('$remJsx')} x={20} y={30} viewBox={"0 0 130 130"} fill={"#000"}/>

                    )
                })
            },

            reports: {
                screen: props => (<Sales content={this.props.content} {...props}/>),
                navigationOptions: {
                    title: 'Отчеты',
                    tabBarIcon: ({tintColor}) => (
                        < ReportIcon width={3.125 * EStyleSheet.value('$remJsx')} height={3.125 * EStyleSheet.value('$remJsx')} x={20} y={50} viewBox={"0 0 300 300"} fill={"#000"}/>
                    )
                }
            },
            more: {
                screen: props => (<More content={this.props.content} {...props}/>),
                navigationOptions: () => ({
                    title: 'Еще',
                    tabBarIcon: ({tintColor}) => (
                        < MoreIcon width={3.125 * EStyleSheet.value('$remJsx')} height={3.125 * EStyleSheet.value('$remJsx')} x={20} y={30} viewBox={"0 0 130 130"} fill={"#000"}/>
                    )
                })
            }
        },

        {
            tabBarOptions: tabBarOptions,

            tabBarPosition: 'bottom',
            swipeEnabled: false

        }
    )


    _StackNavigator = createStackNavigator({
        global: {
            screen: this._bottomNavigator,
            headerMode: 'none',
            navigationOptions: {
                header: null,
            }
        },
        filter: {
            screen: props => (<FilterScreen screen={this.state.screen} filter={this.state.filter} token = {this.props.token} address={this.props.address} content={this.props.content} changeFilter={this._changeFilter} {...props}/>),
            headerMode: 'none',
            navigationOptions: {
                tabBarVisible: true,
                title: 'Фильтр',
                header: null,
                tabBarIcon: ({tintColor}) => (
                    false
                )
            }
        },
        articles: {
            screen: props => (<Articles filter={this.state.filter} address={this.props.address} token = {this.props.token} content={this.props.content} {...props}/>),
            headerMode: 'none',
            navigationOptions: {
                tabBarVisible: true,
                title: 'Товары',
                header: null,
                tabBarIcon: ({tintColor}) => (
                    false
                )
            }
        },
        articleCard: {
            screen: props => (<ArticlesCard addInBasket={this.addInBasket} address={this.props.address} token = {this.props.token} content={this.props.content} {...props}/>),
            headerMode: 'none',
            navigationOptions: {
                tabBarVisible: true,
                title: 'Товары',
                header: null,
                tabBarIcon: ({tintColor}) => (
                    false
                )
            }
        },

    });



    render() {
        console.log(this.state)

        const Navigate = createAppContainer(this._StackNavigator
        )

        return (
            <Navigate>
            </Navigate>

        )
    }
};

export default Nav;