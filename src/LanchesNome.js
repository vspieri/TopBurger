import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'

export default function LanchesNome({ nome, imagem }) {
    return (
        <View style={css.container}>
            <TouchableOpacity style={css.toc} >
                <Image style={css.img} source={imagem} />
                <Text style={css.nome}>{nome}</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({

    img:{
        width: "25%",
        height: "100%",
        resizeMode: "contain",

    },
    nome: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    toc: {
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
    }
})