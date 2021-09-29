import Alert from 'react-bootstrap/Alert'

const WarningSign = (props) => (
    <Alert className="bold" variant={props.color}>
    {props.text}
  </Alert>
)

export default WarningSign