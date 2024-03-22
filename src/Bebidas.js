import React from 'react'
import { View, FlatList } from 'react-native'
import ListaBebidas from './ListaBebidas'

const listabebidas = [
    {
        id: 1,
        imagem: require("../assets/X-TADALA.png"),
        nome: "pinga"
    },
    {
        id: 2,
        imagem: require("../assets/X-cheddar.png"),
        nome: "dsdsadsdas"
    }
]

export default function Bebidas() {
    return (
        <View>
            <FlatList
                data={listabebidas}
                renderItem={({ item }) =>
                    <ListaBebidas

                        nome={item.nome}
                        imagem={item.imagem}

                    />
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
