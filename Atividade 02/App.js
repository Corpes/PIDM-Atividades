import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Aluno from './components/Aluno'
//import Professor from './components/Professor'

import Cabecalho from './components/Cabecalho'
import Disciplina from './components/Disciplina';
import Corpo from './components/Corpo'

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo/>
      <Cabecalho 
      nome='Chris Rock'
      curso= 'Design Digital' />
      <Disciplina 
      disciplina='PIDM'
      disciplina='Sociologia'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
