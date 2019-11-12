import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,AsyncStorage , KeyboardAvoidingView} from 'react-native';
import {LoginSubmitButton, LoginUserInput, loginPage} from "../../styles";
import {Svg} from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import {LoginHeader, LoginInput, LoginSubmit} from "../../library/components";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            password: "",
            phone: "",
            error:false
        }
    }
    _changeAddress=(text)=>{
        this.setState({address:text})
    }
    _changePhone=(text)=>{
        this.setState({phone:text})
    }
    _changePassword=(text)=>{
        this.setState({password:text})
    }

    async componentDidMount() {
        await AsyncStorage.getItem('address', (err, result) => {
            if (result) {
                this.setState({address: result})
            }
        });
        await AsyncStorage.getItem('phone', (err, result) => {
            if (result) {
                this.setState({phone: result})
            }
        });
        await AsyncStorage.getItem('password', (err, result) => {
            if (result) {
                this.setState({password: result})
            }
        });

        if (this.state.address && this.state.phone && this.state.password) {
            if (this.state.address !== '' && this.state.phone !== '' && this.state.password !== '') {
                this._submitProc(this.state.address, this.state.phone, this.state.password)
            }
        }
    }




    _submitProc = (address, phone, password)=>{

        let _storeData = async (address, phone, password) => {
            try {
                await AsyncStorage.setItem('address',address);
            } catch (error) {
                // Error saving data
            }
            try {
                await AsyncStorage.setItem('phone',phone);
            } catch (error) {
                // Error saving data
            }
            try {
                await AsyncStorage.setItem('password',password);
            } catch (error) {
                // Error saving data
            }

        }

        let body = {
            username:phone,
            password:password
        }
        fetch('http://'+address+'/index.php?route=rest/admin_security/login', {method: 'POST',body:JSON.stringify(body),headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then( (response) =>{
                if(response._bodyInit){
                    if(JSON.parse(response._bodyInit)){
                       let content = JSON.parse(response._bodyInit)
if(content.success==1){
    fetch('http://'+address+'/index.php?route=rest/admin_security/authed',
        {method: 'POST',body:JSON.stringify({session:content.data.session}),headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
        .then((response)=> {
            if(response._bodyInit) {
                if (JSON.parse(response._bodyInit)) {
                    let contentNew = JSON.parse(response._bodyInit)
                    if (contentNew.success == 1) {
                        _storeData(address, phone, password)
                        this.props.callback(contentNew.data.token, address);
                    }
                }
            }



        }).catch(()=> {
        console.log('err')
        _storeData('', '', '')

        this.setState({error:true})
    })
}
else{
    _storeData('', '', '')

    this.setState({error:true})

}


                    }
                }
            }).catch((err)=> {
            this.setState({error:true})
            _storeData('', '', '')
console.log(err)
            console.log('err')
        })
    }


    render() {
        return (
            <KeyboardAvoidingView style={loginPage.containerSwipe} keyboardVerticalOffset={-80} contentContainerStyle={loginPage.containerSwipe} behavior="position" enabled>
                <View style={loginPage.headerContainer}>
                  <LoginHeader />
                </View>
                <View style={loginPage.addressContainer}>
                    <LoginInput error ={this.state.error} change={this._changeAddress} value={this.state.address} placeholder={'Адрес проекта'} />
                </View>
                <View style={loginPage.phoneContainer}>
                    <LoginInput error ={this.state.error} change={this._changePhone} value={this.state.phone} placeholder={'Телефон'} />

                </View>
                <View style={loginPage.passwordContainer}>
                    <LoginInput error ={this.state.error} secureTextEntry={true} change={this._changePassword} value={this.state.password} placeholder={'Пароль'} />

                </View>
                <View style={loginPage.submitContainer}>
                    <LoginSubmit callback={this._submitProc} address={this.state.address} phone={this.state.phone} password={this.state.password}/>
                </View>
                <View style={loginPage.footerContainer}>
                    <Text>www.cloudpos.uz</Text>
                </View>

            </KeyboardAvoidingView>
        );
    }
}
