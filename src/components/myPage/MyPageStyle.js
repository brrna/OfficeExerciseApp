import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    button_container: {
        backgroundColor: "#e8d7ff",
        height: hp(95),
        width: wp(100),
        alignItems: "center",
        justifyContent: "center"
    },
    x_container: {
        backgroundColor: "#e8d7ff",
        width: wp(100),
        height: hp(6),
        alignItems: "flex-end",
        justifyContent: "center"
    },
    x: {
        backgroundColor: "#e8d7ff",
        height: hp(6),
        width: wp(10),
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    }, 
    x_text: {
        fontWeight: "bold",
        fontSize: 42,
        color: "#240046"
    }
})