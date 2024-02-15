import { View } from "react-native";
import { useContext, useEffect, useState } from "react";
import MyPage from "../components/myPage/MyPage";
import { TimerContext } from "../context/TimerContext";
import { BackExercise } from "../values/Gifs";

const Back = () => {

    let {gifIndex, gif} = useContext(TimerContext);

    return (
        <View>
            <MyPage 
            gif={BackExercise} 
            progress={(1 / gif.length) * (gifIndex + 1)} />
        </View>
    )
}

export default Back;