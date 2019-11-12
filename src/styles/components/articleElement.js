// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const ArticlesElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:120,
        justifyContent: 'flex-start',
        flexDirection:'row',
        margin:'0.7rem',
    },
    elementIconContainer: {
        alignItems: 'center',
        width:'5%',
        height:'100%',
        justifyContent: 'center',
    },
    elementTitleContainer: {
        paddingLeft:'0.7rem',

        alignItems: 'flex-start',
        width:'45%',
        height:'100%',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        width:'30%',
        height:'100%',
    },
    elementTitleText: {
        fontSize:'0.8rem'
    },
    elementDescriptionText: {
        fontSize:'0.8rem'
    },
    elementImageContainer: {
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent: 'center',
        width: '4.7rem',
        height: '4.7rem',
        borderRadius:'2.35rem'

    }
});