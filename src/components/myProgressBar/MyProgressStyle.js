import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { lightTheme } from "../../values/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: lightTheme.modal,
        width: wp(100),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center"
    }
})