// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const CatalogElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'3.5rem',
        justifyContent: 'flex-start',
        flexDirection:'row',
        margin:'0.7rem',
    },
    elementIconContainer: {
        alignItems: 'flex-start',
        width:'1.563rem',
        height:'100%',
        justifyContent: 'center',

    },
    elementTitleContainer: {
        alignItems: 'flex-start',
        width:'7.563rem',
        height:'100%',
        justifyContent: 'center',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        width:'30%',
        height:'100%',
        justifyContent: 'center',

    },
    elementTitleText: {
        fontWeight:'bold',
        fontSize:'1rem'
    },
    elementDescriptionText: {
        fontSize:'0.9rem'
    },
    elementImageContainer: {
        width: '3.5rem',
        height: '3.5rem',
        marginRight:'0.7rem',

    },
    elementBandleStyle:{
        left: '-1.4rem'
    }
});