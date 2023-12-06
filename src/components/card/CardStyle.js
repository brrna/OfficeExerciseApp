//Card componentinin style dosyası
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        height: hp("30%"),
        width: wp("100%"),
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    imageView: {
        backgroundColor: "yellow",
        height: hp("29%"),
        width: wp("60%"),
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 50,
        width: 50
    },
    textView: {
        backgroundColor: "orange",
        height: hp("29%"),
        width: wp("40%")
    },
    title: {},
    time: {}
})