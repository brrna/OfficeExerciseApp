import { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { TimerContext } from "../../context/TimerContext";

const MyCountDown = () => {

    let { seconds } = useContext(TimerContext);

    const [showTimer, setShowTimer] = useState(false);

    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes} : ${getSeconds}`;
    }

    useEffect(() => {
        if (seconds % 15 < 10) {
            setShowTimer(false);
        } else if (seconds % 15 >= 10 && seconds % 15 < 15) {
            setShowTimer(true);
        }
    }, [seconds])

    return (
        <View>
            {seconds % 15 < 10 ? (
                <Text style={{color: "black", fontSize: 30}}>{formatTime(seconds)}</Text>
            ) : null }
        </View>
    )
}

export default MyCountDown;