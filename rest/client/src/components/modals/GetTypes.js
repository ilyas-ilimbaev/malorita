import React, { useContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { fetchTypes } from "../../http/menuitemAPI";

const GetTypes = observer( ({ show, onHide }) => {
  const { menuitem } = useContext(Context);
  
  useEffect(() => {
    fetchTypes().then(data => menuitem.setTypes(data))
  }, [])

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-primary">
          Все типы
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <table className="table" style={{ width: '100%', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
              </tr>
            </thead>
            <tbody>
              {menuitem.types.map((type) => (
                <tr key={type.id}>
                  <td>{type.id}</td>
                  <td>{type.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
})

export default GetTypes; 