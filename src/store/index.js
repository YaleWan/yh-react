import {createStore} from 'redux'
import {menuReducer} from './menuName.js'

const store  = createStore(menuReducer)
export default store