import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button } from 'react-bootstrap';
import { createType } from "../../http/menuitemAPI";

const CreateType = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addType = () => {
        const formData = new FormData();
        formData.append('name', name);
        if (file) {
            formData.append('img', file);
        }
        createType(formData).then(() => {
            setName('');
            setFile(null);
            onHide();
        }).catch(e => {
            alert(e.response?.data?.message || e.message);
        });
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Введите название типа'
                        className="mb-3"
                    />
                    <FormControl
                        placeholder='Прикрепите изображение'
                        className="mb-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;