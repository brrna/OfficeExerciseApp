import { useContext, useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import { useNavigation } from "@react-navigation/native";
import Home from "../../pages/home/Home";
import Icon from "react-native-vector-icons/Ionicons"
import MyTimer from "../myTimer/MyTimer";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyButtonStyle";

const MyButton = ({ gif, gifIndex, setGifIndex }) => {

    let {theme} = useContext(ThemeContext);
    
    const styles = createStyles(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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


    const[count, setCount] = useState(4);
    useEffect(() => {
        const timer = setInterval(() => {
            if(count > 0){
                setCount(count - 1)
            }
            else{
                clearInterval(timer)
            }
        }, 1000)
        return() => clearInterval(timer)
    }, [count])


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

                </View>

            </Modal>

            <View style={styles.back}>
                <View
                    style={styles.restView}>{isLoading && <Text style={styles.restText}>{count}</Text>}</View>
                <Pressable
                    onPress={() => {
                        setGifIndex(0)
                        setIsLoading(true)
                        setTimeout(() => {
                            setModalVisible(true)
                            setIsLoading(false)
                        }, 3000)
                    }}
                    style={styles.button}>
                    <Text style={styles.button_text} >BAŞLA</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default MyButton;