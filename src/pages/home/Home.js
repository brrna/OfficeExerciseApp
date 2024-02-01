import { View } from "react-native";
import MyHeader from "../../components/myHeader/MyHeader";
import MyList from "../../components/myList/MyList";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Home() {

    let {theme} = useContext(ThemeContext)

    return(
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