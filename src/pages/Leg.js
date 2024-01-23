import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";

const Leg = () => {

    const navigation = useNavigation();

    const gif = [
        require("../assests/images/side-lunges.gif"),
        require("../assests/images/calf-raises.gif"),
        require("../assests/images/leg-stretches.gif")
    ]

    return(
        <View>

            <Text>Leg</Text>

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
            
            <MyButton gif={gif} />

        </View>
    )
}

export default Leg;