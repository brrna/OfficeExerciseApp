import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Modal, Pressable } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import styles from "./MyButtonStyle";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import Timer from "../myTimer/MyTimer";
import { useNavigation } from "@react-navigation/native";
import Home from "../../pages/home/Home";

const MyButton = ({gif, gifIndex, setGifIndex}) => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setGifIndex((prevIndex) => {
                if (prevIndex < gif.length - 1) {
                    return prevIndex + 1;
                } else {
                    setModalVisible(false); //gif sonu modal kapandı 
                    return 0;
                }
            });
        }, 15000);

        return () => clearInterval(timer);
    }, [gif, setGifIndex]);

    return (
        <View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        navigation.navigate(Home);
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
                onPress={() => { 
                    setGifIndex(0)
                    setModalVisible(true) }}
                style={{
                    backgroundColor: "green",
                    height: hp("30%"),
                    width: wp("70%"),
                    marginBottom: 100               }}>
                <Text style={{ fontSize: 30 }} >BAŞLA</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MyButton;