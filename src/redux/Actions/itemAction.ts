import { Category } from "../../models/Category"
import { item } from "../../models/item"

const ITEM_ACTIONS = {
    GET: 'GET_ITEMS',
    SORT: "SORT_ITEMS",
    GETBYCATEGORY: "GET_ITEMS_BY_CATEGORY",
    Search: "SEARCH_ITEMS"
}

const getItems = (item: item[]) => {
    // console.log(category)
    return {
        type: ITEM_ACTIONS.GET,
        item: item
    }
}

const sortItems = (sortingType: string) => {
    console.log(sortingType)
    return {
        type: ITEM_ACTIONS.SORT,
        sortingType: sortingType,
    }
}

const getItemsByCategory = (category: Category[]) => {
    return {
        type: ITEM_ACTIONS.GETBYCATEGORY,
        category: category,
    }
}

const SearchItem = (searchString: string) => {
    return {
        type: ITEM_ACTIONS.Search,
        searchString: searchString,
    }
}

export { getItems, sortItems, ITEM_ACTIONS, getItemsByCategory, SearchItem }