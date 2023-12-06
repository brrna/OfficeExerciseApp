import { Text, Image, View } from 'react-native';
import styles from "./CardStyle"

//Component oluşturuldu. exercise props olarak gönderildi.
const Card = ({ exercise }) => {
    return (
        <View
            style={styles.container}>
            <View
                style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={{ uri: exercise.imageURL }}
                    resizeMode="center" />
            </View>

            <View
                style={styles.textView}>
                <Text>{exercise.title}</Text>

                <Text
                    >{exercise.time}</Text>
            </View>
        </View>
    )
}

export default Card;