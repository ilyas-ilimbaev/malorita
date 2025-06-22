import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';
import { Form, FormControl, Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'react-bootstrap';
import { createMenuItem, fetchMenu, fetchTypes } from "../../http/menuitemAPI";
import { observer } from 'mobx-react-lite';

const CreateMenuItem = observer (({ show, onHide }) => {
    const { menuitem } = useContext(Context);

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [type, setType] = useState(null)
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetchTypes().then(data => menuitem.setTypes(data))
        fetchMenu(null).then(data => menuitem.setMenu(data))
    }, [])

    console.log(menuitem.selectedType)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addMenuItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('image', file)
        formData.append('typeId', menuitem.selectedType.id)
        formData.append('description', description)
        formData.append('availability', 1)
        createMenuItem(formData).then(data => onHide())
    }


    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новую позицию меню
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mb-3">
                        <DropdownToggle variant="success">{menuitem.selectedType.name || "Выберите тип"}</DropdownToggle>
                        <DropdownMenu>
                            {menuitem.types.map(type => (
                                <DropdownItem
                                    onClick={() => menuitem.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </DropdownItem>))}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Введите название позиции меню'
                        className="mb-3"
                    />
                    <FormControl
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        placeholder='Введите стоимость'
                        className="mb-3"
                        type="number"
                    />
                    <FormControl
                        placeholder='Прикрепите фотографию'
                        className="mb-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <FormControl
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Добавьте описание'
                        className="mb-3"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addMenuItem}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateMenuItem;