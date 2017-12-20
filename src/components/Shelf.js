import React, { Component } from 'react'

class Shelf extends Component {

	render() {
    const { name } = this.props    
    const { heading } = this.props    

		return(
      <div className="bookshelf" key={name}>
        <h2 className="bookshelf-title">{heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {this.props.books.filter((book)=>
              (book.shelf===name)).map((book)=>(        
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => this.props.handleChange(book,e)}>
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

export default Shelf