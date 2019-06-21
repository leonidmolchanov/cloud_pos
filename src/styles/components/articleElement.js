// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const LoginUserInput = EStyleSheet.create({
    container: {
        width: '70%',
        height: '3.438rem',
        // height: 55,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginTop: '1.25rem',
        justifyContent: 'flex-start'
    },

    containerNew:{
        width: '18.88rem',
        height: '4.538rem',
        backgroundColor: '#fff',
        // height: 55,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: '0.55rem',
        justifyContent: 'flex-start',
        marginTop: 0,
    },


    containerInputGroup: {
        position:'relative',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',

    },
    textError:{
        position:'absolute',
        left: 0,
        bottom: '-0.9375rem',
        color: 'red',
        fontSize: '0.625rem',
    },
    containerInputGroupInput: {
        flex: 2,


    },
    containerInputGroupRemember: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: '0.625rem',
        alignItems: 'flex-end'
    },
    containerInputGroupRememberLabel: {
        color: 'rgb(102, 102, 102)',
        fontSize: '0.625rem'
    },
    labelText: {
        color: 'rgb(102, 102, 102)',
        fontSize: '0.75rem',
    },
    textInput: {
        fontSize: '1.575rem',
        marginTop: '1.125rem',
        marginLeft: '0.725rem',
        color: '#000',
        // fontWeight: 'bold'
    },
    textInputName:{
        // marginTop: 20,
    }
});