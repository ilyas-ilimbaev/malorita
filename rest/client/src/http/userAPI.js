import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const Registration = async (login, password, role, email, phone) => {
    const { data } = await $host.post('api/user/registration', { login, password, role, email, phone })
    localStorage.setItem('token', data.token)
    console.log(localStorage.getItem('token'))
    console.log(data)
    return jwtDecode(data.token)
}

export const Login = async (login, password) => {
    const { data } = await $host.post('api/user/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const Check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const deleteUser = async (id) => {
    const { data } = await $authHost.delete('api/user/' + id)
    return data
}

export const fetchUsers = async () => {
    const { data } = await $authHost.get('api/user')
    return data
}

export const createReview = async (user_id, text) => {
    const { data } = await $authHost.post('api/review', { user_id, text })
    return data
}

export const fetchReviews = async () => {
    const { data } = await $host.get('api/review')
    return data
}

export const createOrder = async (user_id, type, order_status) => {
    const { data } = await $authHost.post('api/order', { user_id, type, order_status })
    return data
}

export const updateOrder = async (order_id, menuitem_id) => {
    const { data } = await $authHost.post('api/order/' + order_id, { menuitem_id })
    return data
}
export const updateOrderStatus = async (id, order_status) => {
    const { data } = await $authHost.put('api/order/' + id, { order_status })
    return data
}

export const fetchOrders = async (user_id) => {
    const { data } = await $host.get('api/order', { params: { user_id } })
    return data

}
export const fetchAllOrders = async () => {
    const { data } = await $host.get('api/order')
    return data

}

export const fetchOrder = async (order_id) => {
    const { data } = await $host.get('api/order', { params: { order_id } })
    return data
}

export const sendCode = async (email) => {
    const { data } = await $host.post('api/send', { email })
    return data
}
