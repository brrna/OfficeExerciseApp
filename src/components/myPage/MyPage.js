import { View } from "react-native";
import MyButton from "../myButton/MyButton";
import { useNavigation } from "@react-navigation/native";
import createStyles from "../myPage/MyPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MyArrowBack from "../myArrowBack.js/myArrowBack";

const MyPage = ({ gif, progress }) => {

    let {theme} = useContext(ThemeContext);

    const navigation = useNavigation();
    const styles = createStyles(theme);

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