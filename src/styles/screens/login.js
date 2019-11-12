import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';


export const loginPage = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(223, 223, 223)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSwipe: {
        flex: 1,
        backgroundColor: 'rgb(223, 223, 223)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom:'2rem'
    },
    headerContainerSub: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    addressContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    passwordContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});