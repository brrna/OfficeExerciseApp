//Header componentinin style dosyası oluşturuldu
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        container: {
            height: hp(9),
            width: wp(100),
            backgroundColor: theme.background,
            flexDirection: "row"
        },
        title: {
            height: hp(9),
            width: wp(75),
            backgroundColor: theme.background,
            justifyContent: "center",
        },
        titletext: {
            fontFamily: "LONDON PRESLEY",
            fontSize: hp(4),
            marginLeft: wp(5),
            color: theme.textColor
        },
        mode: {
            height: hp(9),
            width: wp(25),
            backgroundColor: theme.background,
            alignItems: "center",
            justifyContent: "center"
        }
    })
}