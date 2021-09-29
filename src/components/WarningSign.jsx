import Alert from 'react-bootstrap/Alert'

const WarningSign = (props) => (
    <div className="d-flex justify-content-center">
      <Alert className="bold input" variant="danger">
        {props.text}
      </Alert>
  </div>
)

export default WarningSign