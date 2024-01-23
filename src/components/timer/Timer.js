import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

const Timer = ({gifs = []}) => {

    const [gifIndex, setGifIndex] = useState(0);
    const [seconds, setSeconds] = useState(0);

    

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        return() => clearInterval(timer);
    })

    return(
        <View>
            {seconds % 40 < 30 ? (
                <Image source={gifs[gifIndex]} style={{ width: 200, height: 200 }} />
            ) : null}
            <Text>{seconds} saniye geçti</Text>
        </View>
    )
}

export default Timer;