import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BoasVindas = ({ navigation }) => {
  const irParaYoutube = () => {
    navigation.navigate('Youtube');
  };

  const irParaVimeo = () => {
    navigation.navigate('Vimeo');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo!</Text>
      <TouchableOpacity style={estilos.botao} onPress={irParaYoutube}>
        <Text style={estilos.textoBotao}>Youtube</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao2} onPress={irParaVimeo}>
        <Text style={estilos.textoBotao2}>Vimeo</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  botao2: {
    backgroundColor: '#6200ee',
    borderRadius: 5,
    alignItems: 'center',
    width: 125,
    height: 56,
    textAlign: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
  textoBotao2: {
    marginTop: 15,
    color: '#fff',
    fontSize: 17,
  }
});

export default BoasVindas;
