import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, AsyncStorage } from 'react-native';
import {LoginSubmitButton, LoginUserInput, SalesElementStyle, MorePage, CatalogElementStyle} from "../../styles";
import {Svg} from 'expo';
import { Button } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'



export default class More extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: false,
            phone: false,

        }
    }

  async  componentDidMount(){
      login = false
        await AsyncStorage.getItem('phone', (err, result) => {
            if (result) {
                login= result
            }
        });

       await fetch('http://'+this.props.address+'/index.php?route=rest/customer_admin/customers&email='+login,
            {method: 'GET',headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Oc-Restadmin-Id': this.props.token
                }})
            .then(async(response)=> {
                if(response._bodyInit) {
                    if (JSON.parse(response._bodyInit)) {
                        let name=false;
                        let phone =false;
                        let json = JSON.parse(response._bodyInit);
                        if(json.data){
                            let content = json.data;

                            if(content[0]){
                                if(content[0].name){
                                    name = content[0].name
                                }
                                if(content[0].telephone){
                                phone = content[0].telephone
                                }
                                this.setState({name:name,phone:phone})
                            }
                        }
                    }
                }

            }).catch(function (err) {
            console.log(err)
        })

    }
    render() {
        return (
            <View style={MorePage.container}>
                <GlobalHeader title={'Профиль'} />
                <View style={MorePage.contentContainer}>
                    <View style={MorePage.contentContainerSub}>
                        <View style={MorePage.contentContainerSubContent}>
                            <View style={MorePage.contentContainerSubContentImageContainer}>

                                <Image
                                    style={MorePage.contentContainerSubContentImage}
                                    source={require('./../../library/images/avatar.png')}
                                />
                            </View>
                            <View style={MorePage.contentContainerSubDescriptionContainer}>
                                <Text style={MorePage.contentContainerSubDescriptionText}>{this.state.name}</Text>
                                <Text style={MorePage.contentContainerSubDescriptionText}>{this.state.phone}</Text>
                                {/*<Text style={MorePage.contentContainerSubDescriptionText}>Владелец</Text>*/}

                            </View>
                        </View>
                    </View>
                    <View style={MorePage.contentContainerSubButtonContainer}>
                        <View style={MorePage.contentContainerSubButtonContainerSub}>

                            <TouchableOpacity
                                style={MorePage.contentContainerSubButtonStyle}
                                onPress={() => {
                                    this.props.logOut()
                                }}
                            >
                                <Text style={MorePage.contentContainerSubButtonText}>Выйти</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
