import store from './../store'
import {Alert} from 'react-native'
export default function  AddBasket  (item) {

    store.dispatch({
        type: 'UPDATE_BASKET',
        data:item
    });

    Alert.alert('Товар добавлен в Корзину!')
}