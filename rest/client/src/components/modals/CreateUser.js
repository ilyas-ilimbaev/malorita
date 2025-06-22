import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Registration } from "../../http/userAPI";

const CreateUser = ({ show, onHide }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')

    const createUser = async () => {
        try {
            Registration(login, password, role, email, phone);
            onHide();
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить нового пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        placeholder='Введите логин пользователя'
                        className="mb-3"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <FormControl
                        placeholder='Введите пароль пользователя'
                        className="mb-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControl
                        placeholder='Введите email пользователя'
                        className="mb-3"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        placeholder='Введите телефон пользователя'
                        className="mb-3"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <FormControl
                        placeholder='Введите роль пользователя'
                        className="mb-3"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={createUser}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateUser