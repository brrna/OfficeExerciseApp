import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyButton from "../components/myButton/MyButton";
import { useState } from "react";

const Waist = () => {

    const navigation = useNavigation();
    const [playing, setPlaying] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);

    const videoIds = ['bJms9YyjoBI', 'ryNlb_0GmAw', 'q46qN4ypiFo'];

    const onStateChange = (event) => {
        if (event === 'ended') {
            const nextVideoIndex = (videoIndex + 1) % videoIds.length;
            setTimeout(() => { // bir sonraki videonun başlamasını geciktir
                setPlaying(true); // bir sonraki videoyu başlat
                setVideoIndex(nextVideoIndex);
            }, 10000);
        }
    }

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "pink"
            }}>
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

            <Text>Bel</Text>

            <MyButton videoId={videoIds[videoIndex]} onStateChange={event => onStateChange(event)} playing={playing} setPlaying={setPlaying} videoIndex={videoIndex * 0.25} />

        </View>
    )
}

export default Waist;