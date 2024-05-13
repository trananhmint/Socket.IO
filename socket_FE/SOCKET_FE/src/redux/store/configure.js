import { createStore } from "redux"
import rootReducer from '../reducer'


export default function configure() {
    return createStore(rootReducer)
}