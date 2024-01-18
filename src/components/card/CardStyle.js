//Card componentinin style dosyası
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        height: hp("22%"),
        width: wp("100%"),
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    imageView: {
        backgroundColor: "yellow",
        height: hp("21%"),
        width: wp("60%"),
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: hp("15%"),
        width: wp("15%")
    },
    textView: {
        backgroundColor: "orange",
        height: hp("21%"),
        width: wp("40%")
    },
    title: {},
    time: {}
})