import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

	state = {
		books: [],
	    value: 'none'
	}
    searchBooks = (e)=>{
        const query = e.target.value;
        if (!query) {
            this.setState({books: []});
            return;
        }

    	BooksAPI.search(e.target.value).then((books) => {
    		if(books.error) {
    			books = []
    		}
      		this.setState({ books }) 
    	})    	
  	}  	
	handleChange(book,event) {
		this.setState({value: event.target.value})
		book.shelf=event.target.value
		BooksAPI.update(book,book.shelf)
		console.log(book)
		this.props.books.push(book)
	}
	findValue(book){
		if (book.shelf){
				return book.shelf
		}else{
			return 'none'
		}
	}
	fixBookShelf(book){
		this.props.books.filter((book1)=>(book1.id===book.id)).map((book2)=>(book.shelf=book2.shelf))
	}

	render() {
		const { query } = this.state
		let showingBooks
		if (this.state.books.length>0) {
			showingBooks=this.state.books
		}else {
			showingBooks=this.props.books
		}
		console.log(showingBooks)
		//showingBooks.sort(sortBy('name'))

		return(
          <div className="search-books">
            <div className="search-books-bar">
			  <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                	type="text"
                	placeholder="Search by title or author"
                	value={query}
                	onChange={this.searchBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	{showingBooks.map((book) => (
	              <li key={book.id}>
	              {this.fixBookShelf(book)}	      	        	
	                <div className="book">
	                  <div className="book-top">
	                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
	                    <div className="book-shelf-changer">
	                      <select value={this.findValue(book)} onChange={(e) => this.handleChange(book,e)}>
	                        <option value="currentlyReading" id="a">Currently Reading</option>
	                        <option value="wantToRead" id="b">Want to Read</option>
	                        <option value="read" id = "c">Read</option>
	                        <option value="none" id = "d">None</option>
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