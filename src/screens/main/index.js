import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {LoginSubmitButton, LoginUserInput} from "../../styles";
import {Svg} from 'expo';
import { Button, Input } from 'nachos-ui'
import GlobalHeader from '../../library/components/headers'
import { Divider } from 'react-native-elements';
import {FilterIcon} from "../../library/icons";


export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterInputValue:''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <GlobalHeader title={'Главная'} />
                <View style={styles.contentContainer}>
                    <View style={styles.filterContainer}>
                        <View style={styles.filterInputContainer}>
                            <Input
                                style={{margin:10, borderRadius:20}}
                                placeholder='Поиск по наименованию, артикулу, баркоду'
                                value={this.state.filterInputValue}
                                onChangeText={value => this.setState({ filterInputValue:value })}
                            />
                        </View>
                        <View style={styles.filterIconContainer}>
                            <FilterIcon width={40} height={40} x={0} y={3} viewBox={"0 0 30 30"} fill={"#000"}/>

                        </View>
                    </View>
                    <Divider style={{ backgroundColor: 'rgb(80,80,80)' , width:'100%'}} />
                    <View style={styles.informContainer}>
                        <View style={styles.informLeftContainer}>
                            <Text style={{fontWeight:'bold'}}>Всего(32)</Text>

                        </View>
                        <View style={styles.informRightContainer}>
                            <Text style={{fontWeight:'bold'}}>50 гр / 4 шт. / 2.555.330 сум</Text>

                        </View>
                    </View>
                    <Divider style={{ backgroundColor: 'rgb(80,80,80)' , width:'100%'}} />
<ScrollView style={{paddingTop:10, width:'100%',}} >
    <View style={styles.elementContainer}>
        <Image
            style={{width: 50, height: 50}}
            source={require('./../../library/images/folder.png')}
        />
        <View style={styles.elementIconContainer}>

        </View>
        <View style={styles.elementTitleContainer}>
            <Text style={{fontWeight:'bold', fontSize:17}}>Кольца (20)</Text>

        </View>
        <View style={styles.elementDescriptionContainer}>
            <Text style={{ fontSize:16}}>550 гр / 1150 шт.</Text>
        </View>
    </View>
</ScrollView>
                </View>

                {/*<Text>Article</Text>*/}
                    {/*<Button>Button</Button>*/}


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
        height:'100%',

    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        width:'94%',
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
});