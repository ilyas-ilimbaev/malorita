import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, Button } from 'react-bootstrap'
import { fetchReviews } from '../../http/userAPI';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const GetReviews = observer (({ show, onHide }) => {
  const { user } = useContext(Context);

  useEffect(() => {
    fetchReviews().then(data => user.setReviews(data))
  }, [])

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-primary">
            Все отзывы
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <table className="table" style={{ width: '100%', tableLayout: 'fixed' }}>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Отзыв</th>
                    </tr>
                </thead>
                <tbody>
                    {user.reviews.map((review) => (
                        <tr key={review.date}>
                            <td>{review.date.split('T')[0]}</td>
                            <td>{review.text}</td>
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

export default GetReviews