//Card componentinin style dosyası
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(theme) {
    return StyleSheet.create({
        container: {
            height: hp(23),
            width: wp(98),
            borderColor: theme.detail,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
            backgroundColor: theme.detail,
            margin: 5
        },
        completedContainer: {
            opacity: 0.5
        },
        imageView: {
            backgroundColor: theme.background,
            height: hp(21),
            width: wp(50),
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        },
        image: {
            height: hp(41),
            width: wp(41),
        },
        textView: {
            backgroundColor: theme.modal,
            height: hp(21),
            width: wp(40),
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
        },
        title: {
            color: theme.textColor,
            fontWeight: "bold",
            fontSize: hp(3),
            fontStyle: "italic"
        },
        time: {
            color: theme.textColor
        }
    })
}
