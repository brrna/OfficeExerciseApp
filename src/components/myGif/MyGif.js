import { Image, View } from "react-native";
import createStyles from "./MyGifStyle";

const MyGif = ({gif = [""], gifIndex}) => {

    const styles = createStyles();

    return(
        <View>
            <Image source={gif[gifIndex]} style={styles.gif} />
        </View>
    )
}

export default MyGif;