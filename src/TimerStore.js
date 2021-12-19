import { makeAutoObservable } from 'mobx'

// Модель состояния таймера
class TimerStore {
    seconds = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.seconds++
    }

    reset() {
        this.seconds = 0
    }
}

const timerStore = new TimerStore()
export default timerStore