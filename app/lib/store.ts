import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import AnimationReducer from "@/tailwind/animation/animation.reducer";
import DialogReducer from "@/tailwind/dialog/dialog.reducer";
import MoviesReducer from "@ui/admin-panel/movies/movies.reducer";
import RegisterReducer from "@ui/register/register.reducer";
import PlansReducer from "@ui/admin-panel/plans/plans.reducer";
const middlewares = applyMiddleware(logger,thunk)

const root = combineReducers({
    // reducers
    AnimationReducer,
    DialogReducer,
    MoviesReducer,
    RegisterReducer,
    PlansReducer
    
})

const store = createStore(root,{},middlewares)

export default store;
