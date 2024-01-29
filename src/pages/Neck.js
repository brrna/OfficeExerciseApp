import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useState } from "react";
import MyPage from "../components/myPage/MyPage";

const Neck = () => {

    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/gifs/shoulder-circle.gif"),
        require("../assests/gifs/neck-circle.gif"),
        require("../assests/gifs/head-tilt.gif")
    ]

    return(
        <View>
            <MyPage gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />
        </View>
    )
}

export default Neck;