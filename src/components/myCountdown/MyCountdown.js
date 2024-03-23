import { useContext, useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { TimerContext } from "../../context/TimerContext";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyCountdownStyle";
import Sound from "react-native-sound"

const MyCountDown = () => {

    let { seconds } = useContext(TimerContext);
    let { theme } = useContext(ThemeContext);

    var sound = new Sound(require("../../assests/sounds/beep.mp3"), '', (error) => {
        if (error) {
            console.log('Ses dosyası yüklenirken hata oluştu: ' + JSON.stringify(error));
            return;
        }
    });

    const styles = createStyles(theme)
    const [showExercise, setShowExercise] = useState(false);
    const [showRest, setShowRest] = useState(false);

    const playSound = () => {
        sound.play((success) => {
            if (!success) {
                console.log('Ses dosyası çalınırken hata oluştu.');
            }
        });
    }

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
            playSound()
        } else if (remainder < 15 && remainder >= 10) {
            console.log("5 den geriye")
            setShowExercise(false);
            setShowRest(true);
            playSound()
        } else {
            console.log("bitti")
            setShowExercise(false);
            setShowRest(false);
            playSound()
        }
    }, [seconds])

    return (
        <View>
            {showExercise ? (
                <Text style={styles.text}>{formatTime(10 - (seconds % 15))}</Text>
            ) : showRest ? (
                <Text style={styles.text}>DİNLEN</Text>
            ) : null}

            <Pressable
                onPress={handlePress}
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "blue"
                }} />

        </View>
    )
}

export default MyCountDown;