import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerCalculadora: {
        width: "80%",
        maxWidth: 350,
        padding: 10,
     
        borderColor: '#008b8b', // Verde oscuro
        
        backgroundColor: '#2f4f4f', // Gris azulado oscuro
        shadowColor: '#483d8b', // Azul pizarra oscuro
        elevation: 7,
    },
    button: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 18,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        
        shadowOpacity: 0.3,
        shadowRadius: 15,
        backgroundColor: '#8b4513', // Marrón oscuro
    },
    box: {
        borderColor: '#9932cc', // Violeta oscuro
       
        height: 80,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 20,
        margin: 15,
        backgroundColor: '#696969', // Gris oscuro
    },
    textBox: {
        fontSize: 22,
        textAlign: 'right',
        color: '#32cd32', // Verde lima oscuro
    },
    textButton: {
        fontSize: 18,
        color: '#ff6347', // Coral oscuro
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    groupButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});
