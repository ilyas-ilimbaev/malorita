import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { fetchAllOrders } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import UpdateOrderStatus from '../components/modals/UpdateStatusOrder';
import { Context } from '../index';

const Waiter = observer(() => {
    const [orders, setOrders] = useState([]);
    const [upStatusVisible, setUpStatusVisible] = useState(false);
    const { user } = useContext(Context);

useEffect(() => {
    fetchAllOrders()
        .then(data => {
            console.log("Данные заказов:", data); // Что приходит?
            setOrders(data);
        })
        .catch(error => console.error("Ошибка при загрузке заказов:", error));
}, []);

    return (
        <Container className='mt-5 all-orders'>
            <h2 className='text-center mb-4'>Все Заказы</h2>
            <Row>
                {orders.map(order => (
                    <Col md={4} className='mb-4' key={order.id}>
                        <Card className='shadow-sm'>
                            <Card.Body>
                                <Card.Title>Заказ #{order.id}</Card.Title>
                                <Card.Text>
                                    <strong>Статус:</strong> {order.order_status}
                                </Card.Text>
                                <Card.Text>
                                    <strong className='redBg'>Содержимое заказа:</strong> {order.name}
                                </Card.Text>
                                <Button 
                                    variant="primary"  
                                    onClick={() => {
                                        user.setSelectedOrder(order);
                                        setUpStatusVisible(true);
                                    }} 
                                    className="w-100"  
                                >
                                    Изменить статус заказа
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <UpdateOrderStatus 
                show={upStatusVisible} 
                onHide={() => setUpStatusVisible(false)}
            />
        </Container>
    );
});

export default Waiter;