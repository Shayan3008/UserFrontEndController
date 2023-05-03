import { Category } from '../../models/Category'
import { CATEGORY_ACTIONS } from '../Actions/CategoryAction'

const CategoryReducer = (state: Category[] = [], action: any) => {
    switch (action.type) {
        case CATEGORY_ACTIONS.ADD:
            // console.log('Actions',action.category)
            return [...state, action.category]

        case CATEGORY_ACTIONS.DELETE:
            return state.filter((e: Category) => e.catId !== action.categoryId)
        default:
            return state
    }
}

export default CategoryReducer