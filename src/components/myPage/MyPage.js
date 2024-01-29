import { Pressable, Text, View } from "react-native";
import MyButton from "../myButton/MyButton";
import styles from "../myPage/MyPageStyle"
import Home from "../../pages/home/Home";
import { useNavigation } from "@react-navigation/native";

const MyPage = ({ gif, gifIndex, setGifIndex }) => {

    const navigation = useNavigation();

    return (
        <View>

            <View
                style={styles.x_container}>
                <Pressable
                    onPress={() => navigation.navigate(Home)}
                    style={styles.x}>
                        <Text style={styles.x_text}>X</Text>
                    </Pressable>
            </View>

            <View style={styles.button_container}>

                <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

            </View>

        </View>
    )
}

export default MyPage;