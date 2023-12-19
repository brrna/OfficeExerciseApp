import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import Home from "../home/Home";
import Arm from "../Arm";
import Back from "../Back";
import Leg from "../Leg";
import Neck from "../Neck";

function Router() {


    const Stack = createStackNavigator();


    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Arm" component={Arm} />
                <Stack.Screen name="Back" component={Back} />
                <Stack.Screen name="Leg" component={Leg} />
                <Stack.Screen name="Neck" component={Neck} />
            </Stack.Navigator>
    )
}

export default Router;