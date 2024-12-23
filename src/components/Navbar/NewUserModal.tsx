import React, { useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { createClients } from '../../redux/actions/actionClients';
import { useAppDispatch } from '../../redux/store/store';


interface AddClientModalProps {
    show: boolean;
    handleClose: () => void;
  setIsLoading: (b: boolean) => void
  isLoading: boolean
}

const NewUserModal: React.FC<AddClientModalProps> = ({ show, handleClose,setIsLoading, isLoading }) => {

    const dispatch = useAppDispatch()
    const [newClient, setNewClient] = useState({ name: '', surname: '',telephone: '', email: ''});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewClient((prevClient) => ({ ...prevClient, [name]: value }));
    };

    const handleSaveClient = () => {
            dispatch(createClients(newClient, setIsLoading)) 
            handleClose(); 
            setNewClient({ name: '', surname: '',telephone: '', email: ''})
    };


  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Aggiungi Nuovo Cliente</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formClientName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome"
            name="name"
            value={newClient.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formClientSurname">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il cognome"
            name="surname"
            value={newClient.surname}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formClientTelephone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Inserisci il numero di telefono"
            name="telephone"
            value={newClient.telephone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formClientEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserisci l'email"
            name="email"
            value={newClient.email}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Annulla
      </Button>
      <Button variant="primary" onClick={handleSaveClient}>
        {isLoading ? <Spinner animation="border" /> : "Salva"}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default NewUserModal