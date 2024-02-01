import { View } from "react-native";
import { useState } from "react";
import MyPage from "../components/myPage/MyPage";

const WholeBody = () => {

    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/gifs/pick-up-knees.gif"),
        require("../assests/gifs/jumping-jack.gif"),
        require("../assests/gifs/body-stretch.gif")
    ]

    return(
        <View>
            <MyPage gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />
        </View>
    )
}

export default WholeBody;