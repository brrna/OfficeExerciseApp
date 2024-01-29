import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(100),
        backgroundColor: "#f2f2f2",
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
        color: "black",
        fontSize: 50,
        fontWeight: "bold",
        fontStyle: "normal"
    },
    x_container: {
        backgroundColor: "black",
        width: wp(100),
        height: hp(6),
        alignItems: "flex-end",
        justifyContent: "center"
    },
    x: {
        backgroundColor: "red",
        height: hp(6),
        width: wp(10),
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    }, 
    x_text: {
        fontWeight: "bold",
        fontSize: 42,
        color: "black"
    }
})