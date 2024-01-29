import { View } from "react-native";
import * as Progress from "react-native-progress";
import styles from "../myProgressBar/MyProgressStyle"
import { widthPercentageToDP } from "react-native-responsive-screen";

const MyProgressBar = (props) => {

    let { progress } = props;


    return (
        <View
            style={styles.container}>

            <Progress.Bar
                progress={progress}
                width={widthPercentageToDP(96)}
                color="#7552b7"
                unfilledColor="#7552b7"
                borderWidth={1}
                borderColor="#7552b7"
                height={10}
                borderRadius={5}
            />

        </View>
    )
}

export default MyProgressBar;