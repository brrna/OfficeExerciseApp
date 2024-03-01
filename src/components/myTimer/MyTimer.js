import { useContext, useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyTimerStyles";
import { TimerContext } from "../../context/TimerContext";

const MyTimer = ({ gif }) => {

    let { theme } = useContext(ThemeContext);
    let { seconds, gifIndex } = useContext(TimerContext);

    const styles = createStyles(theme);

    const [showText, setShowText] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        if (seconds % 15 < 10) {
            setShowText(false);
            setFinish(false);
        } else if (seconds % 15 >= 10 && seconds % 15 < 15) {
            setShowText(true);
            setFinish(false);
        } else {
            setFinish(false);
            setShowText(false);
        }

        if (!showText && seconds % 15 >= 10) {
            // Image gözükmediği zaman 5 saniyelik geri sayımı başlat
            const countdownTimeout = setTimeout(() => {
                setFinish(true);
            }, (seconds % 15 - 10) * 1000);

            return () => clearTimeout(countdownTimeout);
        }
    }, [seconds, showText])

    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes} : ${getSeconds}`;
    }

    return (
        <View>
            {seconds % 15 < 10 ? (
                <Image source={gif[gifIndex]} style={styles.gif} />
            ) : showText ? (
                <View style={styles.textView}><Text style={styles.text}>{formatTime(5 - (seconds % 5))}</Text></View>
            ) : finish ? (
                <Text>BİTTİ</Text>
            ) : null}
        </View>
    )
}

export default MyTimer;