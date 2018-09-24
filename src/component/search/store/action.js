import axios from "axios";

export const SEARCH_LIST = 'search/SEARCH_LIST'


const searchList = (data)=> {
  return {
    type: SEARCH_LIST,
    payload: data
  }
}



const getSearchList = (data) => {
  return dispatch => {
    axios.get('/api/search.json').then(res=> {
      if(res.status === 200 && res.data.code === 0) {
        console.log(res.data)
        dispatch(searchList(res.data.data))
      }
    }).catch(err=> {
      console.log(err)
    })
  }
}


export {
  searchList,
  getSearchList
}