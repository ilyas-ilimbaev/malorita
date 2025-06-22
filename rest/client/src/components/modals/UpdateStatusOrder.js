import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { fetchAllOrders, updateOrderStatus } from "../../http/userAPI";
import { Context } from '../../index';

const UpdateOrderStatus = ({ show, onHide }) => {
    const { user } = useContext(Context);
    const [value, setValue] = useState('');

    const statusValue = [
        {
            "id": 1,
            "name": "Новый"
        },
        {
            "id": 2,
            "name": "В работе"
        },
        {
            "id": 4,
            "name": "Завершен"
        },
        {
            "id": 5,
            "name": "Отменен"
        }
    ]

    const upStatus = async () => {
        const id = user.selectedOrder.id

        if (!id) {
            alert('Не выбран заказ для обновления статуса')

            return;
        }

        if (!value) {
            alert('Введите новый статус')
            return;
        }

        await updateOrderStatus(id, value)
        setValue('')
        onHide();

    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Измените статус заказа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Введите новый статус заказа'
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={upStatus}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateOrderStatus;