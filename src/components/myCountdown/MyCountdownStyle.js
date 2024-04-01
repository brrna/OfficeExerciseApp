import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        text: {
            color: theme.textColor,
            fontFamily: "Winter Storm",
            fontSize: hp(8)
        }
    })
}