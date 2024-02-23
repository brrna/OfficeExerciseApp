import { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { TimerContext } from "../../context/TimerContext";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyCountdownStyle";

const MyCountDown = () => {

    let { seconds } = useContext(TimerContext);
    let {theme} = useContext(ThemeContext)

    const styles = createStyles(theme)
    const [showExercise, setShowExercise] = useState(false);
    const [showRest, setShowRest] = useState(false);

    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes} : ${getSeconds}`;
    }

    useEffect(() => {
        const remainder = seconds % 15;
        if (remainder < 10) {
            console.log("10 dan geriye")
            setShowRest(false);
            setShowExercise(true);
        } else if (remainder < 15 && remainder >= 10) {
            console.log("5 den geriye")
            setShowExercise(false);
            setShowRest(true);
        } else {
            console.log("bitti")
            setShowExercise(false);
            setShowRest(false);
        }
    }, [seconds])


    return (
        <View>
            {showExercise ? (
                <Text style={styles.text}>{formatTime(10 - (seconds % 10))}</Text>
            ) : showRest ? (
                <Text style={styles.text}>{formatTime(5 - (seconds % 5))}</Text>
            ) : null}

        </View>
    )
}

export default MyCountDown;