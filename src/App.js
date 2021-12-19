import TodoListStore from './todo/TodoListStore.js'
import TodoListView from './todo/TodoListView.js'
import TodoItemStore from './todo/TodoItemStore.js'

const todoListStore = new TodoListStore([
    new TodoItemStore('Первая задача'),
    new TodoItemStore('Вторая задача'),
    new TodoItemStore('Третья задача'),
])

export default function App() {
    return <TodoListView todoListState={todoListStore} />
}

/*
import timerStore from './TimerStore.js'
import TimerView from './TimerView.js'

setInterval(() => {
    timerStore.increase()
}, 1000)

export default function App() {
    return <TimerView timerState={timerStore} />
}
*/