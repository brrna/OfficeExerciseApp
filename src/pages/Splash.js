import { ImageBackground, StyleSheet, Pressable, SafeAreaView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Home from "./home/Home";
import * as Progress from "react-native-progress";

function Splash({ navigation }) {
    return (
        <SafeAreaView
            style={styles.container}>

            <ImageBackground
                source={require("../assests/images/splash.jpg")}
                style={styles.background}
                resizeMode="cover"
                blurRadius={2}>

                <View style={styles.splash}>
                    <Text style={styles.name} >uygulama adi</Text>
                    <View>
                        <Progress.CircleSnail color={["#7552b7", "#e8d7ff", "#240046"]} />
                    </View>
                </View>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate(Home)}>
                    <Text style={styles.buttontext} >GİRİŞ</Text>
                </Pressable>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        height: hp(100),
        width: wp(100),
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "transparent",
        height: hp(5),
        width: wp(25),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: hp(1)
    },
    buttontext: {
        color: "#240046",
        fontWeight: "bold",
        fontSize: 25,
    },
    splash: {
        backgroundColor:"transparent",
        height: hp(10),
        width: wp(100),
        marginTop: hp(30),
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        color: "#240046",
        fontSize: 50,
        fontWeight: "bold"
    }
})

export default Splash;