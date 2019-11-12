// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const loginHeaderStyle = EStyleSheet.create({
    container:{
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textContainer: {
        width:'60%'
    },
   textLabel: {
       fontFamily: 'lobster',
       fontSize: '2.363rem'
    }
});