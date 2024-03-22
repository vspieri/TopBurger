import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Promo({nome,imagem}){

    return(
        <><View style={css.container}>
            <Text style={css.nome}>{nome}</Text>
        </View>
        
        <View style={css.container2}>

            <Image style={css.img} source={imagem} />

        </View></>
    )
}

const css = StyleSheet.create({
    container:{
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        margin: 40,
        marginBottom: 0,
        marginTop: 5,
        width: "80%",
        height: 180,
        backgroundColor: "#464646",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    nome: {
        fontSize: 24,
        fontWeight: "bold"
    }, 
    img:  {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        margin: 10
    }
})