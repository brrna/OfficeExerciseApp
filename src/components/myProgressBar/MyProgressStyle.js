import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        backgroundColor: "pink",
            width: wp(100),
            height: hp(10),
            alignItems: "center",
            justifyContent: "center"
    },
    bar: {
        color: "black",
        width: wp(96)
    }
})