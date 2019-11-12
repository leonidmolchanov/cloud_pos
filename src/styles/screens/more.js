import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';


export const MorePage = EStyleSheet.create({
    container: {
        backgroundColor: 'rgb(223, 223, 223)',
        flexDirection:'column'

    },
    contentContainer: {
        width:'100%',
        height:'100%'
    },
    contentContainerSub: {
        height:'50%'
    },
    contentContainerSubContent: {
        width:'100%',
        marginTop:'1.4rem',
        height:'4.2rem',
        flexDirection:'row'
    }
    ,
    contentContainerSubContentImageContainer: {
        width:'30%',
        alignItems:'center'
    },
    contentContainerSubContentImage: {
        alignItems:'center',
        justifyContent: 'center',
        width: '7rem',
        height: '7rem',
        borderRadius:'3.5rem',
        marginLeft:'1rem'
    },
    contentContainerSubDescriptionContainer: {
        width:'70%',
        alignItems:'flex-start',
        marginLeft:'1.4rem',
        marginTop:'0.7rem'
    },
    contentContainerSubDescriptionText:{
        fontSize:'1rem',
        margin:'0.5rem'

    },
    contentContainerSubButtonContainer: {
        height:'50%',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    contentContainerSubButtonContainerSub: {
        width:'90%',
        height:'2.8rem',
        marginTop:'6.6rem',
        alignItems:'center'
    },
    contentContainerSubButtonStyle: {
        backgroundColor:'rgb(174,1,0)',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'1.4rem'},
    contentContainerSubButtonText:{
        color:'#fff',
        fontWeight:'bold'
    }
});