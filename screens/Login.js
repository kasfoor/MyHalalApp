import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/log2.png')} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>



            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <Text></Text>
            <Text></Text>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot your password?</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232323",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    loginText: {
        color: "#FFFFFF",
    },

    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "flex-start",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#5DB075"
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#5DB075",
    },
});