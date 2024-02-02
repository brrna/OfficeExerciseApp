import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const MyTimer = ({ gif = [0], gifIndex }) => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(timer);
    })

    return (
        <View>
            {seconds % 15 < 10 ? (
                <Image source={gif[gifIndex]} style={styles.gif} />
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