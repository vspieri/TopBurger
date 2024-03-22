import React from 'react'
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Image  } from 'react-native'
import Logo from '../assets/Big Burguer.png';

export default function Login({ setLogado, setCadastro }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( email == "" && senha == "" ) {
            setLogado(true);
        }
    }

    function Cadastrar()
    {
        setLogado(true)
        setCadastro(true)
    }

    return (
        <View style={css.container}>
            <Image style={css.Logo} source={Logo}/>


            <Text style={css.Texto}>Email:</Text>
            <TextInput style={css.Caixa} placeholder="email"
                onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                TextInput={email}
            />

            <Text style={css.Texto}>Senha:</Text>
            <TextInput style={css.Caixa} placeholder="Senha" 
             onChangeText={(digitado) => setSenha(digitado)}
             value={senha}
             TextInput={senha}
            />

            <TouchableOpacity
                style={css.Caixa}
                onPress={Login}>
                <Text style={css.Texto1}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={css.Caixa}
                onPress={Cadastrar}>
                <Text style={css.Texto1}>Cadastrar-se</Text>
            </TouchableOpacity>
        </View>
    )
}


const css = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#464646",
        alignItems: "center",
        justifyContent: "center",
    },
    Caixa:{
        backgroundColor: "white",
        width: "80%",
        height: 40,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2, 
        margin: 10
    },
    Logo:{
        marginTop: -100,
        width: "35%",
        height: "30%"
    },
    Texto:{
        fontSize: 20,
        marginRight: 250,
        marginTop: 20
    },
    Texto1:{
        textAlign: "center",
        marginTop: "3%"
    }
})