import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Modal, Alert, Pressable, Button } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe"
import styles from "./MyButtonStyle"

const MyButton = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const onStateChange = (state) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert("video finished");
        }
    };

    useEffect(() => {
        if(playing) {
            const id = setInterval(() => {
                console.log("1");
                setPlaying(false);
                console.log("2");
                setTimeout(() => {
                    console.log("3");
                    setPlaying(true);
                    console.log("4");
                }, 10000);
                console.log("5");
            }, 30000);
            console.log("6");
            setTimerId(id);
        } else if (timerId) {
            console.log("7");
            clearInterval(timerId);
        }
    }, [playing] )

    return (
        <View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.")
                    setModalVisible(!modalVisible)
                }}>

                <View
                    style={styles.container}>

                    <Pressable //modal dan çıkmaK için
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>X</Text>
                    </Pressable>

                    <YoutubePlayer
                        height={300}
                        play={playing}
                        videoId={'lqOuqA1Ii7U'}
                        onChangeState={onStateChange} />

                    <Button title={playing ? 'pause' : 'play'} onPress={() => setPlaying((prev) => !prev)} />

                </View>

            </Modal>

            <TouchableOpacity
                onPress={() => { setModalVisible(true) }}
                style={{
                    backgroundColor: "green",
                    height: hp("30%"),
                    width: wp("70%")
                }}>
                <Text style={{ fontSize: 30 }} >BAŞLA</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MyButton;