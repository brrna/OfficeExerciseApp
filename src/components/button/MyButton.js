import { useState } from "react";
import { View, TouchableOpacity, Text, Modal, Alert, Pressable } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const MyButton = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.")
                    setModalVisible(!modalVisible)
                }}>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "blue",
                        justifyContent: "center",
                        alignContent: "center",
                        flexDirection: "column"
                    }}>

                    <Pressable
                        style={{
                            backgroundColor: "white",
                            height: hp("3%"),
                            width: wp("5%"),
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 3,
                            marginLeft: 360,
                            marginTop: 15,
                            position: "relative"
                        }}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View
                            style={{
                                color: "black"
                            }}>
                            <Text>X</Text>
                        </View>
                    </Pressable>

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: "red",
                            height: hp("100%"),
                            width: wp("100%"),
                            justifyContent: "center"
                        }}>

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "white"
                            }}>
                            <Text
                                style={{
                                    color: "black"
                                }}></Text>
                        </View>
                    </View>

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