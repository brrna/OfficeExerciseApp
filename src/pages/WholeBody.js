import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";

const WholeBody = () => {

    const navigation = useNavigation();

    const gif = [
        require("../assests/images/pick-up-knees.gif"),
        require("../assests/images/jumping-jack.gif"),
        require("../assests/images/body-stretch.gif")
    ]

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

            <Text>Tüm Vücut</Text>

            <MyButton gif={gif[0]} />

        </View>
    )
}

export default WholeBody;