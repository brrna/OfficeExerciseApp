import { Image, View } from "react-native";
import styles from "./MyGifStyle"
import { useState, useEffect } from "react";

const MyGif = ({gif = []}) => {

    const [gifIndex, setGifIndex] = useState(0);

    useEffect (() => {
        const timer = setInterval(() => {
            setGifIndex((prevIndex) => {
                if(prevIndex < gif.length - 1){
                    return prevIndex + 1;
                }
                else{
                    return 0;
                }
            });
        }, 40000);
        return() => clearInterval(timer);
    }, []);

    return(
        <View>
            <Image source={gif[gifIndex]} style={styles.gif} />
        </View>
    )
}

export default MyGif;