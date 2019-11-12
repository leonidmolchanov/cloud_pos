import store from './../store'
import {Alert} from 'react-native'
export default function  ClearBasket  () {

    store.dispatch({
        type: 'CLEAR_BASKET',
    });

    Alert.alert('Заказ успешно создан!')

}