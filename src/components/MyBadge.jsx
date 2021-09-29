import Badge from 'react-bootstrap/Badge'

const MyBadge = (props) => (
    
    <Badge className={props.className} variant={props.color}>{props.text}</Badge>
    
)

export default MyBadge