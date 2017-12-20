import React from 'react'
import PropTypes from 'prop-types' 

//functional stateless component to improve performance of application 
function Shelf(props) {
		return(
      <div className="bookshelf" key={props.name}>
        <h2 className="bookshelf-title">{props.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {props.books.filter((book)=>
              (book.shelf===props.name)).map((book)=>(        
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => props.handleChange(book,e)}>
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
Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Shelf