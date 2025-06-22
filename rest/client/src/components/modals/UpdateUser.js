import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button } from 'react-bootstrap';

const UpdateUser = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Введите данные для изменения
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <FormControl
                        placeholder=' логин пользователя'
                        className="mb-3"
                    />
                    <FormControl
                        placeholder=' пароль пользователя'
                        className="mb-3"

                    />
                    <FormControl
                        placeholder=' email пользователя'
                        className="mb-3"

                    />
                    <FormControl
                        placeholder=' телефон пользователя'
                        className="mb-3"
                    />
                    <FormControl
                        placeholder=' роль пользователя'
                        className="mb-3"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateUser