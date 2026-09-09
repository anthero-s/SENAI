import { useEffect, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
  {
    id: '1',
    titulo: 'Grand Theft Auto V',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS5 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Viva a historia de Michael, Franklin e Trevor em Los Santos. Roube carros, complete missoes e explore um enorme mundo aberto.',
  },

  {
    id: '2',
    titulo: 'Rocket League',
    genero: 'Esporte / Competitivo',
    plataforma: 'PS5 / Xbox / PC / Switch',
    nota: '9/10',
    sinopse:
      'Controle carros tunados em partidas de futebol cheias de velocidade e competicao online.',
  },

  {
    id: '3',
    titulo: 'Mortal Kombat 1',
    genero: 'Luta',
    plataforma: 'PS5 / Xbox / PC',
    nota: '9/10',
    sinopse:
      'Enfrente batalhas intensas com personagens iconicos da franquia Mortal Kombat.',
  },

  {
    id: '4',
    titulo: 'Call of Duty Black Ops 2',
    genero: 'FPS / Guerra',
    plataforma: 'PS3 / Xbox 360 / PC',
    nota: '10/10',
    sinopse:
      'Participe de guerras futuristas em um dos jogos mais famosos da franquia Call of Duty.',
  },
];

export default function HomeScreen({ navigation }) {

  const [busca, setBusca] = useState('');
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {

    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    setJogosFiltrados(resultado);

  }, [busca]);

  function renderItem({ item }) {

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalhe', { ...item })}
      >

        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>
            {item.titulo[0]}
          </Text>
        </View>

        <View style={styles.cardInfo}>

          <Text style={styles.cardTitulo}>
            {item.titulo}
          </Text>

          <Text style={styles.cardSubtitulo}>
            {item.genero}
          </Text>

        </View>

      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitulo}> Games Hub</Text>
        <Text style={styles.headerSubtitulo}> Escolha um jogo para ver os detalhes </Text>
      </View>
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  buscaContainer: {
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  buscaInput: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333',
  },

  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  header: {
    backgroundColor: '#151515',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00FF88',
  },

  headerSubtitulo: {
    fontSize: 13,
    color: '#AAAAAA',
    marginTop: 4,
  },

  lista: {
    padding: 16,
    gap: 12,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  cardIcone: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00FF88',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  cardIconeTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },

  cardSubtitulo: {
    fontSize: 13,
    color: '#BBBBBB',
  },

});