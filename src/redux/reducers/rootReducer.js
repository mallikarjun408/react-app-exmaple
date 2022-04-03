import { combineReducers } from "redux";
import { LoginReducer } from "./loginReducer";
import { CategoryReducer } from "./categoryReducer";
import { SubCategoryReducer } from "./subcategoryReducer";
import { LanguageReducer } from "./languageReducer";
import { NewsContentReducer } from "./newsContentReducer";

export const rootReducer = combineReducers({
    LoginReducer,
    CategoryReducer,
    SubCategoryReducer,
    LanguageReducer,
    NewsContentReducer
});

export default rootReducer;