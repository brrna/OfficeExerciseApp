import { Text, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import createStyles from './MyCardStyle';

//Component oluşturuldu. exercise props olarak gönderildi.
const MyCard = (props) => {
    
    let {exercise, onLongPress, img = [0]} = props;
    let {theme} = useContext(ThemeContext);

    const navigation = useNavigation();

    const styles = createStyles(theme);

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