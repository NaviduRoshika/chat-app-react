import React, { useState } from "react";
import {Tab,Nav, Button, Modal} from 'react-bootstrap';
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({id}){
    const [activeKey,setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalOpen, setModalOpen] = useState(false);
    const conversationOpen = (CONVERSATIONS_KEY === activeKey);
    
   const closeModal = ()=>{
       setModalOpen(false);
   }

    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
           <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
               <Nav variant="tabs" className="justify-content-center">
                   <Nav.Item>
                       <Nav.Link eventKey="conversations">Conversations</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link eventKey="contacts">Contacts</Nav.Link>
                   </Nav.Item>
               </Nav>
               <Tab.Content 
                   className="border overflow-auto flex-grow-1">
                   <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                      <Conversations/>
                   </Tab.Pane>
                   <Tab.Pane eventKey={CONTACTS_KEY}>
                      <Contacts/>
                   </Tab.Pane>
               </Tab.Content>
               <div>
                   Your Id : <span className="text-muted">{id}</span>
               </div>
               <Button onClick={()=> setModalOpen(true)}>
                   New {conversationOpen ? 'Conversation' : 'Contact'}
               </Button>
           </Tab.Container>

           <Modal show={modalOpen} onHide={closeModal}>
               {conversationOpen ?
               <NewConversationModal closeModal={closeModal}/>:
               <NewContactModal closeModal={closeModal}/>}
           </Modal>
        </div>
    );
}