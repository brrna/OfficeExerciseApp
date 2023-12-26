import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyButton from "../components/myButton/MyButton";
import { useState } from "react";

const Neck = () => {

    const navigation = useNavigation();
    const [videoIndex, setVideoIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    const videoIds = ['DEyDbzSudEU', 'Uf0MKHeT67c', 'cqCtbELMH4I', '8QyMRoSZM8c'];

    const onStateChange = (event) => {
        if(event === 'ended') {
            const nextVideoIndex = (videoIndex + 1) % videoIds.length;
            setTimeout(() => {
                setPlaying(true);
                setVideoIndex(nextVideoIndex);
            }, 10000);
        }
    }

    return(
        <View>

            <TouchableOpacity
                onPress={() => navigation.navigate(Home) }>
                <View
                    style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "red"
                    }}>
                </View>
            </TouchableOpacity>

            <Text>Neck</Text>

            <MyButton videoId={videoIds[videoIndex]} playing={playing} setPlaying={setPlaying} onStateChange={event => onStateChange(event)} />

        </View>
    )
}

export default Neck;