
import { item } from '../../models/item'
import { CART_ACTIONS } from '../Actions/CartActions'

interface initialState {
    item: item[],
    total: number,
}

const init: initialState = {
    item: [],
    total: 0,
}

const CartReducer = (state: initialState = init
    , action: any) => {
    switch (action.type) {
        case CART_ACTIONS.ADD:
            const index = state.item.findIndex((e: item) => e.id === action.item.id)
            if (index === -1)
                return { item: [...state.item, action.item], total: action.item.price + state.total }
            else {
                var temp: item[] = [...state.item]
                temp[index].count += action.item.count
                return { item: temp, total: action.item.price + state.total }
            }
        case CART_ACTIONS.DELETE:
            const indexOfItem = state.item.findIndex((e: item) => e.id === action.itemId)
            return { item: state.item.filter((e: item) => e.id !== action.itemId), total: state.total - state.item[indexOfItem].price }
        case CART_ACTIONS.EMPTY:
            return { item: [], total: 0, }
        case CART_ACTIONS.INCREASE_COUNT:
            const indexOfCountIncreaseItem = state.item.findIndex((e: item) => e.id === action.itemId)
            if (indexOfCountIncreaseItem !== -1) {
                temp = [...state.item]
                if (action.newCount < state.item[indexOfCountIncreaseItem].count) {
                    temp[indexOfCountIncreaseItem].count = action.newCount
                    return { item: temp, total: state.total - (state.item[indexOfCountIncreaseItem].price * action.newCount) }
                }
                else {
                    let total = temp[indexOfCountIncreaseItem].price * temp[indexOfCountIncreaseItem].count
                    let newTotal = (state.item[indexOfCountIncreaseItem].price * action.newCount)
                    temp[indexOfCountIncreaseItem].count = action.newCount
                    return {
                        item: temp, total: state.total + newTotal - total
                    }
                }
            }
            break;
        default:
            return state
    }
}

export default CartReducer