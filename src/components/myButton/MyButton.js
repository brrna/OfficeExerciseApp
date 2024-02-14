import { useContext, useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import { useNavigation } from "@react-navigation/native";
import MyTimer from "../myTimer/MyTimer";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyButtonStyle";
import MyArrowBack from "../myArrowBack.js/myArrowBack";
import { TimerContext } from "../../context/TimerContext";

const MyButton = ({ gif = [0], progress }) => {

    let { theme } = useContext(ThemeContext);
    let {seconds, setSeconds} = useContext(TimerContext);
    let {gifIndex, setGifIndex} = useContext(TimerContext);

    const styles = createStyles(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

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
                }}>

                <View style={styles.container}>

                    <View style={styles.top}>
                        
                        <MyArrowBack onPress={() => {
                            setModalVisible(!modalVisible)
                            setSeconds(1)
                        }} />

                        <MyTimer gif={gif} />

                        <MyProgressBar progress={progress} />

                    </View>

                    <View style={styles.bottom}>
                        <Text>{seconds}</Text>
                        <Text>{gifIndex}</Text>
                    </View>
                </View>

            </Modal>

            <View style={styles.back}>
                <Pressable
                    onPress={() => {
                        setSeconds(1)
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