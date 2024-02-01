import { View } from "react-native";
import MyHeader from "../../components/myHeader/MyHeader";
import MyList from "../../components/myList/MyList";
import { lightTheme } from "../../values/Colors";

function Home() {

    

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: lightTheme.background
            }}>

                <MyHeader />

                <MyList />

        </View>
    )

}

export default Home;