import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Button, Form, Modal } from "react-bootstrap";

function AddRegister() {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = async (data) => {
        try {
            await axios.post(`http://localhost:3001/adding`, data);
            alert('Successfully added');
            reset();
            handleClose();
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Registration
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Enter Registration ID'
                                {...register("RegistrationId", { required: true })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Enter Conference Name'
                                {...register("ConferenceName", { required: true })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Enter Participant Name'
                                {...register("ParticipantName", { required: true })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='email' placeholder='Enter Email'
                                {...register("Email", { required: true })} />
                        </Form.Group>
                        <Button type='submit' variant="success">Register</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddRegister;
