
import { Category } from '../../models/Category'
import { item } from '../../models/item'
import { ITEM_ACTIONS } from '../Actions/itemAction'

interface initialState {
    item: item[],
    AllItems: item[]
}

const init: initialState = {
    item: [],
    AllItems: []
}

const sortingHelper = (state: initialState, sortingType: string) => {
    switch (sortingType) {
        case "Original":
            return {
                item: state.AllItems,
                AllItems: state.AllItems,
            }
        case "Price":
            return {
                item: [...state.item].sort((a, b) =>
                    a.price - b.price
                ),
                AllItems: state.AllItems,
            }
        case "Favourite":
            let temp: item[] = []
            for (let i: number = 0; i < state.AllItems.length; i++) {
                if (state.AllItems[i].favourite)
                    temp.push(state.AllItems[i])
            }
            console.log(temp)
            return {
                item: temp,
                AllItems: state.AllItems,
            }
        default:
            break;
    }
}

const itemByCategory = (state: initialState, category: Category[]) => {
    console.log(category)
    if (category.length === 0)
        return {
            item: state.AllItems,
            AllItems: state.AllItems,
        }
    let temp: item[] = []
    let currentList: item[] = [...state.AllItems]
    for (let i: number = 0; i < category.length; i++) {
        for (let j: number = 0; j < currentList.length; j++) {
            if (currentList[j].catId === category[i].catId) {
                temp.push(currentList[j])
            }
        }
    }

    return {
        item: temp,
        AllItems: state.AllItems,
    }
}

const searchItem = (state: initialState, searchString: string) => {
    console.log(searchString)
    if (searchString.length === 0)
        return {
            item: state.AllItems,
            AllItems: state.AllItems,
        }
    return {
        item: state.item.filter(e => e.name.toLowerCase().includes(searchString)),
        AllItems: state.AllItems,
    }
}

const ItemReducer = (state: initialState = init
    , action: any) => {
    console.log(action.type)
    switch (action.type) {
        case ITEM_ACTIONS.GET:
            if (state.AllItems.length === 0)
                return {
                    item: action.item,
                    AllItems: action.item
                }
            return {
                item: action.item,
                AllItems: state.AllItems
            }
        case ITEM_ACTIONS.SORT:
            return sortingHelper(state, action.sortingType)
        case ITEM_ACTIONS.GETBYCATEGORY:
            return itemByCategory(state, action.category)
        case ITEM_ACTIONS.Search:
            return searchItem(state, action.searchString)
        default:
            return state
    }
}

export default ItemReducer