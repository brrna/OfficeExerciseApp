import { View } from "react-native";
import { useContext, useState } from "react";
import MyPage from "../components/myPage/MyPage";
import { LegExercise } from "../values/Gifs";
import { TimerContext } from "../context/TimerContext";

const Leg = () => {

    let {gifIndex, gif} = useContext(TimerContext)    

    return (
        <View>
            <MyPage
                gif={LegExercise}
                progress={(1 / gif.length) * (gifIndex + 1)} />
        </View>
    )
}

export default Leg;