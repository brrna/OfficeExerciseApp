import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        gif: {
            width: wp(100),
            height: hp(35)
        },
        textView: {
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            color: theme.textColor,
            fontSize: hp(9),
            fontFamily: "Winter Storm"
        }
    })
}
