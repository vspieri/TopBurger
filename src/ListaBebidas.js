import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'

export default function ListaBebidas({ nome, imagem }) {
    return (
        <View>
            <TouchableOpacity style={css.TouchableOpacity}>
                <Image style={css.img} source={imagem} />
                <Text style={css.nome}>{nome}</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    img: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
    },
    TouchableOpacity: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        margin: 40,
        marginBottom: 0,
        width: "80%",
        height: 70,
        backgroundColor: "#464646",
        alignItems: "center",
        justifyContent: "center",

    },
    nome: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    }
})