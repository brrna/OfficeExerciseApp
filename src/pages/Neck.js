import { View } from "react-native";
import { useContext } from "react";
import MyPage from "../components/myPage/MyPage";
import { TimerContext } from "../context/TimerContext";
import { NeckExercise } from "../values/Gifs";


const Neck = () => {

    let {gifIndex, gif} = useContext(TimerContext);

    return(
        <View>
            <MyPage 
            gif={NeckExercise} 
            progress={(1 / gif.length) * (gifIndex + 1)} />
        </View>
    )
}

export default Neck;