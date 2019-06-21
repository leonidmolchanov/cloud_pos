// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const ArticlesElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:50,
        justifyContent: 'flex-start',
        flexDirection:'row',
        margin:10
    },
    elementIconContainer: {
        alignItems: 'flex-start',
        width:'5%',
        height:'100%',
        justifyContent: 'center',
    },
    elementTitleContainer: {
        alignItems: 'flex-start',
        width:'45%',
        height:'100%',
        justifyContent: 'center',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-start',
        width:'45%',
        height:'100%',
        justifyContent: 'center',
    },
    elementTitleText: {
        fontWeight:'bold',
        fontSize:17
    },
    elementDescriptionText: {
        fontSize:16
    },
    elementImageContainer: {
        width: 50,
        height: 50
    }
});