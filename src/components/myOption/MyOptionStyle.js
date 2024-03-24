import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function MyOptionStyle(theme){
    return StyleSheet.create({
        container: {
            height: hp(14),
            width: wp(96),
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
            borderWidth: 2,
            borderBlockColor: theme.background,
            borderLeftColor: theme.background,
            borderRightColor: theme.background,
            borderBlockEndColor: theme.detail,
        },
        textView: {
            backgroundColor: theme.background,
            height: hp(9),
            width: wp(55),
            justifyContent: "center"
        },
        text: {
            color: theme.textColor,
            fontSize: hp(3),
            marginLeft: wp(2)
        },
        buttonView: {
            backgroundColor: theme.background,
            height: hp(8),
            width: wp(12),
            justifyContent: "center",
            alignItems: "center"
        }
    })
}