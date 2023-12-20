import { useState } from "react";
import { View, TouchableOpacity, Text, Modal, Alert, Pressable, Button } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe"
import styles from "./MyButtonStyle"

const MyButton = () => {

    const [modalVisible, setModalVisible] = useState(false); 

    const [playing, setPlaying] = useState(false);

    const onStateChange = () => {
        if(state === 'ended') {
            setPlaying(false);
            Alert.alert("video finished");
        }
    };

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