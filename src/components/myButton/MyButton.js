import { useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import styles from "./MyButtonStyle";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import { useNavigation } from "@react-navigation/native";
import Home from "../../pages/home/Home";
import Icon from "react-native-vector-icons/Ionicons"
import MyTimer from "../myTimer/MyTimer";
import * as Progress from "react-native-progress";

const MyButton = ({ gif, gifIndex, setGifIndex }) => {

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

                <View style={styles.container}>

                    <View style={styles.top}>
                        <View
                            style={styles.ArrowContainer}>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.Arrow}>
                                <Icon name="arrow-back-outline" style={styles.ArrowText} />
                            </Pressable>
                        </View>

                        <MyTimer gif={gif} gifIndex={gifIndex} />

                            <MyProgressBar />
                        

                       
                    </View>

                    <View style={styles.bottom}>
                       <Text>saniye geriye akacak</Text>   
                    </View>


                </View>

            </Modal>

            <Pressable
                onPress={() => {
                    setGifIndex(0)
                    setModalVisible(true)
                }}
                style={styles.button}>
                <Text style={styles.button_text} >BAŞLA</Text>
            </Pressable>

        </View>
    )
}

export default MyButton;