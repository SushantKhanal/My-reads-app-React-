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
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.filter((book)=>
                        (book.shelf==="currentlyReading")).map((book)=>(                  
                          <Shelf key={book.id}
                            book={book}
                            handleChange={(book,e)=>{
                              this.handleChange(book,e)
                            }}                    
                          />
                      ))}                      
                    </ol>
                  </div>
                </div> 
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.filter((book)=>
                        (book.shelf==="wantToRead")).map((book)=>(                  
                          <Shelf key={book.id}
                            book={book}
                            handleChange={(book,e)=>{
                              this.handleChange(book,e)
                            }}                    
                          />
                      ))}                      
                    </ol>
                  </div>
                </div>     
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.filter((book)=>
                        (book.shelf==="read")).map((book)=>(                  
                          <Shelf key={book.id}
                            book={book}
                            handleChange={(book,e)=>{
                              this.handleChange(book,e)
                            }}                    
                          />
                      ))}                      
                    </ol>
                  </div>                          
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

