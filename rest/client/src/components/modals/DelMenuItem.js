import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, Button } from 'react-bootstrap'
import { deleteMenuItem } from "../../http/menuitemAPI";

const DelMenuItem = ({ show, onHide }) => {
  const [value, setValue] = useState('')

  const delMenuTtem = async () => {
    let data
    try {
      data = await deleteMenuItem(value).then(data => {
        setValue('')
        onHide()
      })
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Удалить позицию меню
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Введите id позиции, которую хотите удалить'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delMenuTtem}>Удалить</Button>
      </Modal.Footer>
    </Modal>)
}

export default DelMenuItem