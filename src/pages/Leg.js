import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";

const Leg = () => {

    const navigation = useNavigation();

    return(
        <View
            style={{flex: 1}}>

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
            
            <MyButton />

        </View>
    )
}

export default Leg;