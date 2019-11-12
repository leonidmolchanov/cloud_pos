import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Switch } from 'react-native';
import {FilterPage, FilterSubmitButton} from "../../styles";
import {Svg} from 'expo';
import { Button, Input , Switcher, SegmentedControlButton} from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {Filter, ArticleElement, Inform, FilterTopMenu, FilterDblInput, FilterSelect, FilterZeroSlider, FilterSubmitButtonPage} from '../../library/components'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

const sex = [
    {
        label: 'Муж',
        value: 6,
    },
    {
        label: 'Жен',
        value: 7,
    }
];
const iron = [
    {
        label: 'Золото',
        value: 6,
    },
    {
        label: 'Паладий',
        value: 7,
    }
    ,

    {
        label: 'Уран',
        value: 10,
    }
    ,
    {
        label: 'Ртуть',
        value: 11,
    }
];
const shop = [
    {
        label: '1-ый',
        value: 6,
    },
    {
        label: '2-ой',
        value: 7,
    }
    ,
    {
        label: '3-ий',
        value: 10,
    }

];
const saler = [
    {
        label: '1-ый',
        value: 6,
    },
    {
        label: '2-ой',
        value: 7,
    }
    ,
    {
        label: '3-ий',
        value: 10,
    }

];
 let listCategory=[]
let  filterGroup=[]

export default class FilterScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterPriceMin:this.props.filter.filterPriceMin,
            filterPriceMax:this.props.filter.filterPriceMax,
            filterCategory:this.props.filter.filterCategory,
            filterSex:this.props.filter.filterSex,
            filterType:this.props.filter.filterType,
            filterWidthMin:this.props.filter.filterWidthMin,
            filterWidthMax:this.props.filter.filterWidthMax,
            filterPoint:this.props.filter.filterPoint,
            filterSaler:this.props.filter.filterSaler,
            filterShop:this.props.filter.filterShop,
            filterIron:this.props.filter.filterIron,
            filterZero:this.props.filter.filterZero,
            category:false,
            store:[],
            filterGroup:[]
        }
    }
setFilter=(type,value)=>{
    switch(type) {
        case 'priceMin':
            value.replace(/[^0-9]/g, '')
            this.setState({filterPriceMin: value.replace(/[^0-9]/g, '')})
            break;
        case 'priceMax':

            this.setState({filterPriceMax: value.replace(/[^0-9]/g, '')})
            break
        case 'widthMin':
            value.replace(/[^0-9]/g, '')
            this.setState({filterWidthMin: value.replace(/[^0-9]/g, '')})
            break;
        case 'widthMax':

            this.setState({filterWidthMax: value.replace(/[^0-9]/g, '')})
            break
        case 'category':

            this.setState({filterCategory: value})
            break
        case 'saler':

            this.setState({filterSaler: value})
            break
        case 'shop':

            this.setState({filterShop: value})
            break
        case 'iron':

            this.setState({filterIron: value})
            break
        case 'zero':

            this.setState({filterZero: value})
            break
        case 'sex':

            this.setState({filterSex: value})
            break
        default : false
    }
}


    async componentDidMount() {
        arrayContent=[]

        await fetch('http://'+this.props.address+'/index.php?route=rest/category_admin/category?',
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
                            this.setState({category:content.data})
                        }
                    }
                }

            }).catch(function (err) {
                console.log(err)
            })
        await fetch('http://'+this.props.address+'/index.php?route=rest/store_admin/store',
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
                            content.data.forEach((item)=>{
                                this.setState({
                                    store:{
                                        label:item.name,
                                        value:item.store_id
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
        await fetch('http://'+this.props.address+'/index.php?route=rest/filter_admin/filters&limit=1000&page=1',
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


                            }
                        }
                    }
                }

            }).catch(function (err) {
                console.log('err')
                console.log(err)
            })
    }


    render() {
        if(this.state.category){
            listCategory = this.state.category.map((item)=>{
                return({label:item.name,value:item.category_id})

            })
        }
        if(this.state.filterGroup) {
            filterGroup=[];
            this.state.filterGroup.forEach((item, key) => {
                if (!filterGroup[item.filter_group_id]) {
                    filterGroup[item.filter_group_id] = []
                }
                else {
                    filterGroup[item.filter_group_id].push({label: item.name, value: item.filter_id})
                }
            })
        }

        const options = [{ value: 0, label: '0' }, { value: 1, label: '1' }, { value: 2, label: '2' }]
        return (
            <View style={FilterPage.container}>
                <GlobalHeader leftIcon={true} navigation={this.props.navigation} title={'Фильтр'} />
                <View style={FilterPage.contentContainer}>
                    <FilterTopMenu />
                    <ScrollView style={FilterPage.ScrollViewStyle} >
< FilterDblInput title={'Цена'}
                 typeMin={'priceMin'}
                 typeMax={'priceMax'}
                 min={this.state.filterPriceMin}
                 max={this.state.filterPriceMax}
                 setFilter={this.setFilter} placeholderLeft={'От'} placeholderRight={'До'} />
                       <FilterSelect value={this.state.filterCategory ? this.state.filterCategory : ''}
                                     list={listCategory}
                                     title = {'Категория'}
                                     placeholderText={'Выбрать'}
                                     setFilter={this.setFilter}
                                     type = 'category'
                       />
                        <FilterSelect  value={this.state.filterSex ? this.state.filterSex : ''}
                                       list={filterGroup[4]}
                                       title = {'Пол'}
                                       placeholderText={'Выбрать'}
                                       setFilter={this.setFilter}
                                       type = 'sex'
                        />
                        <FilterSelect value={this.state.filterIron ? this.state.filterIron : ''}
                                      title = {'Тип металла'}
                                      placeholderText={'Выбрать'}
                                         list={filterGroup[3]}
                                       setFilter={this.setFilter}
                                      type = {'iron'}
                        />
                        < FilterDblInput

                            typeMin={'widthMin'}
                            typeMax={'widthMax'}
                            setFilter={this.setFilter}
                            min={this.state.filterWidthMin}
                            max={this.state.filterWidthMax}
                            title={'Вес'} placeholderLeft={'От'} placeholderRight={'До'} />
                        <FilterSelect
                            value={this.state.filterShop ? this.state.filterShop : ''}
                            setFilter={this.setFilter}
                            title = {'Склад/магазин'}
                            placeholderText={'Выбрать'}
                            list={this.state.store}
                            type = 'shop'/>
                        <FilterSelect
                            value={this.state.filterSaler ? this.state.filterSaler : ''}
                            setFilter={this.setFilter}
                            title = {'Поставщик'}
                            placeholderText={'Выбрать'}
                            list={saler}
                            type = 'saler'/>

<FilterZeroSlider setFilter={this.setFilter}
                  type = 'zero'
                  value={this.state.filterZero}
/>

                        <FilterSubmitButtonPage changeFilter={()=>{this.props.changeFilter(
                            this.state.filterPriceMin,
                            this.state.filterPriceMax,
                            this.state.filterCategory,
                            this.state.filterSex,
                            this.state.filterType,
                            this.state.filterWidthMin,
                            this.state.filterWidthMax,
                            this.state.filterPoint,
                            this.state.filterSaler,
                            this.state.filterShop,
                            this.state.filterIron,
                            this.state.filterZero
                        )}} />
                        <View style={FilterPage.nullView}>

                        </View>
                    </ScrollView>
                </View>

                {/*<Text>Article</Text>*/}
                {/*<Button>Button</Button>*/}


            </View>
        );
    }


}

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
const placeholder = {
    label: 'Select a sport...',
    value: null,
    color: '#9EA0A4',
};