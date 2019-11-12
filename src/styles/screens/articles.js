import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';


export const articlesPage = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(223, 223, 223)',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',

    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        width:'100%',
        height:'100%',
        justifyContent: 'flex-start',
    },
    filterContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'10%',
        justifyContent: 'flex-start',
        flexDirection:'row'
    },
    filterInputContainer: {
        alignItems: 'center',
        width:'90%',
        height:'100%',
        justifyContent: 'center',
    },
    filterIconContainer: {
        alignItems: 'center',
        width:'10%',
        height:'100%',
        justifyContent: 'center',
    },
    informContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:'10%',
        justifyContent: 'flex-start',
        flexDirection:'row'
    },
    informLeftContainer: {
        alignItems: 'center',
        width:'40%',
        height:'100%',
        justifyContent: 'center',
    },
    informRightContainer: {
        alignItems: 'center',
        width:'60%',
        height:'100%',
        justifyContent: 'center',
    },
    elementContainer: {

        alignItems: 'flex-start',
        width:'100%',
        height:50,
        justifyContent: 'flex-start',
        flexDirection:'row'
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
    dividerStyle:{
        backgroundColor: 'rgb(80,80,80)'
        , width:'94%'
    },
    dividerCardStyle:{
        backgroundColor: 'rgb(80,80,80)'
        , width:'100%',
        marginBottom:'0.7rem'
    },
    ScrollViewStyle:{
        paddingTop:'0.7rem',
        width:'100%'
    },
    cardContainer:{
        width:'100%',
        paddingTop:'0.7rem',
        height:'100%',
        backgroundColor:'#fff',
        borderRadius:'1.4rem'
    },
    cardSubContainer:{
        width:'100%',
        height:'10rem',
        flexDirection:'row'
    },
    cardSubContainerLeft:{
        width:'15%',
        height:'100%'
    },
    cardSubContainerCenter:{
        width:'60%',
        height:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    cardSubContainerRight:{
        width:'20%',
        height:'100%',
        alignItems:'flex-end'
    },
    cardScroll:{
            width:'100%',
        paddingTop:'0.7rem'
    },
    cardImage:{
        height: '10rem',
        width: '10rem'

    },
    cardDescriptionContainer:{
        width:'100%',
        height:'60%',
        paddingTop:'0.7rem',
        paddingBottom:'0.7rem'
    }
});