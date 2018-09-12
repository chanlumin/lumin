import React from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter} from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
         <Route path='/' component={Home}></Route>
        </BrowserRouter>
      </div>
    )
  } 
}

export default App 