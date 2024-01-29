import { View, TouchableOpacity } from "react-native";
import MyButton from "../myButton/MyButton";
import Home from "../../pages/home/Home";
import { useNavigation } from "@react-navigation/native";
import styles from "../myPage/MyPageStyle"

const MyPage = ({gif, gifIndex, setGifIndex}) => {

    const navigation = useNavigation();

    return (
        <View>

            <View style={styles.x_container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Home)}
                    style={styles.x_button} />
            </View>

            <View style={styles.button_container}>

                <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

            </View>

        </View>
    )
}

export default MyPage;