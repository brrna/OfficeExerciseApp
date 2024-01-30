import { useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import styles from "./MyButtonStyle";
import MyProgressBar from "../myProgressBar/MyProgressBar";
import { useNavigation } from "@react-navigation/native";
import Home from "../../pages/home/Home";
import Icon from "react-native-vector-icons/Ionicons"
import MyTimer from "../myTimer/MyTimer";

const MyButton = ({ gif, gifIndex, setGifIndex }) => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [seconds, setSeconds] = useState(0)
    const [startCount, setStartCount] = useState(false)

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


        useEffect(() => {

            const timer = setTimeout(() => {
                setSeconds(seconds + 1)
            }, 1000);
    
            if(seconds == 5) {
                setGifIndex(0);
                setModalVisible(true);
                setStartCount(false)
            }

            return() => clearTimeout(timer);
    
        },[seconds, setStartCount]);
    

        const handlePress = () => {
            setStartCount(true)
        }


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

                    <View style={styles.bottom}>
                       <Text>saniye geriye akacak</Text>   
                    </View>


                </View>

            </Modal>

            <View>
            <Pressable
                onPress={handlePress}
                style={styles.button}>
                <Text style={styles.button_text} >BAŞLA</Text>
            </Pressable>
            </View>

            <View>
                <Text>HAZIRLAN</Text>
                <Text>geriye akıcak süre</Text>
            </View>

        </View>
    )
}

export default MyButton;