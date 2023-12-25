import { useState } from "react";
import { View, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";

const Back = () => {

    const navigation = useNavigation();
    const [videoIndex, setVideoIndex] = useState(0); // ilk video indexi
    const videoIds = ['lqOuqA1Ii7U', 'gDUzaANQ01A', 'V-_O7nl0Ii0']; // video kimliklerinin listesi

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
            
            <MyButton videoId={videoIds[videoIndex]} onStateChange={onStateChange} playing={playing} setPlaying={setPlaying}/>

        </View>
    )
}

export default Back;
