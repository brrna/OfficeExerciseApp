import { View, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";

const Back = () => {

    const navigation = useNavigation();

    const gif = [
        require("../assests/images/wall-pushup.gif"),
        require("../assests/images/wall-sit.gif"),
        require("../assests/images/sitting-spine-bending.gif")
    ]
    

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
            
            <MyButton gif={gif[1]} />
            
        </View>
    )
}

export default Back;