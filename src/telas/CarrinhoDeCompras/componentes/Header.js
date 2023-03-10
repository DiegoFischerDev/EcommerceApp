import React, { useContext } from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../../../context/GlobalContext';

const Header = () => {

  const { esvaziarCarrinho } = useContext(GlobalContext);
  const navigation = useNavigation();

  return (
        <View style={estilos.header}>
          <TouchableOpacity style={estilos.backButton} onPress={() => { navigation.goBack() }}><Ionicons name="arrow-back-outline" size={22} color="black" /></TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Minhas Compras</Text>
          <TouchableOpacity onPress={() => {esvaziarCarrinho()}}>
            <Text style={{fontSize: 12, color:'#D82F2F'}}>Limpar</Text>
          </TouchableOpacity>
        </View>
  )
}

export default Header

const estilos = StyleSheet.create({

  header: {
    flexDirection: 'row',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 35,
    height: 35,
    borderRadius: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
})
