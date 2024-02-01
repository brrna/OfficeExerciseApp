// Header componenti oluşturuldu, uygulama adı, dark mod ve light mod seçenekleri oluşturuldu.
import { Text, View, Switch } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import createStyles from './MyHeaderStyle';

const MyHeader = () => {

    let {setIsDarkTheme} = useContext(ThemeContext);
    let {theme} = useContext(ThemeContext);

    const [isDark, setIsDark] = useState(false);
    const styles = createStyles(theme);

    const toggleSwitch = () => {
        setIsDarkTheme(!isDark);
        setIsDark(!isDark);
    };

    return (
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
                <Switch 
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDark} />
            </View>

        </View>
    )
};

export default MyHeader;