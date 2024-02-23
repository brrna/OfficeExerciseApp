import { useContext, useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import { useNavigation } from "@react-navigation/native";
import MyTimer from "../myTimer/MyTimer";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyButtonStyle";
import MyArrowBack from "../myArrowBack/myArrowBack";
import { TimerContext } from "../../context/TimerContext";
import MyCountDown from "../myCountdown/MyCountdown";

const MyButton = ({ progress, gif = [0] }) => {

    let { theme } = useContext(ThemeContext);
    let {seconds, setSeconds} = useContext(TimerContext);
    let {gifIndex, setGifIndex} = useContext(TimerContext);

    const styles = createStyles(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (gifIndex >= gif.length - 1 && modalVisible) {
            timeoutId = setTimeout(() => {
                setModalVisible(false);
                navigation.navigate("Home");
                setSeconds(1);
                setGifIndex(0);
            }, 10000); 
        }
        return () => clearTimeout(timeoutId); 
    }, [gifIndex, modalVisible]);

    useEffect(() => {
        if (modalVisible) {
            setSeconds(1);
        }
    }, [modalVisible]);

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
                    setSeconds(1)
                    setGifIndex(0)
                }}>

                <View style={styles.container}>

                    <View style={styles.top}>
                        
                        <MyArrowBack onPress={() => {
                            setModalVisible(!modalVisible)
                            setSeconds(1)
                            setGifIndex(0)
                        }} />

                        <MyTimer gif={gif} />

                        <MyProgressBar progress={progress} />

                    </View>

                    <View style={styles.bottom}>
                        <MyCountDown />
                    </View>
                </View>

            </Modal>

            <View style={styles.back}>
                <Pressable
                    onPress={() => {
                        setModalVisible(true)
                        setGifIndex(0)
                    }}
                    style={styles.button}>
                    <Text style={styles.button_text} >BAŞLA</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default MyButton;