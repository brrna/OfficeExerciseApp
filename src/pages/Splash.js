import { ImageBackground, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as Progress from "react-native-progress";
import { useEffect } from "react";
import { lightTheme } from "../values/Colors";
import { useNavigation } from "@react-navigation/native";

function Splash() {

    const navigation  = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000);
    }, [])

    return (
        <SafeAreaView
            style={styles.container}>

            <ImageBackground
                source={require("../assests/images/splash.jpg")}
                style={styles.background}
                resizeMode="cover"
                blurRadius={2}>

                <View style={styles.splash}>
                    <Text style={styles.name} >NN</Text>
                    <View>
                        <Progress.CircleSnail color={["#7552b7", "#e8d7ff", lightTheme.textColor]} />
                    </View>
                </View>

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
        color: lightTheme.textColor,
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
        color: lightTheme.textColor,
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "Rubik"
    }
})

export default Splash;