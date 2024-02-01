import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.modal,
            width: wp(100),
            height: hp(5),
            alignItems: "center",
            justifyContent: "center"
        }
    })

}