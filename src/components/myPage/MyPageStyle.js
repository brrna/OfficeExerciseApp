import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    x_container: {
        height: hp(5),
        width: wp(100),
        backgroundColor: "pink",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 15
    },
    x_button: {
        height: hp(5),
        width: wp(10),
        backgroundColor: "red"
    },
    button_container: {
        backgroundColor: "blue",
        height: hp(95),
        width: wp(100),
        alignItems: "center",
        justifyContent: "center"
    }
})