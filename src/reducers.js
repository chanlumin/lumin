import {combineReducers} from 'redux'

import {article} from './redux/article.redux'
import {header} from './component/header/store/reducer'

export default combineReducers({
  article,
  header
})