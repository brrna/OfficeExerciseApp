import { Text, Image, View } from 'react-native';
import styles from "./CardStyle"
import { TouchableOpacity } from 'react-native';

//Component oluşturuldu. exercise props olarak gönderildi.
const Card = (props) => {
    
    let {navigation, exercise} = props;

    const handlePress = () => {
            navigation.navigate(exercise.page);
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.container}>
            <View
                style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={{uri: "https://cdn.pixabay.com/photo/2023/09/14/15/54/bird-8253245_1280.jpg" }}
                    resizeMode="contain" />
            </View>

            <View
                style={styles.textView}>
                <Text>{exercise.title}</Text>

                <Text>{exercise.time}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default Card;