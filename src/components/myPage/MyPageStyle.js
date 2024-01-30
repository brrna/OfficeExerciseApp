import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    button_container: {
        backgroundColor: "#e8d7ff",
        height: hp(100),
        width: wp(100),
        alignItems: "center",
        justifyContent: "center"
    },
    ArrowContainer: {
        backgroundColor: "#e8d7ff",
        width: wp(100),
        height: hp(6),
        alignItems: "flex-start",
        justifyContent: "center"
    },
    Arrow: {
        backgroundColor: "#e8d7ff",
        height: hp(6),
        width: wp(10),
        marginLeft: wp(2),
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(2)
    }, 
    ArrowText: {
        fontWeight: "bold",
        fontSize: 42,
        color: "#240046"
    }
})