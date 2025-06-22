import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { REST_ROUTE } from "../utils/consts"
import { Context } from '../index'

const AppRouter = () => {
    const { user } = useContext(Context)
    return (
        <Routes>
            <Route path="*" element={publicRoutes.find(item => item.path === REST_ROUTE).Component} />
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} />
            )}
        </Routes>
    )
}

export default AppRouter
