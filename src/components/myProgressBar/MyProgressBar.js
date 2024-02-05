import { View } from "react-native";
import * as Progress from "react-native-progress";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useContext } from "react";
import createStyles from "../myProgressBar/MyProgressStyle";
import { ThemeContext } from "../../context/ThemeContext";

const MyProgressBar = ({progress}) => {

    let {theme} = useContext(ThemeContext);

    const styles = createStyles(theme);

    return (
        <View
            style={styles.container}>

            <Progress.Bar
                progress={progress}
                width={widthPercentageToDP(96)}
                color={theme.detail}
                unfilledColor={theme.modal}
                borderWidth={1}
                borderColor={theme.detail}
                height={10}
                borderRadius={5}
            />

        </View>
    )
}

export default MyProgressBar;