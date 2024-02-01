//Header componentinin style dosyası oluşturuldu
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { lightTheme } from "../../values/Colors";

export default StyleSheet.create({
    container: {
        height: hp(9),
        width: wp(100),
        backgroundColor: lightTheme.background,
        flexDirection: "row"
    },
    title: {
        height: hp(9),
        width: wp(75),
        backgroundColor: lightTheme.background,
        justifyContent: "center"
    },
    titletext: {
        fontStyle: "italic",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 15,
        color: lightTheme.textColor
    },
    mode: {
        height: hp(9),
        width: wp(25),
        backgroundColor: lightTheme.modal,
        alignItems: "center",
        justifyContent: "center"
    }
})