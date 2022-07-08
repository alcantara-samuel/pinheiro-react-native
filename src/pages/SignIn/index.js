import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  const navigation =useNavigation();
 return (
  <View style={styles.container}>
  <Animatable.View animation="fadeInLeft" deslay={500} style={styles.containerHeader}> 
    <Text style={styles.message}>Bem-vindo(a)</Text>
  </Animatable.View>
  
  <Animatable.View animation='fadeInUp' style={styles.containerForm}>
    <Text style={styles.title}>Email</Text>
    <TextInput placeholder='Digite um email....' style={styles.input}
    />

    <Text style={styles.title}>Senha</Text>
    <TextInput placeholder='Sua senha' style={styles.input}
    />

    <TouchableOpacity style={styles.buttom} onPress={ () => navigation.navigate('Home')}>
      <Text style={styles.buttomText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttomRegister}>
      <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
    </TouchableOpacity>



  </Animatable.View>
 </View>


  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#069A8E'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'

  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm:{
    backgroundColor: '#FFF',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize:20,
    marginTop:20
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  buttom:{
    backgroundColor: '#069A8E',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomRegister:{
    marginTop: 14,
    alignItems: 'center'
  },
  registerText:{
    color: '#a1a1a1'
  }
})