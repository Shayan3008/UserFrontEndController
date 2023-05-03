
const CART_ACTIONS = {
    ADD: 'ADD_TO_CART',
    DELETE: 'DELETE_FROM_CART',
    EMPTY: 'EMPTY_CART',
    INCREASE_COUNT: 'INCREASE_ITEM_COUNT_IN_CART'
}

const addItemToCart = (item: object) => {
    return {
        type: CART_ACTIONS.ADD,
        item: item,
    }
}

const deleteFromCart = (itemId: number) => {
    return {
        type: CART_ACTIONS.DELETE,
        itemId: itemId
    }
}

const emptyCart = () => {
    return {
        type: CART_ACTIONS.EMPTY
    }
}

const increaseCountInCart = (itemId: number, newCount: number) => {
    // console.log('Count', newCount)
    if (newCount === 0)
        return {
            type: CART_ACTIONS.DELETE,
            itemId: itemId
        }
    else {
        return {
            type: CART_ACTIONS.INCREASE_COUNT,
            itemId: itemId,
            newCount: newCount
        }
    }
}

export { addItemToCart, deleteFromCart, increaseCountInCart, CART_ACTIONS, emptyCart }