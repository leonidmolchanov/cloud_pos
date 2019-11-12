// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const SalesElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'8.4rem',
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
        width:'90%',
        height:'100%',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        width:'35%',
        height:'100%',
    },
    elementTitleText: {
        fontSize:'0.9rem'
    },
    elementDescriptionText: {
        fontSize:'0.9rem'
    },
    elementImageContainer: {
        alignItems:'center',
        justifyContent: 'center',
        width: '3.5rem',
        height: '3.5rem',
        marginRight:'0.7rem',

    }
});