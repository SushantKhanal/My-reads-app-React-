import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	    BooksAPI.search(this.state.query).then((books) => {
	      this.setState({ books }) 
	    })		
	}

	render() {
		const { query } = this.state
		let showingBooks=this.state.books

		//console.log(this.props.books)

		showingBooks.sort(sortBy('name'))

		return(
          <div className="search-books">
            <div className="search-books-bar">
			  <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                	type="text"
                	placeholder="Search by title or author"
                	value={query}
                	onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              	{showingBooks.map((book) => (      	        	
	              <li key={book.title}>
	                <div className="book">
	                  <div className="book-top">
	                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
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
		)
	}
}

export default SearchPage