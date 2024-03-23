import { Text, View } from "react-native";
import createStyles from "../myOption/MyOptionStyle"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const MyOption = ({option}) => {

    let {theme} = useContext(ThemeContext);

    const styles = createStyles(theme);

    return(
        <View
            style={styles.container}>

                <View style={styles.icon} >
                    <Text>{option.icon}</Text>
                </View>

                <View style={styles.textView} >
                    <Text style={styles.text}>{option.text}</Text>
                </View>

                <View style={styles.button} >
                    <Text>{option.press}</Text>
                </View>
        </View>
    )
}

export default MyOption;