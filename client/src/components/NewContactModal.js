import React, { useRef } from 'react'
import { Modal, Form, Button, FormControl} from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function NewContactModal({closeModal}) {

    const idRef  = useRef();
    const nameRef = useRef();
    const { createContact } = useContacts();

    const handleSubmit = (e)=>{
       e.preventDefault();

       createContact(idRef.current.value, nameRef.current.value);
       closeModal();
    }

    return (
        <>
          <Modal.Header closeButton>Create Contact</Modal.Header>  
          <Modal.Body>
              <Form onSubmit={handleSubmit}>
                  <Form.Group>
                      <Form.Label>Id</Form.Label>
                      <FormControl type="text" ref={idRef} required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <FormControl type="text" ref={nameRef} required/>
                  </Form.Group>
                  <Button type='submit' className='mt-2'>Create</Button>
              </Form>
          </Modal.Body>
        </>
    )
}
