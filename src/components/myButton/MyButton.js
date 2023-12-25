import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Modal, Alert, Pressable, Button } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe"
import styles from "./MyButtonStyle"

const MyButton = ({videoId, onStateChange}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        if(playing) {
            const id = setTimeout(() => {
                setPlaying(false);
                onStateChange('ended');
            }, 40000); // 40 saniye sonra video kapansın
            setTimerId(id);
        } else if (timerId) {
            clearTimeout(timerId);
        }
    }, [playing] )

    useEffect(() => {
        if(modalVisible) {
            setPlaying(true);
        } else {
            setPlaying(false);
        }
    }, [modalVisible])

    useEffect(() => {
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [timerId]);

    return (
        <View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
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
                        videoId={videoId} // durum değişkenini kullan
                        onChangeState={onStateChange} />

                    <Button title={playing ? 'duraklat' : 'oynat'} onPress={() => setPlaying((prev) => !prev)} />

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
