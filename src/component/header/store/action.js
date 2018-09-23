import axios from 'axios'
export const CATEGORY_LIST = 'header/CATEGORY_LIST'


const cateList = (data) => {
  return {
    type: CATEGORY_LIST,
    payload: data
  }
}

const getCateList = () => {
  return dispatch => {
    axios.get('/api/category.json').then(res => {
      if(res.status === 200 && res.data.code === 0) {
        // console.log(res.data.data)
        dispatch(cateList(res.data.data))
      }
    }).catch((err)=> {
      console.log(err)
    })
  }
}

export {
  cateList,
  getCateList
}