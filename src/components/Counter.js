import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../store/counterAction.js'

const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector((state) => state)

    return (
        <div className="counter">
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{count}fgggggf</span>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter