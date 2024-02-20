import { View } from "react-native";
import MyButton from "../myButton/MyButton";
import { useNavigation } from "@react-navigation/native";
import createStyles from "../myPage/MyPageStyle";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MyArrowBack from "../myArrowBack.js/myArrowBack";
import { TimerContext } from "../../context/TimerContext";

const MyPage = ({ progress, gif = [0] }) => {

    let {theme, completedStyle} = useContext(ThemeContext);
    let {seconds, setGifIndex} = useContext(TimerContext);

    const navigation = useNavigation();
    const styles = createStyles(theme, completedStyle);

    useEffect(() => {
        if(seconds % 15 === 0){
            setGifIndex(gifIndex => (gifIndex + 1));
        }
    }, [seconds]);

    return (
        <View>

            <MyArrowBack onPress={() => navigation.navigate("Home")} />

            <View style={styles.button_container}>

                <MyButton progress={progress} gif={gif} />

            </View>

        </View>
    )
}

export default MyPage;