import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from "./CardStyle";
import { useNavigation } from '@react-navigation/native';

//Component oluşturuldu. exercise props olarak gönderildi.
const Card = (props) => {
    
    let {exercise, onLongPress, img = [0]} = props;

    const navigation = useNavigation();

    const handlePress = () => {
            navigation.navigate(exercise.page);
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            onLongPress={onLongPress}
            style={styles.container}>
            <View
                style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={img}
                    resizeMode="contain" />
            </View>

            <View
                style={styles.textView}>
                <Text style={styles.title} >{exercise.title}</Text>

                <Text style={styles.time} > {exercise.time} </Text>

            </View>
        </TouchableOpacity>
    )
}

export default Card;