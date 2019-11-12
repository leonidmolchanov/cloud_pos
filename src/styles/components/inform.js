// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';


export const InformStyle = EStyleSheet.create({
    informContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'10%',
        justifyContent: 'flex-start',
        flexDirection:'row'
    },
    informLeftContainer: {
        alignItems: 'flex-start',
        width:'40%',
        height:'100%',
        justifyContent: 'center',
    },
    informRightContainer: {
        alignItems: 'flex-end',
        width:'60%',
        height:'100%',
        justifyContent: 'center',
    },
    informLeftText: {
        fontWeight:'bold'
    },
    informRightText: {
        fontWeight:'bold'
    },
    informBandleStyle:{
        left: -'1.4rem'
    }

});