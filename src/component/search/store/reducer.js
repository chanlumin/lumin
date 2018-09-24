import {SEARCH_LIST} from './action'


const initState = []
export function search(state=initState, action) {
  switch(action.type) {
    case SEARCH_LIST:
      return [...initState, ...action.payload] 
    default:
    return state
  }
}