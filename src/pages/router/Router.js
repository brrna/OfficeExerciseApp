import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import Home from "../home/Home";
import Back from "../Back";
import Leg from "../Leg";
import Neck from "../Neck";
import Waist from "../Waist";

function Router() {


    const Stack = createStackNavigator();


    return (
            <Stack.Navigator 
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Waist" component={Waist} />
                <Stack.Screen name="Back" component={Back} />
                <Stack.Screen name="Leg" component={Leg} />
                <Stack.Screen name="Neck" component={Neck} />
            </Stack.Navigator>
    )
}

export default Router;