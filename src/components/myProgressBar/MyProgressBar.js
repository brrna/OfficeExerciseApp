import { View } from "react-native";
import * as Progress from "react-native-progress";
import styles from "../myProgressBar/MyProgressStyle"

const MyProgressBar = (props) => {

    let { progress } = props;


    return (
        <View
            style={styles.container}>

            <Progress.Bar progress={progress} style={styles.bar} />

        </View>
    )
}

export default MyProgressBar;