import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';


export const tabBarOptions = EStyleSheet.create({
    labelStyle: {
        flex:1,
        flexGrow: 0,
        marginTop: '0.625rem',
        fontSize: Platform.OS === 'ios' ? '0.550rem' : '0.450rem',
        textTransform: 'capitalize',
        color: '#333333',

    },
    iconStyle:{
        marginBottom: '0.625rem',
    },
    '@media (min-width:768)':{
        iconStyle:{
            marginTop: '0.8125rem'
        },
    },
    style: {
        paddingBottom: 0,
        backgroundColor: '#d6d6d6',
        height: '4.5rem',
        borderTopColor: '#d6d6d6',
        // borderTopWidth: 0
        marginTop: -10,

    },

    showLabel: true,
    showIcon: true,
    activeTintColor: '#000', // цвет активного значка
    inactiveTintColor: '#8e8e93'
});