import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Animated from "react-native-reanimated";

const Card = ({ exercise }) => {
    return (
        <View
            style={{
                height: hp("30%"),
                width: wp("100%"),
                borderColor: "black",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
            }}>
            <View
                style={{
                    backgroundColor: "yellow",
                    height: hp("29%"),
                    width: wp("60%"),
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Image
                    style={{
                        height: 50,
                        width: 50
                    }}
                    source={{ uri: exercise.imageURL }}
                    resizeMode="center" />
            </View>

            <View
                style={{
                    backgroundColor: "orange",
                    height: hp("29%"),
                    width: wp("40%")
                }}>
                <Text>{exercise.title}</Text>

                <Text
                    style={{
                        fontSize: 50
                    }}>{exercise.time}</Text>
            </View>
        </View>
    )
}

export default Card;