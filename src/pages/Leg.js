import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";

const Leg = () => {

    const navigation = useNavigation();

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
        </View>
    )
}

export default Leg;