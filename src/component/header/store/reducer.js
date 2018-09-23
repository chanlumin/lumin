// import {getCateList} from './action'
import {CATEGORY_LIST} from './action'


let initState = {
  categoryList: []
}

function category_list(state, action) {
  // console.log(state)
  // state.categoryList = action.payload
  return {...state,...{categoryList: action.payload}}
}

const header = (state = initState, action) => {
  console.log(state)
  switch(action.type) {
    case CATEGORY_LIST: 
      return category_list(state, action)
    default:
    return state
  }
}



export {
  header
}