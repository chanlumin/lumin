import axios from "axios";

export const ARTICLE_LIST = 'passagelist/ARTICLE_LIST'


function articleList(data) {
  return {
    type: ARTICLE_LIST,
    payload: data
  }
}

function getArticleList(data) {
  return dispatch => {
    axios.get('/api/articlelist.json').then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(articleList(res.data.data))
      }
    })
  }
}

export {
  articleList,
  getArticleList
}