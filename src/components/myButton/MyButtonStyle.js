import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(100),
        backgroundColor: "red",
        flexDirection: "column",
    },
    button: {
        backgroundColor: "white",
        height: hp(3),
        width: wp(5),
        alignItems: "center",
        justifyContent: "center"
    },
    button_text: {
        color: "black"
    }
})