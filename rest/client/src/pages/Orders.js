import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Context } from '../index';
import { fetchOrder, fetchOrders, updateOrderStatus } from '../http/userAPI';
import { fetchMenu } from '../http/menuitemAPI';
import { observer } from 'mobx-react-lite';
import UpdateOrderStatus from '../components/modals/UpdateStatusOrder';

const Orders = observer(() => {

    const { user } = useContext(Context);
    const { menuitem } = useContext(Context)
    const [upStatusVisible, UpStatusVisible] = useState(false)

    useEffect(() => {
        fetchOrders(localStorage.getItem('userId')).then(data => user.setOrders(data))

    }, [])





    return (
        <Container className='mt-5'>
            <h2 className='text-center mb-4'>Ваши Заказы</h2>
            <Row>
                {user.orders.map(order => (
                    <Col md={4} className='mb-4' key={order.id}>
                        <Card className='shadow-sm'>
                            <Card.Body>
                                <Card.Title>Заказ #{order.id}</Card.Title>
                              
                                <Card.Text>
                                    <strong>Статус:</strong> {order.order_status}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Содержимое заказа: </strong>{order.name}
                                </Card.Text>
                                




                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <UpdateOrderStatus show={upStatusVisible} onHide={() => UpStatusVisible(false)} />
        </Container>
    );
}

)

export default Orders;