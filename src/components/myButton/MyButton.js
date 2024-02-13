import { useContext, useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import { useNavigation } from "@react-navigation/native";
import MyTimer from "../myTimer/MyTimer";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyButtonStyle";
import MyArrowBack from "../myArrowBack.js/myArrowBack";
import { TimerContext } from "../../context/TimerContext";

const MyButton = ({ gif = [0], gifIndex, setGifIndex, progress }) => {

    let { theme } = useContext(ThemeContext);
    let {seconds, setSeconds}= useContext(TimerContext);

    const styles = createStyles(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setGifIndex((prevIndex) => {
                if (prevIndex < gif.length - 1) {
                    return prevIndex + 1;
                } else {
                    setModalVisible(false); //gif sonu modal kapandı 
                    setSeconds(0);
                    return 0;
                }
            });
        }, 15000);

        return () => clearInterval(timer);
    }, [gif, setGifIndex]);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("Home");
                    setSeconds(0);
                }}>

                <View style={styles.container}>

                    <View style={styles.top}>
                        
                        <MyArrowBack onPress={() => {
                            setModalVisible(!modalVisible)
                            setSeconds(0)
                        }} />

                        <MyTimer gif={gif} gifIndex={gifIndex} />

                        <MyProgressBar progress={progress} />

                    </View>

                    <View style={styles.bottom}>
                        <Text>{seconds}</Text>
                    </View>
                </View>

            </Modal>

            <View style={styles.back}>
                <Pressable
                    onPress={() => {
                        setGifIndex(0)
                        setSeconds(0)
                        setModalVisible(true)
                    }}
                    style={styles.button}>
                    <Text style={styles.button_text} >BAŞLA</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default MyButton;