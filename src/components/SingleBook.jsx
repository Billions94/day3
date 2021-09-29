import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import MyBadge from './MyBadge'
import Button from 'react-bootstrap/Button'


class SingleBook extends Component {
  state = {
    selected: false

  }

  handleToggle = () => {
    this.setState({ selected: !this.state.selected });
  }

  render() {

    return (
             
            <div className="d-flex mt-5 mb-5 ml-2">
                <div>
                    <Card onClick={this.handleToggle} className={this.state.selected ? "selected" : null} key={this.props.book.asin}  style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={this.props.book.img}  style={{ height: '20rem' }} />
                        <Card.Body>
                            <Card.Title className="clamp">{this.props.book.title}</Card.Title>
                            <h5 className="d-inline-block">
                            Category:   {this.props.book.category}
                            </h5>                               
                            <div className="d-flex justify-content-between">
                                <Button variant="warning">Buy</Button>                                
                                <MyBadge text={'€' + this.props.book.price} color='warning' />
                            </div>
                        </Card.Body>
                    </Card>
                </div> 
            </div>
            

    )

  }

}




export default SingleBook

