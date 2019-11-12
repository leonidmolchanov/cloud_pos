// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const FilterDblInputStyle = EStyleSheet.create({
    container: {
        width:'100%',
        height:'5.6rem'
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
        width:'100%',
        flex:1,
        height:'60%',
        flexDirection:'row'
    },
    bodyLeftContainer: {
        width:'50%',
        height:'100%',
        paddingRight:'1.4rem'
    },
    bodyLeftContainerInputStyle: {
        color:'#666'
    },
    bodyRightContainer: {
        width:'50%',
        height:'100%'
    },
});