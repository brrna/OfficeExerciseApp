import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Text, Image, TouchableOpacity } from 'react-native';

const Card = ({exercize}) => {
    return(
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                height: hp("30%"),
                width: wp("100%"),
                borderColor: "black",
                borderWidth: 1
            }}>
               <Text>{exercize.title}</Text>
               <Image source={exercize.imageURL} />
               <Text>{exercize.time}</Text>
               
            </TouchableOpacity>
    )
}

export default Card;