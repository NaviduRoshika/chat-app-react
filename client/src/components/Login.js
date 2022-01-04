import React , { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import {v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }){
    const idRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    const createNewId = (e)=>{
        e.preventDefault();
        onIdSubmit(uuidV4());
    }

    return(
        <Container className='align-items-center d-flex'
                   style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group className=''>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type='text' ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="">Login</Button>
                <Button onClick={createNewId} variant='secondary' className="m-1">Create A New Id</Button>
            </Form>
        </Container>
    );
}