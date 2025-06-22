import React, { useContext, useEffect, useState } from 'react'
import { Container, Form, Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, REST_ROUTE } from "../utils/consts";
import { fetchUsers, Login, Registration, sendCode } from "../http/userAPI";

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    fetchUsers().then(data => user.setUsers(data))
  }, [])

  const click = async () => {

    if (!isLogin) {
      try {
        let dataCode;
        console.log(email)
        dataCode = await sendCode(email)
        console.log(dataCode.code)
        let result = prompt('Введите код', '');
        console.log(result)
        if (dataCode.code === Number(result)) {
          Registration(login, password, "client", email, phone);
          navigate(REST_ROUTE)
          alert("Вы зарегистированы. Авторизуйтесь под Вашими учетными данными!")
        }

      } catch (e) {
        alert(e.response.data.message)
      }
    }
    else {

      try {
        let data;
        data = await Login(login, password);
        if (data.role === "admin") {
          user.setIsAdmin(true)
        }
        if (data.role === "waiter") {
          user.setIsWaiter(true)
        }
        user.setUserId(user.users.find(item => item.login === login).id)
        localStorage.setItem('userId', user.userId)
        //      localStorage.setItem('userId', user.users.find(item => item.login === login).id)
        user.setUser(user)
        user.setIsAuth(true)
        navigate(REST_ROUTE)
      } catch (e) {
        alert(e.response.data.message)
      }
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 60 }}
    >
      <Card style={{ width: 600 }} className="p-5 authForm">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder="Введите логин..."
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ?
              <div>
              </div>
              :
              <div>
                <Form.Control
                  className="mt-4"
                  placeholder="Введите email..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                  className="mt-3"
                  placeholder="Введите телефон..."
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            }
          </Row>
          <div className='d-flex align-items-center gap-4 mt-4'>

          <Row className="d-flex justify-content-between">
            {isLogin ?
              <div>
                <NavLink to={REGISTRATION_ROUTE} className='btn-custom mb-0'>Зарегистрироваться</NavLink>
              </div>
              :
              <div>
                <NavLink to={LOGIN_ROUTE} className='btn-custom mb-0'>Войти</NavLink>
              </div>
            }
          </Row>
          <Button variant={"outline-success"} className="btn-custom mb-0" onClick={click}>
            {isLogin ? 'Вход' : 'Регистрация'}
          </Button>
          </div>

        </Form>
      </Card>
    </Container>
  )
})

export default Auth
