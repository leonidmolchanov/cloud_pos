import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';


export const tabBarOptions = EStyleSheet.create({
    labelStyle: {
        flex:1,
        flexGrow: 0,
        marginBottom: '0.625rem',
        fontSize: Platform.OS === 'ios' ? '0.415rem' : '0.415rem',
        textTransform: 'capitalize',
        color: '#000',

    },
    iconStyle:{
        width:'3rem',
        height:'3rem'


    },
    '@media (min-width:768)':{
        iconStyle:{
        },
    },
    style: {
        paddingBottom: 0,
        backgroundColor: 'rgb(223, 223, 223)',
        height: '5.5rem',
        borderTopColor: 'rgb(223, 223, 223)',
        // borderTopWidth: 0
        marginTop: 0,

    },

    showLabel: true,
    showIcon: true,
    activeTintColor: '#000', // цвет активного значка
    inactiveTintColor: '#000'
});

export const tabBarOptionsHide = EStyleSheet.create({
    labelStyle: {
        flex:1,
        flexGrow: 0,
        marginBottom: '0.625rem',
        fontSize: Platform.OS === 'ios' ? '0.415rem' : '0.415rem',
        textTransform: 'capitalize',
        color: '#000',

    },
    iconStyle:{
        width:'3rem',
        height:'3rem'


    },
    '@media (min-width:768)':{
        iconStyle:{
        },
    },
    style: {
        paddingBottom: 0,
        backgroundColor: 'rgb(223, 223, 223)',
        height: '0rem',
        borderTopColor: 'rgb(223, 223, 223)',
        // borderTopWidth: 0
        marginTop: 0,

    },

    showLabel: true,
    showIcon: true,
    activeTintColor: '#000', // цвет активного значка
    inactiveTintColor: '#000'
});