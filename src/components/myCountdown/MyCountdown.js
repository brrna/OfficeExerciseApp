import { useContext, useState, useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { TimerContext } from "../../context/TimerContext";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyCountdownStyle";
import Sound from "react-native-sound"

const MyCountDown = () => {

    let { seconds } = useContext(TimerContext);
    let { theme } = useContext(ThemeContext);

    const styles = createStyles(theme)
    const [showExercise, setShowExercise] = useState(false);
    const [showRest, setShowRest] = useState(false);
    const sound = useRef(null)

    if (!sound.current) {
        sound.current = new Sound(require("../../assests/sounds/beep.mp3"), '', (error) => {
            if (error) {
                console.log('Ses dosyası yüklenirken hata oluştu: ' + JSON.stringify(error));
                return;
            }
        });
    }

    const playSound = () => {
        sound.current.play((success) => { // sound.current kullanın
            if (!success) {
                console.log('Ses dosyası çalınırken hata oluştu.');
            }
            console.log("ses dosyası çalındı")
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
        if(remainder == 10 || remainder == 15){
            playSound()
        } else if (remainder < 10) {
            console.log("10 dan geriye")
            setShowRest(false);
            setShowExercise(true);
        }else if (remainder < 15 && remainder >= 10) {
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
                <Text style={styles.text}>{formatTime(10 - (seconds % 15))}</Text>
            ) : showRest ? (
                <Text style={styles.text}>DİNLEN</Text>
            ) : null}

        </View>
        
    )
}

export default MyCountDown;