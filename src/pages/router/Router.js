import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import Home from "../home/Home";
import Back from "../Back";
import Leg from "../Leg";
import Neck from "../Neck";
import WholeBody from "../WholeBody";
import Splash from "../Splash";
import Arm from "../Arm";
import Waist from "../Waist";

function Router() {


    const Stack = createStackNavigator();


    return (
            <Stack.Navigator 
                style={{flex: 1}}
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={Splash} /> 
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

export default Router;