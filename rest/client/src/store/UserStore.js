import {makeAutoObservable} from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._isWaiter = false
        this._user = {}
        this._users = []
        this._reviews = []
        this._orders =[]
        this._userId = 0
        this._selectedOrder = {}
        makeAutoObservable(this)
    }
    
    setIsAuth(bool) {
        this._isAuth = bool
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setIsWaiter(bool) {
        this._isWaiter = bool
    }

    setUser(user) {
        this._user = user
    }
 
    setUsers(users) {
        this._users = users
    }

    setUserId(userId) {
        this._userId = userId
    }

    setReviews(reviews) {
        this._reviews = reviews
    }

    setOrders(orders) {
        this._orders = orders
    }

    setSelectedOrder(order) {
        this._selectedOrder = order
    }

    setSelectedOrderStatus(status) {
        this._selectedOrder.order_status = status
    }

    get isAuth() {
        return this._isAuth
    }
    
    get isAdmin() {
        return this._isAdmin
    }
    get isWaiter() {
        return this._isWaiter
    }

    get user() {
        return this._user
    }
 
    get users() {
        return this._users
    }

    get userId() {
        return this._userId
    }

    get reviews() {
        return this._reviews
    }

    get orders() {
        return this._orders
    }

    get selectedOrder() {
        return this._selectedOrder
    }
}