import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const jogosMock = [
  {
    id: "1",
    titulo: "Grand Theft Auto V",
    genero: "Acao / Mundo Aberto",
    plataforma: "PS5 / Xbox / PC",
    nota: "10/10",
  },
  {
    id: "2",
    titulo: "Rocket League",
    genero: "Esporte / Competitivo",
    plataforma: "PS5 / Xbox / PC / Switch",
    nota: "9/10",
  },
  {
    id: "3",
    titulo: "Mortal Kombat 1",
    genero: "Luta",
    plataforma: "PS5 / Xbox / PC",
    nota: "9/10",
  },
  {
    id: "4",
    titulo: "Call of Duty Black Ops 2",
    genero: "FPS / Guerra",
    plataforma: "PS3 / Xbox 360 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardTexto}>Genero: {item.genero} </Text>
            <Text style={styles.cardTexto}>Plataforma: {item.plataforma}</Text>
            <Text style={styles.cardTexto}>Nota: {item.nota}</Text>
          </View>
        )}

        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>G</Text>
            </View>

            <Text style={styles.titulo}>
              Nenhum jogo salvo
            </Text>

            <Text style={styles.descricao}>
              Sua lista aparecera aqui
            </Text>

            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }

        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

  header: {
    backgroundColor: "#151515",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },

  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00FF88",
  },

  listaVazia: {
    flex: 1,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00FF88",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },

  descricao: {
    fontSize: 16,
    color: "#BBBBBB",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },

  dica: {
    fontSize: 13,
    color: "#888888",
    textAlign: "center",
    lineHeight: 20,
  },

  card: {
    backgroundColor: "#1A1A1A",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  cardTexto: {
    fontSize: 14,
    color: "#BBBBBB",
    marginBottom: 4,
  },
});