import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {  
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) 
//same thing as above
//      this.setState({ contacts: contacts })

    } )
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <HomePage
              books={this.state.books}
            />
          </div>  
        )}/>

        <Route path='/search' render={() => (
          <div>
            <SearchPage
              books={this.state.books}
            />
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
