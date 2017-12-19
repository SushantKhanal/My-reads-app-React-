import React, { Component } from 'react'

class CurrentlyReading extends Component {

	render() {
		return(
      <div className="bookshelf-books">
        <ol className="books-grid">
         {this.props.books.filter((book)=>
            (book.shelf==="currentlyReading")).map((book)=>(
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => this.props.handleChange(book,e)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading" id="aa">Currently Reading</option>
                          <option value="wantToRead" id="bb" >Want to Read</option>
                          <option value="read" id="cc">Read</option>
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
		)
	}
}

export default CurrentlyReading	