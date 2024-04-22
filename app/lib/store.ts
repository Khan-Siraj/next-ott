import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import AnimationReducer from "@/tailwind/animation/animation.reducer";
import DialogReducer from "@/tailwind/dialog/dialog.reducer";
import MoviesReducer from "@ui/admin-panel/movies/movies.reducer";
const middlewares = applyMiddleware(logger,thunk)

const root = combineReducers({
    // reducers
    AnimationReducer,
    DialogReducer,
    MoviesReducer
    
})

const store = createStore(root,{},middlewares)

export default store;
