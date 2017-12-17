import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    none: []
  }

  bookShelves = (books)=>{
    this.setState({ currentlyReading: books.filter((book)=>(book.shelf==="currentlyReading"))})
    this.setState({ wantToRead: books.filter((book)=>(book.shelf==="wantToRead"))})
    this.setState({ read: books.filter((book)=>(book.shelf==="read"))})
    this.setState({ none: books.filter((book)=>(book.shelf==="none"))})
  }

	render() {
    //console.log(this.props.books)
    //this.props.books.map((book)=>{console.log(book.shelf)})
		//this.props.books.filter((book)=>(book.shelf==="currentlyReading")).map((book)=>{console.log(book.title)})

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
                            <li key={book.title}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                              </div>
                            </li>                    
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
                            <li key={book.title}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                              </div>
                            </li>                    
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
                            <li key={book.title}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                              </div>
                            </li>                    
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

