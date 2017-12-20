import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import * as BooksAPI from '../BooksAPI'
import SearchBookResult from './SearchBookResult'

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

  	fixBookShelf(book){
  		this.props.books.filter((book1)=>(book1.id===book.id)).map((book2)=>(book.shelf=book2.shelf))
  	}

  	render() {
  		const { query } = this.state
  		let showingBooks=this.state.books

		return(
          <div className="search-books">
            <div className="search-books-bar">
			      <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <Debounce time="300" handler="onChange">              
                  <input
                  	type="text"
                  	placeholder="Search by title or author"
                  	value={query}
                  	onChange={this.searchBooks}
                  />
                </Debounce>  
              </div>
            </div>
            <div className="search-books-results">
                  <SearchBookResult
                    showingBooks={showingBooks}
                    fixBookShelf={(book)=>{
                      this.fixBookShelf(book)
                    }}                      
 
                    handleChange={(book,e)=>{
                      this.handleChange(book,e)
                    }}                                     
                  />
            </div>
          </div>
		)
	}
}

export default SearchPage