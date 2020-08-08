import { Class } from './entities'

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

type Action = { type: string, payload: Class }

export const creators = {
    createAdd: (objClass: Class) => ({ type: ADD, payload: objClass }),
    createRemove: (objClass: Class) => ({ type: REMOVE, payload: objClass }),
}

const initialState: Class[] = []

export function reducer(favorites = initialState, action: any) {
    const { type, payload } = action as Action
    switch(type) {
        case ADD: {
            return [ ...favorites, payload ]
        }
        case REMOVE: {
            return favorites.filter(obj => obj.id !== payload.id)
        }
        default: return favorites
    }
}
