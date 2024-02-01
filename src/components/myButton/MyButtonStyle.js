import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { lightTheme } from "../../values/Colors";

export default StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(100),
        backgroundColor: lightTheme.modal,
        flexDirection: "column",
    },
    top: {
        backgroundColor: lightTheme.modal,
        height: hp(50),
        width: wp(100),
        justifyContent: "space-between",
    },
    bottom: {
        backgroundColor: lightTheme.modal,
        height: hp(50),
        width: wp(100),
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: lightTheme.modal,
        height: hp(10),
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
    },
    button_text: {
        color: lightTheme.textColor,
        fontSize: 50,
        fontWeight: "bold",
        fontStyle: "normal"
    },
    ArrowContainer: {
        backgroundColor: lightTheme.modal,
        width: wp(100),
        height: hp(6),
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: hp(1)
    },
    Arrow: {
        backgroundColor: lightTheme.modal,
        height: hp(6),
        width: wp(10),
        marginLeft: wp(2),
        justifyContent: "center",
        alignItems: "center",
    }, 
    ArrowText: {
        fontWeight: "bold",
        fontSize: 42,
        color: lightTheme.textColor
    },
})