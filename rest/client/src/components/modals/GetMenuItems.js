import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const GetMenuItem = observer( ({ show, onHide }) => {
  const { menuitem } = useContext(Context);
  
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
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {menuitem.menuitems.map((menuitm) => (
                <tr key={menuitm.id}>
                  <td>{menuitm.id}</td>
                  <td>{menuitm.name}</td>
                  <td>{menuitm.price}</td>
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

export default GetMenuItem; 