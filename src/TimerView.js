import { observer } from 'mobx-react'

const TimerView = observer((props) => {
    const { timerState } = props
    return (
        <>
            <h3>Seconds: {timerState.seconds}</h3>
            <button onClick={() => timerState.reset()}>Reset timer</button>
        </>
    )
})

export default TimerView
