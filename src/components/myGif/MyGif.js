import { Image, View } from "react-native";

const MyGif = ({gif}) => {
    return(
        <View>
            <Image source={gif} style={{height: 300}} />
        </View>
    )
}

export default MyGif;