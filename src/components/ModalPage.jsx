import React, { Component } from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

class ModalPage extends Component {
    constructor(){
        super()
        this.state ={
            modalIsOpen:true
        }
    }

    handlerToggle(){
        this.setState({modalIsOpen:!this.state.modalIsOpen})
        this.props.handalModal(!this.state.modalIsOpen)
        
    }
  render() {
     const {modalIsOpen} = this.state
     const { name } = this.props.dataActor[0]
    return (
      <Modal isOpen={modalIsOpen} toggle={()=> this.handlerToggle()}>
          <ModalHeader>{name}</ModalHeader>
          <ModalBody>this is my body</ModalBody>
          <ModalFooter> this is my Footer</ModalFooter>
      </Modal>
    )
  }
}
export default ModalPage
