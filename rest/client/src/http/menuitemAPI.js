import { $authHost, $host } from "./index";
//import { jwtDecode } from "jwt-decode";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const deleteType = async (id) => {
    const { data } = await $authHost.delete('api/type/'+id)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createMenuItem = async (menuItem) => {
    const { data } = await $authHost.post('api/item', menuItem)
    return data
}

export const deleteMenuItem = async (id) => {
    const { data } = await $authHost.delete('api/item/'+id)
    return data
}

export const fetchMenu = async (typeId) => {
    const { data } = await $host.get('api/item', { params: { typeId } })
    return data
}

export const fetchMenuItem = async (id) => {
    const { data } = await $host.get('api/item/' + id)
    return data
}
