import { makeObservable, observable, action } from 'mobx'

class TodoItemStore {
    id = Math.random()
    title = ''
    finished = false

    constructor(title) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action,
            rename: action,
        })
        this.title = title
    }

    toggle = () => {
        this.finished = !this.finished
    }

    rename = (title) => {
        this.title = title
    }
}

export default TodoItemStore