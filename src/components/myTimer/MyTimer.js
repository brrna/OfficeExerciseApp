import { useContext, useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyTimerStyles";
import { TimerContext } from "../../context/TimerContext";

const MyTimer = () => {

    let {theme} = useContext(ThemeContext);
    let {seconds, gifIndex, gif} = useContext(TimerContext);

    const styles = createStyles(theme);

    const [showText, setShowText] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        console.log("1")
        if (seconds % 15 < 10) {
            console.log("2")
            setShowText(false);
            setFinish(false);
        } else if (seconds % 15 >= 10 && seconds % 15 < 15) {
            console.log("3")
            setShowText(true);
            setFinish(false);
        } else if (seconds % 15 === 0) {
            console.log("4")
            setFinish(true);
            setShowText(false);
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