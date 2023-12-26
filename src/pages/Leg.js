import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";
import { useState } from "react";

const Leg = () => {

    const navigation = useNavigation();
    const [playing, setPlaying] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);

    const videoIds = ['uC7dzhqN47M', 'WFtPk4Z-k60', 'CYGeazlNbU4'];

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
            style={{flex: 1}}>

            <Text>Leg</Text>

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
            
            <MyButton videoId={videoIds[videoIndex]} onStateChange={event => onStateChange(event)} playing={playing} setPlaying={setPlaying} />

        </View>
    )
}

export default Leg;