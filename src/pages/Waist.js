import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyButton from "../components/myButton/MyButton";

const Waist = () => {

    const navigation = useNavigation();

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "pink"
            }}>
                <TouchableOpacity
                onPress={() => navigation.navigate(Home) }>
                <View
                    style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "red"
                    }}>
                </View>
            </TouchableOpacity>

            <Text>Bel</Text>

            <MyButton />

        </View>
    )
}

export default Waist;