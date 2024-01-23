import { Image, View } from "react-native";
import styles from "./MyGifStyle"

const MyGif = ({gif = [""], gifIndex}) => {

    return(
        <View>
            <Image source={gif[gifIndex]} style={styles.gif} />
        </View>
    )
}

export default MyGif;