import store from './../store'
import {Alert} from 'react-native'
export default function  DeleteBasket  (item) {

    Alert.alert(
        'Удалить',
        'Вы действительно хотите удалить товар ?',
        [
            {text: 'Да', onPress: () => {

                    store.dispatch({
                        type: 'DELETE_BASKET',
                        data:item
                    });
                }},
            {text: 'Нет', onPress: () => {}}
        ],
        {cancelable: false},
    );


    // alert('Товар удален из Корзины!')
}