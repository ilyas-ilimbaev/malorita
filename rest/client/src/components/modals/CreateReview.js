import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, Button } from 'react-bootstrap'
import { createReview, fetchReviews } from "../../http/userAPI";
import { Context } from '../../index';

const CreateReview = ({ show, onHide }) => {
    const { user } = useContext(Context);
    const [value, setValue] = useState('')

    const addReview = async () => {
        let data
        if (!user.isAuth) {
            alert("Пожалуйста, авторизуйтесь для создания отзыва.");
            return;
          }
        try {
            
            data = await createReview(16, value).then(data => {
                fetchReviews().then(data => user.setReviews(data))
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
                    Оставить отзыв
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Напишите текст отзыва'
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addReview}>Отправить</Button>
            </Modal.Footer>
        </Modal>)
}

export default CreateReview