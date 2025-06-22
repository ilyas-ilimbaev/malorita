import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, Button } from 'react-bootstrap'
import { deleteType } from "../../http/menuitemAPI";
import { observer } from 'mobx-react-lite';
import { fetchTypes } from "../../http/menuitemAPI";
import { Context } from '../../index';

const DelType = observer(({ show, onHide }) => {
  const { menuitem } = useContext(Context);
  const [value, setValue] = useState('')

  const delType = async () => {
    let data
    try {
      data = await deleteType(value).then(data => {
        fetchTypes().then(data => menuitem.setTypes(data))
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
          Удалить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Введите id типа, который хотите удалить'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delType}>Удалить</Button>
      </Modal.Footer>
    </Modal>)
})

export default DelType