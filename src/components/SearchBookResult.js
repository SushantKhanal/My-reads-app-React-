import React from 'react'

//functional stateless component to improve performance of application 
function SearchBookResult(props) {
    function findValue(book){
      if (book.shelf){
          return book.shelf
      }else{
        return 'none'
      }
    }

		return(
      <ol className="books-grid">
        {props.showingBooks.map((book) => (
        <li key={book.id}>
        {props.fixBookShelf(book)}                   
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select value={findValue(book)} onChange={(e) => props.handleChange(book,e)}>
                  <option value="currentlyReading" id="a">Currently Reading</option>
                  <option value="wantToRead" id="b">Want to Read</option>
                  <option value="read" id="c">Read</option>
                  <option value="none" id="d">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
        ))}

      </ol>
		)
}

export default SearchBookResult