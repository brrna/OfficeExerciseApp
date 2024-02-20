import { Text, View, Switch } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import createStyles from './MyHeaderStyle';
import { darkTheme, lightTheme } from '../../values/Colors';

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
                    OfisGym</Text>
            </View>

            <View
                style={styles.mode}>
                <Switch 
                    trackColor={{false: lightTheme.modal, true: darkTheme.modal}}
                    thumbColor={isDark ? darkTheme.detail : lightTheme.detail}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDark} />
            </View>

        </View>
    )
};

export default MyHeader;