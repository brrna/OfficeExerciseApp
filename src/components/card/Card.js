import { Text, Image, View } from 'react-native';
import styles from "./CardStyle"
import { TouchableOpacity } from 'react-native-gesture-handler';

//Component oluşturuldu. exercise props olarak gönderildi.
const Card = (props) => {
    console.log(props);

    let {exercise, navigation} = props;

    const handlePress = () => {
        () => navigation.navigate(exercise.page)
    }
    

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={ handlePress }>
            <View
                style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={{uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmadicanacdnstorage.blob.core.windows.net%2Fmain%2FAssets%2Fphoto%2Fr%2Fboyun-duzlesmesi-21403-65627_t.jpg&tbnid=ydbxuYXOHeqhSM&vet=12ahUKEwjctYa-q_qCAxWx4bsIHdLwAowQMygiegUIARCbAQ..i&imgrefurl=https%3A%2F%2Fwww.medicana.com.tr%2Fsaglik-rehberi-detay%2F10466%2Fboyun-duzlesmesi&docid=roJWhDQVA2HOcM&w=260&h=260&q=boyun%20ve%20omuz%20%20egzersizi&ved=2ahUKEwjctYa-q_qCAxWx4bsIHdLwAowQMygiegUIARCbAQ"}}
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