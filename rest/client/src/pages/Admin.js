import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateMenuItem from '../components/modals/CreateMenuItem';
import CreateUser from '../components/modals/CreateUser';
import DelType from '../components/modals/DelType';
import DelMenuItem from '../components/modals/DelMenuItem';
import DelUser from '../components/modals/DelUser';
import GetUsers from '../components/modals/GetUsers';
import GetTypes from '../components/modals/GetTypes';
import GetMenuItems from '../components/modals/GetMenuItems';
import UpdateUser from '../components/modals/UpdateUser';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [menuItemVisible, setMenuItemVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)
    const [getTypeVisible, setGetTypeVisible] = useState(false)
    const [delTypeVisible, setDelTypeVisible] = useState(false)
    const [delMenuItemVisible, setDelMenuItemVisible] = useState(false)
    const [getMenuItemVisible, setGetMenuItemVisible] = useState(false)
    const [delUserVisible, setDelUserVisible] = useState(false)
    const [getUserVisible, setGetUserVisible] = useState(false)
    const [updateUserVisible, setUpdateUserVisible] = useState(false)

    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-center">Админ Панель</h2>
            <Row className="justify-content-left shadow-sm mt-5">
                <h3 className="mb-4 text-left font-geologica">Виды блюд</h3>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setGetTypeVisible(true)}>
                        Просмотреть все виды
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setTypeVisible(true)}>
                        Добавить вид
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setDelTypeVisible(true)}>
                        Удалить вид
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-left shadow-sm mt-5">
                <h3 className="mb-4 text-left font-geologica">Позиции меню</h3>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setGetMenuItemVisible(true)}>
                        Просмотреть все позиции меню
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setMenuItemVisible(true)}>
                        Добавить позицию меню
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setDelMenuItemVisible(true)}>
                        Удалить позицию меню
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-left shadow-sm mt-5">
                <h3 className="mb-4 text-left font-geologica">Пользователи</h3>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setGetUserVisible(true)}>
                        Просмотреть данные о пользователях
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setUserVisible(true)}>
                        Добавить пользователя
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button variant="primary" className="w-100 btn-custom --light" onClick={() => setDelUserVisible(true)}>
                        Удалить пользователя
                    </Button>
                </Col>
               
            </Row>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateMenuItem show={menuItemVisible} onHide={() => setMenuItemVisible(false)} />
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)} />
            <DelType show={delTypeVisible} onHide={() => setDelTypeVisible(false)} />
            <DelMenuItem show={delMenuItemVisible} onHide={() => setDelMenuItemVisible(false)} />
            <DelUser show={delUserVisible} onHide={() => setDelUserVisible(false)} />
            <GetUsers show={getUserVisible} onHide={() => setGetUserVisible(false)} />
            <GetTypes show={getTypeVisible} onHide={() => setGetTypeVisible(false)} />
            <GetMenuItems show={getMenuItemVisible} onHide={() => setGetMenuItemVisible(false)} />
            <UpdateUser show={updateUserVisible} onHide={() => setUpdateUserVisible(false)} />


        </Container>
    );
};

export default Admin;