import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Switch } from 'react-native';
import {FilterPage, FilterSubmitButton} from "../../styles";
import {Svg} from 'expo';
import { Button, Input , Switcher, SegmentedControlButton} from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";
import {Filter, ArticleElement, Inform, FilterTopMenu, UserAddOneInput, FilterSelect, FilterZeroSlider, FilterSubmitButtonPage, UserAddSubmitButtonPage} from '../../library/components'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default class UserAdd extends React.Component {
    constructor(props){
        super(props)
        this.state={
login:'',
            phone:''
        }
    }


    async componentDidMount() {

    }

setLogin=(text)=>{
        this.setState({login:text})
}
    setPhone=(text)=>{
        this.setState({phone:text})
    }

    userAdd=(address, token, login, phone)=>{

         fetch(address + '/index.php?route=rest/customer_admin/customers',
            {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Oc-Restadmin-Id': token
                },
                body:JSON.stringify({
            "firstname": login,
            "lastname": ' User',
            "email": phone+'@cloudpoz.uz',
            "password": "password",
            "confirm": "password",
            "telephone": phone,
            "fax":phone,
            "newsletter": "1",
            "status": "1",
            "approved": "1",
            "safe": "1",
            "customer_group_id": "1",
                })
            })
            .then(async (response) => {
                if (response._bodyInit) {
                    if (JSON.parse(response._bodyInit)) {
                        let content = JSON.parse(response._bodyInit)
                        if (content.success == 1) {

                            this.props.createdUser({id:content.data.id, value:login})

                        }
                    }
                }

            }).catch(function (err) {
                console.log('err')
                console.log(err)
            })


    }
    render() {
        return (
            <View style={FilterPage.container}>
                <GlobalHeader leftIcon={true} goBack={this.props.goBack} navigation={this.props.navigation} title={'Создание пользователя'} />
                <View style={FilterPage.contentContainer}>
                    <ScrollView style={FilterPage.ScrollViewStyle} >
<UserAddOneInput
    placeholder={'Введите логин'}
    value={this.state.login}
    setInput={this.setLogin}
    title={'Логин:'} />
                        <UserAddOneInput
                            placeholder={'Введите телефон'}
                            value={this.state.phone}
                            setInput={this.setPhone}
                            title={'Телефон:'} />

                        <UserAddSubmitButtonPage login={this.state.login}
                        phone={this.state.phone}
                        address={this.props.address}
                        token={this.props.token}
                        addUser={this.userAdd}/>
                    </ScrollView>
                </View>

                {/*<Button>Button</Button>*/}


            </View>
        );
    }


}
