// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const ArticlesElementStyle = EStyleSheet.create({
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
        width:'45%',
        height:'100%',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        width:'35%',
        height:'100%',
    },
    elementTitleText: {
        fontSize:15
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