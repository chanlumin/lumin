import {ARTICLE_LIST} from './action'


let initState = []
/**
 * reducer
 */
function articlelist(state=initState, action) {
  switch(action.type) {
    case ARTICLE_LIST: 
      return [...initState, ...action.payload]
    default:
      return state
  }
}


export {
  articlelist
}