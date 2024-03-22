import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native'
import Logo from '../assets/Big Burguer.png';


export default function Cadastro({ setLogado, setCadastro }) {

    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }

    return (
        
        <View style={css.container}>
            <Image style={css.Logo} source={Logo}/>
            <Text style={css.Texto}>Email:</Text>
            <TextInput style={css.Caixa} placeholder="email"
                onChangeText={(digitado) => setEmail(digitado)} />

            <Text style={css.Texto}>Senha:</Text>
            <TextInput style={css.Caixa} placeholder="Senha"
                onChangeText={(digitado) => setSenha(digitado)} />

            <TouchableOpacity
                onPress={Cadastrar}
                style={css.Caixa}
            >
                <Text style={css.Texto1}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={css.Caixa}
                onPress={Voltar}>
                <Text style={css.Texto1}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#464646",
        alignItems: "center",
        justifyContent: "center",
    },
    Caixa: {
        backgroundColor: "white",
        width: "80%",
        height: 40,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        margin: 10
    },
    Logo: {
        marginTop: -100,
        width: "35%",
        height: "30%"
    },
    Texto: {
        fontSize: 20,
        marginRight: 250,
        marginTop: 20
    },
    Texto1: {
        textAlign: "center",
        marginTop: "3%"
    }
})