import { View } from "react-native";
import { useContext, useEffect, useState } from "react";
import MyPage from "../components/myPage/MyPage";
import { TimerContext } from "../context/TimerContext";

const Back = () => {

    let {gifIndex} = useContext(TimerContext);

    const gif = [
        require("../assests/gifs/wall-pushup.gif"),
        require("../assests/gifs/wall-sit.gif"),
        require("../assests/gifs/sitting-spine-bending.gif")
    ]
    

    return (
        <View>

            <MyPage 
            gif={gif} 
            progress={(1 / gif.length) * (gifIndex + 1)} />

        </View>
    )
}

export default Back;