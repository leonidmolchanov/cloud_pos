// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const FilterSelectStyle = EStyleSheet.create({
    container: {
        width:'100%',
        height:80,
        paddingTop:10
    },
    headContainer: {
        width:'100%',
        height:'40%'
    },
    headLabelText: {
        fontWeight:'bold',
        color:'#666'

    },
    bodyContainer: {
        width:'100%'
    },
    bodyLeftContainer: {
        width:'50%',
        height:'100%',
        paddingRight:20
    },
    bodyLeftContainerInputStyle: {
        color:'#666'
    },
    bodyRightContainer: {
        width:'50%',
        height:'100%'
    },

});