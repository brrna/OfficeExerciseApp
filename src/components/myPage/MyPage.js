import { Pressable, View } from "react-native";
import MyButton from "../myButton/MyButton";
import Home from "../../pages/home/Home";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"
import createStyles from "../myPage/MyPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const MyPage = ({ gif, gifIndex, setGifIndex }) => {

    let {theme} = useContext(ThemeContext);

    const navigation = useNavigation();
    const styles = createStyles(theme);

    return (
        <View>

            <View
                style={styles.ArrowContainer}>
                <Pressable
                    onPress={() => navigation.navigate(Home)}
                    style={styles.Arrow}>
                    <Icon name="arrow-back-outline" style={styles.ArrowText} />
                </Pressable>
            </View>

            <View style={styles.button_container}>

                <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

            </View>

        </View>
    )
}

export default MyPage;