import { Image, View } from "react-native";

const MyGif = ({source}) => {
    return(
        <View>
            <Image source={source} style={{height: 300}} />
        </View>
    )
}

export default MyGif;