import {combineReducers} from "redux";
import Basket from './basket'
import CheckoutSet from './checkoutState'
const allReducers = combineReducers({
    basket: Basket,
    checkoutSet: CheckoutSet

})

export default allReducers;