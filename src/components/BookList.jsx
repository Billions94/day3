import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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

            <Container >
                <Row>

                    <FormControl
                        className="input"
                        placeholder="Search your favorite horror book..."
                        aria-label="Book Title"
                        value={this.state.title}
                        onChange={e => (this.setState({title: e.target.value}))}/>

                    {
                        this.filtreBooksList(this.state.title),
                        filteredBooks.map(book => (
                            <div key={book.asin} className='d-flex'>
                                <SingleBook book={book} />                                
                            </div>                
                        ))
                    }

                </Row>
            </Container>

        )

    }
}

export default BookList