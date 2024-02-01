// Header componenti oluşturuldu, uygulama adı, dark mod ve light mod seçenekleri oluşturuldu.
import { Text, View } from 'react-native';
import styles from "./MyHeaderStyle";

const MyHeader = () =>{
    return(
        <View
            style={styles.container}>

                <View
                    style={styles.title}>
                        <Text
                            style={styles.titletext}>
                            exercise app</Text>
                </View>

                <View
                    style={styles.mode}>
                        <Text>dark mod</Text>
                    </View>

        </View>
    )
};

export default MyHeader;