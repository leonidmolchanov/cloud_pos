import React from 'react';
import Login from './src/screens/login'
import {Dimensions, AsyncStorage} from 'react-native';
import {Font, Permissions} from 'expo';
import Nav from './src/screens'
import EStyleSheet from 'react-native-extended-stylesheet';
import { ThemeProvider } from "nachos-ui";
import store from './src/store'
import {Provider} from 'react-redux';


// define REM depending on screen width
const {width} = Dimensions.get('window');
const rem = width < 325 ? 14 : width < 340 ? 16 : width < 560 ? 16 : width < 768 ? 18 : width < 2000 ? 25 : 25;
// const rem = (width < 340) ? 16 : 16;




// calc styles
EStyleSheet.build({
    '@media ios': {
        $rem: rem,
        $remJsx: rem,
    },
    '@media android': {
        $rem: rem,
        $remJsx: rem,
    },
});
export default class App extends React.Component {
constructor(props){
    super(props)
    this.state={
        loading:false,
        auth:false,
        token:false
    }
}
logOut= async()=>{
    await AsyncStorage.removeItem('address', (err, result) => {

    });
    await AsyncStorage.removeItem('phone', (err, result) => {

    });
    await AsyncStorage.removeItem('password', (err, result) => {

    });
    this.setState({auth:false,
    token:false})
}
auth=(token, address)=>{
    this.setState({auth:true,
    token:token,
    address:address})
}
    async componentDidMount()
    {
        await
            Font.loadAsync({
                'arial': require('./src/library/fonts/arial.ttf'),
                'lobster': require('./src/library/fonts/lobster.ttf'),
            });
        this.setState({ loading: true });


    }
  render() {
    return (
        this.state.loading ?
            this.state.auth ?
<Provider store={store}>
                <ThemeProvider>
                    <Nav logOut={this.logOut} address={this.state.address} token={this.state.token} />
                </ThemeProvider>
</Provider>

                :
                <Login callback={this.auth}/>
            :
false


    );
  }
}

