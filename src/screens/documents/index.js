import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {LoginSubmitButton, LoginUserInput} from "../../styles";
import {Svg} from 'expo';
import { Button } from 'nachos-ui'



export default class Documents extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>Article</Text>
                <Button>Button</Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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