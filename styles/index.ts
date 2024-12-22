import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
        color: "#d82600",
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
        fontStyle: "italic",
    },
    input: {    
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        width: '90%',
        borderRadius: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#fabbb9",
        color: "#fff",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: "90%",
        marginTop: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    cardText: {
        fontSize: 12,
        marginBottom: 10,
    }



})

export default styles;