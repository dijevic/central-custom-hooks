import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {
    const isMounted = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true, ERROR: false })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setstate({ data: null, loading: true, ERROR: false })

        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                if (isMounted.current) {
                    setstate({
                        data,
                        loading: false,
                        ERROR: false
                    })
                } else {
                    console.log('no paso la prueba')
                }



            }).catch(() => {
                setstate({
                    data: null, loading: false, ERROR: true
                })
            })

    }, [url])

    return state
}
