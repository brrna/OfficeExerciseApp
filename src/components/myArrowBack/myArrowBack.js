import { useContext } from "react";
import { View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./myArrowBackStyle";

function MyArrowBack({onPress}) {

    let {theme} = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View
            style={styles.ArrowContainer}>
            <Pressable
                onPress={onPress}
                style={styles.Arrow}>
                <Icon name="arrow-back-outline" style={styles.ArrowText} />
            </Pressable>
        </View>
    )
}

export default MyArrowBack;