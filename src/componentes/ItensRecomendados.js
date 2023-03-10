import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity,} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const ItensRecomendados = ({legenda, preço, review, reviewqtd, imagem1, imagem2, imagem3, imagem4}) => {

  const navigation = useNavigation();

  let produtoInfo = {
    legenda: legenda,
    preço: preço,
    review: review,
    reviewqtd: reviewqtd,
    imagem1: imagem1,
    imagem2: imagem2,
    imagem3: imagem3,
    imagem4: imagem4
  }

  return (
      <View style={estilos.view4}>
        <View style={estilos.absolute}>
          <View style={estilos.view8}>
            <Ionicons name="star" size={15} color="#fec800" />
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
              {review}
            </Text>
          </View>
          <TouchableOpacity style={estilos.view9}>
            <Ionicons name="heart-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={{uri: imagem1}} style={estilos.itemImage}></Image>
        <Text style={{ marginTop: 14, marginLeft: 16, fontSize: 12 }}>
          {legenda}
        </Text>
        <View style={estilos.view5}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
          R$ {preço}
          </Text>
          <TouchableOpacity style={estilos.view6} onPress={() => { navigation.navigate("DetalhesDoProduto", produtoInfo)}}>
            <Ionicons name="arrow-forward-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default ItensRecomendados

const estilos = StyleSheet.create({

  absolute: {
    position: 'absolute',
    left: 0,
    top: 5,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    alignItems:'center',
  },

  view8: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 48,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 2,
  },

  view9: {
    height:30,
    width: 30,
    borderRadius: '100%',
    alignItems:'center',
    justifyContent: 'center'
  },

  view4: {
    position: 'relative',
    borderRadius: 10,
    marginTop: 19,
    width: '48%',
    paddingBottom: 20,

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

  view5: {
    flexDirection: 'row',
    marginTop: 13,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  view6: {
    height: 25,
    width: 25,
    borderRadius: '100%',
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemImage: {
    height: 180,
    resizeMode: 'stretch',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

})