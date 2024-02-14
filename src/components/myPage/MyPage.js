import { View } from "react-native";
import MyButton from "../myButton/MyButton";
import { useNavigation } from "@react-navigation/native";
import createStyles from "../myPage/MyPageStyle";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MyArrowBack from "../myArrowBack.js/myArrowBack";
import { TimerContext } from "../../context/TimerContext";

const MyPage = ({ gif, progress }) => {

    let {theme} = useContext(ThemeContext);
    let {seconds, gifIndex, setGifIndex} = useContext(TimerContext);

    const navigation = useNavigation();
    const styles = createStyles(theme);

    useEffect(() => {
        if(seconds % 15 === 0){
            setGifIndex(gifIndex => (gifIndex + 1) % gif.length);
        }
    }, [seconds]);

    return (
        <View>

            <MyArrowBack onPress={() => navigation.navigate("Home")} />

            <View style={styles.button_container}>

                <MyButton gif={gif} progress={progress} />

            </View>

        </View>
    )
}

export default MyPage;