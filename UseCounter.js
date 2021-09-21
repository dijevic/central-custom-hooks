import { useState } from 'react'

export const UseCounter = (initialState = 10) => {

    const [stateCounter, setstate] = useState(initialState)

    const incrementar = () => {
        setstate(stateCounter + 1)
    }
    const decrementar = () => {
        setstate(stateCounter - 1)
    }
    const resetear = () => {
        setstate(initialState)
    }

    return {

        stateCounter,
        incrementar,
        decrementar,
        resetear

    }
}
