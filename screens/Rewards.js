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

export default function Rewards(){
    const [search, setSearch] = useState("");
    return(
        <View style={styles.container}>
            
            <Text style={styles.rewardsText}>Rewards</Text>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity>
                <Text style={styles.map_button}>     Map                       125 Points</Text>
            </TouchableOpacity>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Search"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={(search) => setSearch(search)}
                />
            </View>

            <Text style={{textAlign: 'left', fontSize: 28,fontWeight: 'bold'}}>Hot Deals</Text>
            <Image style={styles.image} source={require('../assets/halalguys.png')} />
            <Text style={{textAlign: 'left', fontSize: 22,fontWeight: 'bold'}}>Halal Guys</Text>
            <Text style={{textAlign: 'left', fontSize: 22,fontWeight: 'bold'}}>25% OFF</Text>

            <Text></Text>

            <Image style={styles.image} source={require('../assets/ikes.png')} />
            <Text style={{textAlign: 'left', fontSize: 22,fontWeight: 'bold'}}>Ike's Sandwiches</Text>
            <Text style={{textAlign: 'left', fontSize: 22,fontWeight: 'bold'}}>$5 OFF</Text>
        </View>
    );
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    image: {
        marginTop: 10,
        width: 160,
        height: 160,
    },

    rewardsText: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: 'bold',
    },
    

    inputView: {
        backgroundColor: "#F6F6F6",
        borderRadius: 30,
        width: "80%",
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

    map_button: {
        height: 30,
        marginBottom: 30,
        color: "#5DB075",
        textAlign: 'left',
        fontSize: 26,
        fontWeight: 'bold',
    },
});


