import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image,} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import modelo1 from '../../../../assets/modelo_1.png'

const CarCard = ({nome, tamanho, preco}) => {
  return (
    <View style={estilos.card}>

      <Image style={estilos.image} source={modelo1}></Image>

      <View style={estilos.inerCard1}>
        <Text style={{fontSize: 10}}>{nome}</Text>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={{color:'#A6A6A6', fontSize:10}}>Tamanho: </Text>
          <Text>{tamanho}</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>R$ {preco}</Text>
      </View>

      <View style={estilos.inerCard2}>
        <TouchableOpacity><Ionicons name="trash-outline" size={16} color="orange" /></TouchableOpacity>

        <View style={estilos.qtdview}>
          <TouchableOpacity onPress={() => {}} style={estilos.qtdbutton}><Text style={{fontSize: 15}}>-</Text></TouchableOpacity>
          <Text style={{fontSize: 16, marginHorizontal: 10}}>2</Text>
          <TouchableOpacity onPress={() => {}} style={estilos.qtdbutton}><Text style={{fontSize: 15}}>+</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default CarCard

const estilos = StyleSheet.create({

  card: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },

  inerCard1: {
    justifyContent: 'space-between',
    height: 80,
  },

  inerCard2: {
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'flex-end',
  },

  qtdview: {
    flexDirection:'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-start",
    maxWidth: 160,
  },

  qtdbutton: {
    width: 21,
    height: 21,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  
})