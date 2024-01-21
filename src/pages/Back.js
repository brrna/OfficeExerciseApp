import { View, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";

const Back = () => {

    const navigation = useNavigation();

    return(
        <View>

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

export default Back;