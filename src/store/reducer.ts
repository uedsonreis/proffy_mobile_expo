import { combineReducers } from 'redux'

import { reducer as favoritesReducer } from '../domain/favorites'

export default combineReducers({
    favorites: favoritesReducer,
})
