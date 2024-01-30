import { Text, Image, View, TouchableOpacity, Pressable } from 'react-native';
import styles from "./MyCardStyle";
import { useNavigation } from '@react-navigation/native';

//Component oluşturuldu. exercise props olarak gönderildi.
const MyCard = (props) => {
    
    let {exercise, onLongPress, img = [0]} = props;

    const navigation = useNavigation();

    const handlePress = () => {
            navigation.navigate(exercise.page);
    };

    return (
        <Pressable
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

            <View style={styles.textView}>
                <Text style={styles.title}> {exercise.title} </Text>

            </View>
        </Pressable>
    )
}

export default MyCard;