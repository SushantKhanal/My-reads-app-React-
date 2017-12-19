import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class HomePage extends Component {
  state = {
    value: ''
  }

  handleChange(book,event) {
    book.shelf=event.target.value
    BooksAPI.update(book,book.shelf)
    this.setState({value: event.target.value})    
  }


	render() {
    //console.log(this.state.read)
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <CurrentlyReading
                    books={this.props.books}
                    handleChange={(book,e)=>{
                      this.handleChange(book,e)
                    }}
                  />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <WantToRead
                    books={this.props.books}
                    handleChange={(book,e)=>{
                      this.handleChange(book,e)
                    }}                    
                  />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <Read
                    books={this.props.books}
                    handleChange={(book,e)=>{
                      this.handleChange(book,e)
                    }}                    
                  />
                </div>
              </div>
            </div>
            <div 
              className="open-search">
              <Link 
              to="/search"
              >Add a book</Link>
            </div>
          </div>   

		)
	}
}

export default HomePage

