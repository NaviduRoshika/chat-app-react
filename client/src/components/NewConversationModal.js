import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider' 
import { useConversations } from '../contexts/ConversationsProvider'

export default function NewConversationModal({closeModal}) {
    const [ selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts} = useContacts();
    const { createConversation } = useConversations();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        createConversation(selectedContactIds);
        closeModal()
    }
    console.log(contacts);
    const handleCheckboxChange = (contactId)=>{
        setSelectedContactIds(preSelectedContactIds =>{
            if(preSelectedContactIds.includes(contactId)){
                return preSelectedContactIds.filter(prevId =>{
                    return contactId!=prevId;
                })
            }else{
                return [...preSelectedContactIds,contactId]
            }
        })
    } 

    return (
    <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>  
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {
                    contacts.map(contact =>{
                        return (<Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check 
                              type="checkbox"
                              value={true}
                            //   value={selectedContactIds.includes(contact.id)}
                              label={contact.name}
                              onChange={()=> handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>)
                    })
                }
                <Button type='submit' className='mt-2'>Create</Button>
            </Form>
        </Modal.Body>
    </>
    )
}
