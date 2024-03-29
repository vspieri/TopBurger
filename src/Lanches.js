import React from 'react'
import { View, FlatList } from 'react-native'
import LanchesNome from './LanchesNome'

const lanches = [
    {
        id: 1,
        nome: "X-tadala",
        imagem: require("../assets/X-TADALA.png")
    },
    {
        id: 2,
        nome: "X-Cheddar",
        imagem: require("../assets/X-cheddar.png")
    },
]

export default function Lanches() {
    return (
        <View>
            <FlatList
                data={lanches}
                renderItem={({ item }) =>
                    <LanchesNome

                        nome={item.nome}
                        imagem={item.imagem}

                    />
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
