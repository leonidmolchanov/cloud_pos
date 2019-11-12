// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const BasketElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'4rem',
        justifyContent: 'flex-start',
        flexDirection:'row',
        marginBottom:'3rem'
    },

    elementIconContainer: {
        alignItems: 'center',
        width:'5%',
        height:'100%',
        justifyContent: 'center',
        marginRight:'0.7rem',

    },
    elementTitleContainer: {
        alignItems: 'flex-start',
        width:'55%',
        height:'100%',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        width:'15%',
        height:'100%',
    },
    elementTitleText: {
        fontSize:'0.8rem',
        fontWeight: 'normal'
    },
    elementTitleTextBold: {
        fontSize:'0.8rem',
        fontWeight: 'bold'
    },
    elementDescriptionText: {
        fontSize:'0.8rem'
    },
    elementImageContainer: {
        alignItems:'center',
        justifyContent: 'center',
        width: '4.7rem',
        height: '4.7rem',
        borderRadius:'2.35rem'
    }
});