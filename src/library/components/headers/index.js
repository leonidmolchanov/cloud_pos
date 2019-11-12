import React from "react";
import {TouchableOpacity, Image} from 'react-native'
import {Header} from 'react-native-elements'
import {UserIcon, BackIcon, FilterIcon} from "../../icons";
import SmsHeader from './sms.component'
import {HeaderStyle, ScreenSummary} from './../../../styles'
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements'

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
                leftComponent={ this.props.leftIcon ?
                        <TouchableOpacity style={{width:36, height:36}} onPress={() => {
                            this.props.goBack ?
                                this.props.goBack()
                                :
                            navigator.goBack(null)
                        }}>
                            <Icon
                                name='angle-left'
                                type='font-awesome'
                                color='#000'
                                size={36}
                            />

                        </TouchableOpacity>
                    :
                    false

                }
                centerComponent={{text: this.props.title, style: HeaderStyle.centerComponentStyle}}
                rightComponent={this.props.rightIcon ?
                    <TouchableOpacity onPress={() => {
                        navigator.navigate('filter')

                    }}>
                        < FilterIcon width={50} height={50} x={0} y={15} viewBox={"0 0 50 50"} fill={"#000"}/>
                    </TouchableOpacity>
: false
                }
            />
        )

    }
}