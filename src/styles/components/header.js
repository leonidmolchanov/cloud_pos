// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';


export const HeaderStyle = EStyleSheet.create({
    containerStyle: {
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#cbcbcb',
        height: '6rem'

    },
    userIcon: {
        // marginLeft: 10,
        // marginTop: 20,
        width: '0.8rem',
        height: '0.8rem'
    },
    chatIcon: {
        // marginRight: -10,
        // marginTop: 20
        width: '0.8rem',
        height: '0.8rem'
    },
    centerComponentStyle: {
        fontFamily: 'Museo-sans-cyrl1',
        color: 'rgb(102, 102, 102)',
        fontSize: '0.9rem',
        // marginTop: '0rem',
        paddingTop: '1.25rem'

    },

    containerHeaderImageChat:{
        width: '3.125rem',
        height: '3.375rem'

    },
    containerHeaderImageUser:{
        width: '3.375rem',
        height: '3.375rem'
    },


});