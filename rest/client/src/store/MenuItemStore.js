import { makeAutoObservable } from "mobx"

export default class MenuItemStore {
    constructor() {
        this._types = []
        this._menuitems = []
        this._selectedType = {}
        this._totalCount = 0
        
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setMenu(menu) {
        this._menuitems = menu
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get menuitems() {
        return this._menuitems
    }

    get selectedType() {
        return this._selectedType
    }

    get totalCount() {
        return this._totalCount
    }
}