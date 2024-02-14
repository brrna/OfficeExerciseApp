import { useContext, useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyTimerStyles";
import { TimerContext } from "../../context/TimerContext";

const MyTimer = ({gif = [0]}) => {

    let {theme} = useContext(ThemeContext);
    let {seconds, setSeconds} = useContext(TimerContext);
    let {gifIndex, setGifIndex} = useContext(TimerContext);

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
        } else if (seconds % 15 === 0) {
            setFinish(true);
            setShowText(false);
            setSeconds(1);
        }
}, [seconds])

return (
    <View>
        {seconds % 15 < 10 ? (
            <Image source={gif[gifIndex]} style={styles.gif} />
        ) : showText ? (
            <View style={styles.textView}><Text style={styles.text}>DİNLEN</Text></View>
        ) : finish ? (
            <Text>BİTTİ</Text> 
        ) : null}
    </View>
)
}

export default MyTimer;