import { View } from "react-native";
import MyHeader from "../../components/myHeader/MyHeader";
import MyList from "../../components/myList/MyList";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BackHandler } from "react-native";

function Home() {

    let { theme } = useContext(ThemeContext)

    useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp();
            return True;
        }

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.background
            }}>

            <MyHeader />

            <MyList />

        </View>
    )

}

export default Home;