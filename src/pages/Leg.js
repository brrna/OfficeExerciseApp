import { View } from "react-native";
import { useState } from "react";
import MyPage from "../components/myPage/MyPage";

const Leg = () => {

    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/gifs/side-lunges.gif"),
        require("../assests/gifs/calf-raises.gif"),
        require("../assests/gifs/leg-stretches.gif")
    ]

    return(
        <View>

            <MyPage gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

        </View>
    )
}

export default Leg;