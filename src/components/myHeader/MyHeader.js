import { Text, View} from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import createStyles from './MyHeaderStyle';

const MyHeader = () => {

    let {theme} = useContext(ThemeContext);

    const styles = createStyles(theme);

    return (
        <View
            style={styles.container}>

            <View
                style={styles.title}>
                <Text
                    style={styles.titletext}>
                    OfficeGym</Text>
            </View>

        </View>
    )
};

export default MyHeader;