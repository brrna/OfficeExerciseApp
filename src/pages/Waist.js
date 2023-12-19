import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";

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
        </View>
    )
}

export default Waist;