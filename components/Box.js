import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./Styles";

export const ButtonNumber = (
    { text, colorA, colorB, onPress }
) => {
    return (
        <Pressable style={({ pressed }) => [{
            backgroundColor: pressed ? colorA : colorB,
        }, styles.button]} onPress={() => onPress(text)}>
            <Text style={styles.textButton}>{text}</Text>
        </Pressable>
    )
}

export const Box = ({ value }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.textBox}>{value}</Text>
        </View>
    )
}


