import { StyleSheet, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from "react-native"

export default function Login() {
    return (
        <ImageBackground
            style={styles.background}
            source={{ uri: "https://images.unsplash.com/photo-1583361659618-f9d00e69a338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" }}
        >
            <View style={styles.main}>
                <View style={styles.viewLogo}>
                    <Image style={styles.logo} source={{ uri: "https://image.flaticon.com/icons/png/512/1132/1132080.png" }}
                    ></Image>
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputStyle} placeholder="Name"></TextInput>
                    <TextInput style={styles.inputStyle} placeholder="Password" keyboardType="visible-password"></TextInput>
                </View>

                <TouchableOpacity onPress={() => console.log ("Login")} style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    main: {
        backgroundColor: "rgba(255,255,255,0.2)",
        width: 300,
        height: 350,
        padding: 20,
        borderRadius: 20,
        
        justifyContent: "center",
        alignItems: "center"
    },
    viewLogo: {
        flex: 1,
        flexDirection: "row",
    },
    textLogin: {
        flex: 5,
        fontSize: 44,
        fontWeight: "bold",
        marginLeft: 20,
    },
    logo: {
        width: 80,
        height: 80,
    },
    inputView: {
        marginBottom: 40
    },
    inputStyle: {
        width: 250,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    button: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        height: 40,
        backgroundColor: "#00BFFF"
    }
})