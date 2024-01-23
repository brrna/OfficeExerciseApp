//Header componentinin style dosyası oluşturuldu
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        height: hp(9),
        width: wp(100),
        backgroundColor: "red",
        flexDirection: "row"
    },
    title: {
        height: hp(9),
        width: wp(75),
        backgroundColor: "green",
        justifyContent: "center"
    },
    titletext: {
        fontStyle: "italic",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 15
    },
    mode: {
        height: hp(9),
        width: wp(25),
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center"
    }
})