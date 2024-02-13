import { View } from "react-native";
import MyButton from "../myButton/MyButton";
import Home from "../../pages/home/Home";
import { useNavigation } from "@react-navigation/native";
import createStyles from "../myPage/MyPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MyArrowBack from "../myArrowBack.js/myArrowBack";

const MyPage = ({ gif, gifIndex, setGifIndex, progress }) => {

    let {theme} = useContext(ThemeContext);

    const navigation = useNavigation();
    const styles = createStyles(theme);

    return (
        <View>

            <MyArrowBack onPress={() => navigation.navigate(Home)} />

            <View style={styles.button_container}>

                <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} progress={progress} />

            </View>

        </View>
    )
}

export default MyPage;