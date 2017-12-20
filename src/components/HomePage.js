import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Shelf from './Shelf'

class HomePage extends Component {
  state = {
    value: ''
  }
//handle Chane function is to change book shelf
  handleChange(book,event) {
    book.shelf=event.target.value
    BooksAPI.update(book,book.shelf)
    this.setState({value: event.target.value})    
  }

  bookShelves = [
    {
      shelfName:"currentlyReading",
      shelfHeading: "Currently Reading"
    }, 
    {
      shelfName:"wantToRead",
      shelfHeading: "Want to Read"
    }, 
    {
      shelfName:"read",
      shelfHeading: "Read"
    }         
  ]


	render() {
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.bookShelves.map((shelf)=>(
                    <Shelf key={shelf.shelfName}
                      books={this.props.books}
                      heading={shelf.shelfHeading}
                      name={shelf.shelfName}
                      handleChange={(book,e)=>{
                        this.handleChange(book,e)
                      }}                    
                    />
                ))}              
 
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

