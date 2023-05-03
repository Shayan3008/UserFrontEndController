import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
import FrontControllerReducer from "./FrontControllerReducer";
import ItemReducer from "./ItemReducer";
const AllReducers = combineReducers({
    CartReducer: CartReducer,
    CategoryReducer: CategoryReducer,
    ItemReducer: ItemReducer,
    FrontControllerReducer:FrontControllerReducer
})

export default AllReducers