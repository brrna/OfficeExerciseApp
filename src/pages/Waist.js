import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import MyPage from "../components/myPage/MyPage";
import { TimerContext } from "../context/TimerContext";
import { WaistExercise } from "../values/Gifs";
import { ThemeContext } from "../context/ThemeContext";

const Waist = () => {

    let {gifIndex, gif} = useContext(TimerContext);
    let {theme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.modal
        }
    })

    return (
        <View style={styles.container}>
            <MyPage 
            gif={WaistExercise} 
            progress={(1 / gif.length) * (gifIndex + 1)} />
        </View>
    )
}

export default Waist;