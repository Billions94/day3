import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
// Importing SingleBook and pass
import SingleBook from './SingleBook';
// Book Data
import Horror from '../data/horror.json'






let filteredBooks = ['']

class BookList extends Component {


        state = {
            title: ''
        }

            filtreBooksList = (query) => {
                filteredBooks = Horror.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase())
            )

            }

    render() {
        return (

            <Container className="mb-5 fluid">
                <div className="mb-5">

                    <FormControl
                        className="input"
                        placeholder="Search your favorite horror book..."
                        aria-label="Book Title"
                        value={this.state.title}
                        onChange={e => (this.setState({title: e.target.value}))}/>
                </div>
                <div className="d-flex">
                    {
                        this.filtreBooksList(this.state.title),
                        filteredBooks.map(book => (
                            <div key={book.asin} className=''>
                                <SingleBook book={book} />                                
                            </div>                
                        ))
                    }
                </div>
                
            </Container>

        )

    }
}

export default BookList