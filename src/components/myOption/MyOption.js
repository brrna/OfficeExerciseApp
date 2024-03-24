import { Text, View, TouchableOpacity} from "react-native";
import createStyles from "../myOption/MyOptionStyle"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";;
import Icon from "react-native-vector-icons/Ionicons";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
 
const MyOption = ({ option }) => {

    let { theme } = useContext(ThemeContext);

    const styles = createStyles(theme);

    return (
        <View
            style={styles.container}>
            <View style={styles.textView} >
                <Text style={styles.text}>{option.text}</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.buttonView} >
                    <Icon name={option.iconName} size={hp(5)} color={theme.textColor} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MyOption;