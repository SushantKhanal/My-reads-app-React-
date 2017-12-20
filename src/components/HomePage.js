import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Shelf from './Shelf'

class HomePage extends Component {
  state = {
    value: '',
    updatedBook: {}
  }
//handle Chane function is to change book shelf
  handleChange(book,event) {
    book.shelf=event.target.value
    BooksAPI.update(book,book.shelf).then(()=>{
      this.setState({updatedBooks: book})
    })
    this.setState({value: event.target.value})   //setState command rerenders this page 
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
    //console.log(this.props.books)
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

HomePage.propTypes = {
  books: PropTypes.array.isRequired
}

export default HomePage

