import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import MenuItemPage from "./pages/MenuItemPage"
import Orders from "./pages/Orders"
import Rest from "./pages/Rest"
import RestInfo from "./pages/RestInfo"
import Users from "./pages/Users"
import Waiter from "./pages/Waiter"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, REST_ROUTE, USERS_ROUTE, MENUITEM_ROUTE, RESTINFO_ROUTE, ORDERS_ROUTE, WAITER_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path : ADMIN_ROUTE,
        Component: <Admin />
    },
    {
        path : USERS_ROUTE + '/:id',
        Component: <Users />
    },    
    {
        path : USERS_ROUTE,
        Component: <Users />
    },
    {
        path : ORDERS_ROUTE,
        Component: <Orders />
    },     
    {
        path : WAITER_ROUTE,
        Component: <Waiter />
    }  
]

export const publicRoutes = [
    {
        path : REST_ROUTE,
        Component: <Rest />
    },
    {
        path : LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path : REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path : MENUITEM_ROUTE + '/:id',
        Component: <MenuItemPage />
    },
    {
        path : RESTINFO_ROUTE,
        Component: <RestInfo />
    }
]