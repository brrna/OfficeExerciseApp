//Card componentinin style dosyası
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { lightTheme } from "../../values/Colors";

export default StyleSheet.create({
    container: {
        height: hp(23),
        width: wp(98),
        borderColor: lightTheme.detail,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: lightTheme.detail,
        margin: 5
    },
    imageView: {
        backgroundColor: lightTheme.background,
        height: hp(21),
        width: wp(50),
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    image: {
        height: hp(41),
        width: wp(41),
    },
    textView: {
        backgroundColor: lightTheme.modal,
        height: hp(21),
        width: wp(40),
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    title: {
        color: lightTheme.textColor,
        fontWeight: "bold",
        fontSize: hp(3),
        fontStyle: "italic"
    },
    time: {
        color: lightTheme.textColor
    }
})