// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const BasketElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:120,
        justifyContent: 'flex-start',
        flexDirection:'row',
        margin:0
    },
    elementIconContainer: {
        alignItems: 'center',
        width:'5%',
        height:'100%',
        justifyContent: 'center',
    },
    elementTitleContainer: {
        alignItems: 'flex-start',
        width:'55%',
        height:'100%',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        width:'25%',
        height:'100%',
    },
    elementTitleText: {
        fontSize:15,
        fontWeight: 'normal'
    },
    elementTitleTextBold: {
        fontSize:15,
        fontWeight: 'bold'
    },
    elementDescriptionText: {
        fontSize:16
    },
    elementImageContainer: {
        alignItems:'center',
        justifyContent: 'center',
        width: 50,
        height: 50
    }
});