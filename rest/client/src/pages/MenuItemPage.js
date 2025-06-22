import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { fetchMenuItem } from "../http/menuitemAPI";
import { createOrder, updateOrder } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const MenuItemPage = observer(() => {
  const { user } = useContext(Context);
  
  const [menuitem, setMenuItem] = useState({ info: [] })
  const { id } = useParams()
  
  useEffect(() => {
    fetchMenuItem(id).then(data => setMenuItem(data))
  }, [])

    const CreateOrder = async () => {
      if (!user.isAuth) {
        alert("Пожалуйста, авторизуйтесь для создания заказа.");
        return;
      }
        let data
        try {
          //  data = await createOrder(user.userId, "client", "новый")
            data = await createOrder(localStorage.getItem('userId'), "client", "новый")
            updateOrder(data.id, id)
            alert("Заказ принят. Номер заказа: "+data.id)
        } catch (e) {
            alert(e.response.data.message)
        }
    }


  return (
    <Container className='mt-3 customHeight d-flex align-items-center'>
          <div className='productCard'>

            <Col className='d-flex align-items-center productCard-img'>
              <Image
                src={process.env.REACT_APP_API_URL + menuitem.image}
                alt={menuitem.name}
              />
            </Col>
            <Col className='productCard-info'>
                <Card.Title>{menuitem.name}</Card.Title>
                <Card.Text className='text-muted'>
                  {menuitem.description}
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                <h3 className='text-success'>{menuitem.price} Br</h3>
                <button className='productCard-btn' onClick={CreateOrder}>Заказать</button>
                </div>
            </Col>
          </div>
    </Container>
  );
})

export default MenuItemPage;