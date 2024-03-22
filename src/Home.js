import {  View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Keyboard, Image } from "react-native";
import Promo from "./Promo";

const promo = [
    {
     id: 1,
     nome: "X-Tadala",
     imagem: require("../assets/X-TADALA.png")
    },
    {
        id: 2,
        nome: "x-cheddar",
        imagem: require("../assets/X-cheddar.png")
       }
]

export default function Home()
{
    return(
        <View>
                <FlatList
                    data={promo} 
                    renderItem={({ item }) =>
                        <Promo
                            nome={item.nome} 
                            
                            imagem={item.imagem}
                        />
                }
                    keyExtractor={(item) => item.id}
                />
        </View>
    )
}
