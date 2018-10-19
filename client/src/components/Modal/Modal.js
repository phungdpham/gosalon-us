import React, {Component} from "react"
const Modal = require('react-bootstrap-modal')
 
class ModalConfirmed extends Component {
    state = {
        open: Boolean
    };

    
 
  render(){
    let closeModal = () => this.setState({ open: false })

 
  
    return (
      <div>
        <button className="btn btn-warning float-right" 
        type='button' 
        data-toggle="modal"
        data-target="confirmed">Book</button>
 
        <Modal
          show={this.state.open}
          onHide={closeModal}
          aria-labelledby="ModalHeader"
          id="confirmed"
        >
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Some Content here</p>
          </Modal.Body>
          <Modal.Footer>
            // If you don't have anything fancy to do you can use
            // the convenient `Dismiss` component, it will
            // trigger `onHide` when clicked
            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
 
            // Or you can create your own dismiss buttons
            <button className='btn btn-primary' onClick={closeModal}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalConfirmed;