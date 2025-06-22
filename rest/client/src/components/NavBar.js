import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ADMIN_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, REST_ROUTE, RESTINFO_ROUTE, WAITER_ROUTE } from "../utils/consts";
import { Button, Card } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    //   console.log("isAuth "+ user.isAuth)
    //   console.log("isAdmin "+ user.isAdmin)
    //   console.log("isWaiter "+ user.isWaiter)
    //   console.log(user)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        user.setIsWaiter(false);
        navigate(LOGIN_ROUTE)
        localStorage.removeItem('token')

    };

    return (
        <Navbar data-bs-theme="dark" className='navbarCustom'>
            <Container>
                <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate(REST_ROUTE)}>Ресторан "Малорита"</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link onClick={() => navigate(RESTINFO_ROUTE)}>О нас</Nav.Link>
                </Nav>
                {user.isAuth ? (
                    <Nav className="mt-auto gap-3">
                        {/* Для официанта */}
                        {user.isWaiter && !user.isAdmin && (
                            <div className='d-flex gap-3'>
                                <Button
                                    variant="outline-light"
                                    onClick={() => navigate(WAITER_ROUTE)}
                                    className="btn-custom --light"
                                >
                                    Панель менеджера
                                </Button>
                                <a
                                    variant="outline-light"
                                    className="btn-custom --light"
                                    href="https://app.restoplace.cc/"
                                >
                                    Онлайн бронирование
                                </a>
                            </div>
                        )}

                        {/* Для обычного пользователя (не официант и не админ) */}
                        {!user.isWaiter && !user.isAdmin && (
                            <Button
                                variant="outline-light"
                                onClick={() => navigate(ORDERS_ROUTE)}
                                className="btn-custom --light"
                            >
                                Заказы
                            </Button>
                        )}

                        {/* Для админа */}
                        {user.isAdmin && (
                            <Button
                                variant="outline-light"
                                onClick={() => navigate(ADMIN_ROUTE)}
                                className="btn-custom --light"
                            >
                                Админ панель
                            </Button>
                        )}

                        {/* Кнопка выхода (для всех авторизованных) */}
                        <Button
                            variant="outline-light"
                            onClick={logOut}
                            className='btn-custom --light'
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    /* Для неавторизованных */
                    <Nav>
                        <Button className='auth-btn me-3' variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                        <Card.Link className='booking-btn' variant="outline-light" href='https://741164.restoplace.ws/'>
                            Онлайн бронирование
                        </Card.Link>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;