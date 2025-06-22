import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { Check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import './global.css'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      if (localStorage.getItem('token')) {
      Check().then(data => {
        user.setUser(user)
        user.setIsAuth(true)
        if (data.role === "admin") { 
          user.setIsAdmin(true)
        }
        if (data.role === "waiter") { 
          user.setIsWaiter(true)
        }
      }).finally(() => setLoading(false))}
      else setLoading(false)
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
