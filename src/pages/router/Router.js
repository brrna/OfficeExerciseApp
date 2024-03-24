import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../../context/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

//pages
import Home from "../home/Home";
import Back from "../Back";
import Leg from "../Leg";
import Neck from "../Neck";
import WholeBody from "../WholeBody";
import Arm from "../Arm";
import Waist from "../Waist";
import Settings from "../Settings";

function Router() {

    let { theme } = useContext(ThemeContext);

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const HomeStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Arm" component={Arm} />
                <Stack.Screen name="Back" component={Back} />
                <Stack.Screen name="Leg" component={Leg} />
                <Stack.Screen name="Neck" component={Neck} />
                <Stack.Screen name="Waist" component={Waist} />
                <Stack.Screen name="WholeBody" component={WholeBody} />
            </Stack.Navigator>
        )
    }

    const SettingStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => 
                ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Anasayfa') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Ayarlar') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarShowLabel:false,
                    tabBarActiveTintColor: theme.detail,
                    tabBarInactiveTintColor: theme.textColor,
                    tabBarStyle: {
                        backgroundColor: theme.background,
                        height: hp(9),
                    },
                    tabBarLabelStyle: {
                        fontSize: hp(4),
                    }
                })
            }>
            <Tab.Screen name="Anasayfa" component={HomeStack} />
            <Tab.Screen name="Ayarlar" component={SettingStack} />
        </Tab.Navigator>
    )
}

export default Router;