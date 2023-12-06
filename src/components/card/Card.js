import { Text, Image, View } from 'react-native';
import styles from "./CardStyle"
import { TouchableOpacity } from 'react-native-gesture-handler';

//Component oluşturuldu. exercise props olarak gönderildi.
const Card = (props) => {

    let {exercise, navigation} = props;
    

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate() }>
            <View
                style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={{uri: exercise.imageURL}}
                    resizeMode="contain" />
            </View>

            <View
                style={styles.textView}>
                <Text>{exercise.title}</Text>

                <Text
                    >{exercise.time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;