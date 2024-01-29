//Card componentinin style dosyası
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        height: hp(23),
        width: wp(98),
        borderColor: "#7652b7",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#7652b7",
        margin: 5
    },
    imageView: {
        backgroundColor: "#f2f2f2",
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
        backgroundColor: "#e8d7ff",
        height: hp(21),
        width: wp(40),
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    title: {
        color: "#240046",
        fontWeight: "bold",
        fontSize: hp(3),
        fontStyle: "italic"
    },
    time: {
        color: "#240046"
    }
})