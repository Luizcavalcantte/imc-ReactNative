// regras do imc peso/altura sobre 2
//resultados, menor q 18,4= desnutriçao / 18,5 a 24,9 = normal /25 a 29,9 = pré-obesidade /
// 30 a 34,5 = obesidade grau 1 / 35 a 39,9 obesidade grau 2 / maior q 40 = obesidade grau 3

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [descricao, setDescricao] = useState('insira suas informações a cima');

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcular() {
    let kg = parseFloat(peso.replace(',', '.').replace(' ', ''));
    let alt = parseFloat(altura.replace(',', '.').replace(' ', ''));
    let resultado = kg / (alt * 2);
    setResultado(resultado.toFixed(2));

    if (resultado <= 18.4) {
      setDescricao(
        'Estado de desnutrição ou magreza, você está  a baixo do peso recomendado',
      );
    } else if (resultado <= 24.9) {
      setDescricao('Estado normal, você está dentro do peso recomendado ');
    } else if (resultado <= 29.9) {
      setDescricao('Sobrepeso, você está um pouco a cima do peso recomendado');
    } else if (resultado <= 40) {
      setDescricao(
        'Estado de obesidade, você está muito acima do seu peso recomendado',
      );
    } else {
      setDescricao('saiu algo errado, tente novamente');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Altura"
        placeholderTextColor="lightgray"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={inputAltura => {
          setAltura(inputAltura);
        }}></TextInput>
      <TextInput
        placeholder="Peso"
        placeholderTextColor="lightgray"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={inputPeso => {
          setPeso(inputPeso);
        }}></TextInput>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          calcular();
        }}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  input: {
    height: 80,
    width: 300,
    textAlign: 'center',
    fontSize: 30,
    marginTop: 25,
    backgroundColor: '#32363e',
    color: 'white',
  },
  btn: {
    backgroundColor: '#5bc8e7',
    width: 300,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
  },
  btnText: {
    fontSize: 50,
    color: 'white',
  },
  resultado: {
    color: 'white',
  },
  descricao: {
    color: 'white',
    fontSize: 25,
    margin: 40,
  },
});
