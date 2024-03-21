import {  View, Text, FlatList, TextInput,StyleSheet, TouchableOpacity, Keyboard, Image } from "react-native";
import Promo from "./Promo";
import { useState } from "react";
import Logo from '../assets/Big Burguer.png';

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
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();
    const [logado, setLogado] = useState(false);

    function Login()
    {
        Keyboard.dismiss();
        if( login == "vini" && senha == "vini" ) {
            setLogado(true);
        }
    }
    return(
        <View>
            {logado ?
                <>
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
            </>
             :
             <View style={css.container}>

                <Image style={css.Logo} source={Logo}/>

                <Text style={css.Texto}>Login:</Text>
             <TextInput style={css.Caixa} placeholder="Login" />

             <Text style={css.Texto}>Senha:</Text>
             <TextInput  style={css.Caixa} placeholder="Senha" />

             <TouchableOpacity
             
             onPress={Login}>
                 <Text>LOGIN</Text>
             </TouchableOpacity>
         </View>
     }
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
    }
})