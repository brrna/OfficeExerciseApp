import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import MyPage from "../components/myPage/MyPage";
import { LegExercise } from "../values/Gifs";
import { TimerContext } from "../context/TimerContext";
import { ThemeContext } from "../context/ThemeContext";

const Leg = () => {

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
                gif={LegExercise}
                progress={(1 / gif.length) * (gifIndex + 1)} />
        </View>
    )
}

export default Leg;