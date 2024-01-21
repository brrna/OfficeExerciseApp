import { useState } from "react";
import { View, TouchableOpacity, Text, Modal, Pressable, Button } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import styles from "./MyButtonStyle";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import MyGif from "../myGif/MyGif";

const MyButton = () => {

    const [modalVisible, setModalVisible] = useState(false);

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
                
                    <MyGif gif={require("../../assests/images/kalp.gif")}/>

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