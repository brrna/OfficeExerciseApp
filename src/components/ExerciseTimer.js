import { useState, useEffect } from "react";
import { Text, View } from "react-native";

const ExerciseTimer = () => {

    const [seconds, setSeconds] = useState(0);
    const [isResting, setIsResting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            if (seconds >= 5 && !isResting) {
                setIsResting(true);
                setSeconds(0);
                onExerciseEnd(); //egzersiz bittiğinde geri çağırma fonk.
            } else if (seconds >= 3 && isResting) {
                setIsResting(false);
                setSeconds(0);
                onRestingEnd(); // dinlenme süresi bittiğinde geri çağırma fonk.
            }
        }, 1000);
        return() => clearInterval(timer);
    }, [seconds, isResting]);

    return (
        <View>
            <Text>
                {isResting ? "Dinlenme" : "Egzersiz"} süresi {seconds} saniye
            </Text>
        </View>
    )
}

export default ExerciseTimer;