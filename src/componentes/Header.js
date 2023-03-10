import React, { useContext } from "react";
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalContext';

const Header = () => {

  const navigation = useNavigation();
  const { itens } = useContext(GlobalContext);

  return (

  <View style={estilos.view1}>
    <View style={estilos.inputBox}>
      <TextInput
        style={{ width: '90%', height: '100%' }}
        placeholder="Faça sua busca aqui"
        keyboardType="text" // "numeric"
        defaultValue=""
        onChangeText={() => {}}
        placeholderTextColor={'#CACACA'}
      />
      <TouchableOpacity>
        <Ionicons name="search-outline" size={25} color="#D9D9D9" />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => { navigation.navigate("CarrinhoDeCompras") }}>
      <Ionicons name="cart" size={30} color="black" />
      <View style={itens.length ? estilos.contador : {display:"none"}}><Text style={{color: 'white'}}>{itens.length}</Text></View>
    </TouchableOpacity>
  </View>
  )
}

export default Header

const estilos = StyleSheet.create({

  view1: {
    width: '100%',
    height: 50,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputBox: {
    height: 50,
    width: '88%',
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,

    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
  },

  contador: {
    width: 20,
    height: 20,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff3b30",
    position: "absolute",
    left: 23,
    top: -5,
  }

})