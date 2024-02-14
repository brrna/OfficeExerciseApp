import { createContext, useEffect, useState } from "react"

export const TimerContext = createContext();

export const TimerContextProvider = (props) => {

    const [seconds, setSeconds] = useState(1);
    const [gifIndex, setGifIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            if(seconds % 15 === 0){
                setGifIndex(gifIndex => (gifIndex + 1) % props.gifLength)
            }
        }, 1000);
        return() => clearInterval(interval);
    }, [])

    return(
        <TimerContext.Provider
            value={{seconds, setSeconds, gifIndex, setGifIndex}}>
            {props.children}
        </TimerContext.Provider>
    )
}