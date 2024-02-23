import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.modal
        },
        button_container: {
            backgroundColor: theme.modal,
            height: hp(100),
            width: wp(100),
            alignItems: "center",
            justifyContent: "center"
        },
        ArrowContainer: {
            backgroundColor: theme.modal,
            width: wp(100),
            height: hp(6),
            alignItems: "flex-start",
            justifyContent: "center"
        },
        Arrow: {
            backgroundColor: theme.modal,
            height: hp(6),
            width: wp(10),
            marginLeft: wp(2),
            justifyContent: "center",
            alignItems: "center"
        },
        ArrowText: {
            fontWeight: "bold",
            fontSize: 42,
            color: theme.textColor
        }
    })

}