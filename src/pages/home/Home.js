import { View } from "react-native";
import MyHeader from "../../components/myHeader/MyHeader";
import MyList from "../../components/myList/MyList";

function Home() {

    

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "#f2f2f2"
            }}>

                <MyHeader />

                <MyList />

        </View>
    )

}

export default Home;