import React from "react";
import {TouchableOpacity, Image} from 'react-native'
import {Header} from 'react-native-elements'
import {UserIcon, BackIcon} from "../../icons";
import SmsHeader from './sms.component'
import {HeaderStyle, ScreenSummary} from './../../../styles'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navigator = this.props.navigation;
        return (
            <Header
                containerStyle={HeaderStyle.containerStyle}
                leftContainerStyle={HeaderStyle.userIcon}
                rightContainerStyle={HeaderStyle.chatIcon}
                leftComponent={
                    navigator.state.routeName === 'profile' || navigator.state.routeName === 'chat' ?
                        <TouchableOpacity onPress={() => {
                            navigator.goBack(null)
                        }}>
                            < BackIcon width={50} height={50} x={0} y={0} viewBox={"0 0 180 180"} fill={"#000"}/>
                        </TouchableOpacity>

                        :
                        <TouchableOpacity onPress={() => {
                            navigator.navigate('profile')
                        }}>

                            < UserIcon width={1.875*EStyleSheet.value('$remJsx')} height={1.875*EStyleSheet.value('$remJsx')} x={0} y={0} viewBox={"0 0 100 100"} fill={"#000"}/>
                        </TouchableOpacity>
                }
                centerComponent={{text: this.props.title, style: HeaderStyle.centerComponentStyle}}
                rightComponent={
                    <TouchableOpacity onPress={() => {
                        navigator.navigate('chat')
                    }}>


                        {/*<SmsHeader width={3.6*EStyleSheet.value('$remJsx')} height={3.2*EStyleSheet.value('$remJsx')} x={20} y={20} bundle={43} viewBox={"0 0 100 100"}*/}
                        <SmsHeader width={2*EStyleSheet.value('$remJsx')} height={1.8*EStyleSheet.value('$remJsx')} x={10} y={10} bundle={43} viewBox={"0 0 100 100"}
                                   fill={"#000"}/>
                    </TouchableOpacity>}

            />
        )

    }
}