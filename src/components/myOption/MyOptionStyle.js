import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function MyOptionStyle(theme){
    return StyleSheet.create({
        container: {
            height: hp(14),
            width: wp(98),
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
            borderWidth: hp(1),
            borderBlockColor: theme.background,
            borderLeftColor: theme.background,
            borderRightColor: theme.background,
            borderBlockEndColor: theme.modal,
        },
        icon: {
            backgroundColor: theme.modal,
            height: hp(8),
            width: wp(12)
        },
        textView: {
            backgroundColor: theme.modal,
            height: hp(8),
            width: wp(55),
        },
        text: {
            color: "black"
        },
        button: {
            backgroundColor: theme.modal,
            height: hp(8),
            width: wp(12)
        }
    })
}