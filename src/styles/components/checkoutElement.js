// import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export const CheckoutElementStyle = EStyleSheet.create({
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'6.5rem',
        justifyContent: 'flex-start',
        flexDirection:'row',
    },
    elementContainerGlobal:{
        marginBottom:'0.7rem'
    },
    elementIconContainer: {
        alignItems: 'center',
        width:'5%',
        height:'100%',
        justifyContent: 'center',
    },
    elementTitleContainer: {
        alignItems: 'flex-start',
        width:'75%',
        height:'100%',
    },
    elementDescriptionContainer: {
        alignItems: 'flex-end',
        justifyContent:'center',
        width:'15%',
        height:'100%',
    },
    elementTitleText: {
        fontSize:'0.8rem',
        fontWeight: 'normal'
    },
    elementTitleTextBold: {
        fontSize:'0.8rem',
        fontWeight: 'bold'
    },
    elementDescriptionText: {
        fontSize:'0.8rem'
    },
    elementImageContainer: {
        alignItems:'center',
        justifyContent: 'center',
        width: '4.7rem',
        height: '4.7rem',
        borderRadius:'2.35rem',
        marginRight:'0.7rem',

    },
    elementSaleContainer:{
        width:'100%',
        height:'2.8rem',
        marginTop:'0.2rem' ,
        flexDirection:'row'
    },
    elementSaleContainerSale:{
        width:'45%',
        alignItems:'flex-end',
        paddingRight:'1.4rem',
        justifyContent:'center'
    },
    elementInputContainer:{
        width:'25%',
        borderWidth:1,
        borderRadius:'2.1rem',
        borderColor:'rgb(82, 82, 82)',
        backgroundColor:'#fff', margin:'0.23rem'
    },
    elementInputStyle:{
        height:'100%',
        textAlign: 'center'
    }
});