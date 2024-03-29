import { createContext, useEffect, useState } from "react"

export const TimerContext = createContext();

export const TimerContextProvider = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [gifIndex, setGifIndex] = useState(0);
    const [gif, setGif] = useState([0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return() => clearInterval(interval);
    }, [])

    return(
        <TimerContext.Provider
            value={{seconds, setSeconds, gifIndex, setGifIndex, gif, setGif}}>
            {props.children}
        </TimerContext.Provider>
    )
}