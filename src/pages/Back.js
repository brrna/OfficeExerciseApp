import { View, Text, Alert, Button, TouchableOpacity} from "react-native";
import { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";
import Home from "./home/Home";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyButton from "../components/button/MyButton";

const Back = () => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = () => {
        if(state === 'ended') {
            setPlaying(false);
            Alert.alert("video finished");
        }
    };

    const navigation = useNavigation();

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

            <YoutubePlayer
            height={300}
            play={playing}
            videoId={'lqOuqA1Ii7U'} 
            onChangeState={onStateChange}/>

            <Button title={playing ? 'pause' : 'play'} onPress={() => setPlaying((prev) => !prev)} />
            
            <MyButton />

        </View>
    )
}

export default Back;