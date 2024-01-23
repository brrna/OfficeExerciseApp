import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Modal, Pressable } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import styles from "./MyButtonStyle";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import Timer from "../timer/Timer";

const MyButton = ({gif, gifIndex, setGifIndex}) => {

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setGifIndex((prevIndex) => {
                if(prevIndex < gif.length){
                    return prevIndex + 1;
                }
                else{
                    return 0;
                }
            })
        }, 40000)
        return() => clearInterval(timer);
    }, [gif])

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

                    <MyProgressBar />

                    <Pressable //modal dan çıkmaK için
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>X</Text>
                    </Pressable>
                
                    <Timer gif={gif} gifIndex={gifIndex} />
              

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