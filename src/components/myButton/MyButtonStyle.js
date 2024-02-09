import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        container: {
            width: wp(100),
            height: hp(100),
            backgroundColor: theme.modal,
            flexDirection: "column",
        },
        top: {
            backgroundColor: theme.modal,
            height: hp(50),
            width: wp(100),
            justifyContent: "space-between",
        },
        bottom: {
            backgroundColor: "orange",
            height: hp(50),
            width: wp(100),
            justifyContent: "center",
            alignItems: "center"
        },
        button: {
            backgroundColor: theme.modal,
            height: hp(10),
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 100,
        },
        button_text: {
            color: theme.textColor,
            fontSize: 50,
            fontWeight: "bold",
            fontStyle: "normal"
        },
        ArrowContainer: {
            backgroundColor: theme.modal,
            width: wp(100),
            height: hp(6),
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: hp(1)
        },
        Arrow: {
            backgroundColor: theme.modal,
            height: hp(6),
            width: wp(10),
            marginLeft: wp(2),
            justifyContent: "center",
            alignItems: "center",
        },
        ArrowText: {
            fontWeight: "bold",
            fontSize: 42,
            color: theme.textColor
        },
        restView: {
            height: hp(12),
            width: wp(36),
            backgroundColor: theme.modal,
            marginTop: hp(5),
            alignItems: "center",
            justifyContent: "center"
        },
        restText: {
            color: theme.textColor,
            fontSize: hp(9)
        },
        back: {
            backgroundColor: theme.modal,
            height: hp(50),
            width: wp(50),
            justifyContent: "center",
            alignItems: "center"
        }
    })

}
