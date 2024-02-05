import { View } from "react-native";
import { useState } from "react";
import MyPage from "../components/myPage/MyPage";

const Back = () => {

    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/gifs/wall-pushup.gif"),
        require("../assests/gifs/wall-sit.gif"),
        require("../assests/gifs/sitting-spine-bending.gif")
    ]

    return (
        <View>

            <MyPage gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

        </View>
    )
}

export default Back;