import Alert from 'react-bootstrap/Alert'

const WarningSign = (props) => (
    <Alert  variant={props.color}>
    {props.text}
  </Alert>
)

export default WarningSign