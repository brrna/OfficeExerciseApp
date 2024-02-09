import { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const MyTimer = ({ gif = [0], gifIndex }) => {

    const [seconds, setSeconds] = useState(0);
    const [showText, setShowText] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(timer);
    })

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
        }
}, [seconds])

return (
    <View>
        {seconds % 15 < 10 ? (
            <Image source={gif[gifIndex]} style={styles.gif} />
        ) : showText ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}><Text>DİNLEN</Text></View>
        ) : finish ? (
            <Text>BİTTİ</Text> 
        ) : null}
    </View>
)
}

const styles = StyleSheet.create({
    gif: {
        width: wp(100),
        height: hp(35)
    }
})

export default MyTimer;