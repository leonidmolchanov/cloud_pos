import React from 'react';
import Login from './src/screens/login'
import {Dimensions} from 'react-native';
import {Font, Permissions} from 'expo';
import Nav from './src/screens'

import EStyleSheet from 'react-native-extended-stylesheet';
import { ThemeProvider } from "nachos-ui";



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
auth=(token, address)=>{
    console.log(token)
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
                <ThemeProvider>
                    <Nav address={this.state.address} token={this.state.token} />
                </ThemeProvider>
                :
                <Login callback={this.auth}/>
            :
false


    );
  }
}

