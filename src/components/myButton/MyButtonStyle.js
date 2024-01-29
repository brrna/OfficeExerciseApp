import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(100),
        backgroundColor: "#e8d7ff",
        flexDirection: "column",
    },
    button: {
        backgroundColor: "#e8d7ff",
        height: hp(10),
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
    },
    button_text: {
        color: "#240046",
        fontSize: 50,
        fontWeight: "bold",
        fontStyle: "normal"
    },
    x_container: {
        backgroundColor: "#e8d7ff",
        width: wp(100),
        height: hp(6),
        alignItems: "flex-start",
        justifyContent: "center"
    },
    x: {
        backgroundColor: "#e8d7ff",
        height: hp(6),
        width: wp(10),
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    }, 
    x_text: {
        fontWeight: "bold",
        fontSize: 42,
        color: "#240046"
    }
})