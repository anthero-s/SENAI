import { useState } from "react";
import {
  SafeAreaView,
 ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "Grand Theft Auto V",
  genero: "Acao / Mundo Aberto",
  plataforma: "PS5 / Xbox / PC",
  nota: "10/10",
  sinopse:
    "Viva a historia de Michael, Franklin e Trevor em Los Santos.",
};

export default function DetalheScreen({ route }) {

  const {
    titulo,
    genero,
    plataforma,
    nota,
    sinopse,
  } = route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.topo}>

          <View style={styles.icone}>
            <Text style={styles.letra}>
              {titulo[0]}
            </Text>
          </View>

          <Text style={styles.titulo}>
            {titulo}
          </Text>

          <Text style={styles.genero}>
            {genero}
          </Text>

        </View>

        <View style={styles.box}>

          <Text style={styles.label}>
            Plataforma
          </Text>

          <Text style={styles.texto}>
            {plataforma}
          </Text>

          <Text style={styles.label}>
            Nota
          </Text>

          <Text style={styles.texto}>
            {nota}
          </Text>

        </View>

        <View style={styles.box}>

          <Text style={styles.label}>
            Sinopse
          </Text>

          <Text style={styles.texto}>
            {sinopse}
          </Text>

        </View>

        <TouchableOpacity
          style={[
            styles.botao,
            isSalvo && styles.botaoVermelho
          ]}

          onPress={() => setIsSalvo(!isSalvo)}
        >

          <Text style={styles.botaoTexto}> {isSalvo ? "Remover da Lista": "Adicionar na Lista"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  topo: {
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    padding: 30,
  },

  icone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00ff88",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  letra: {
    fontSize: 30,
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  genero: {
    color: "#aaa",
    marginTop: 5,
  },

  box: {
    backgroundColor: "#1e1e1e",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },

  label: {
    color: "#00ff88",
    fontWeight: "bold",
    marginBottom: 5,
  },

  texto: {
    color: "#ddd",
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#00ff88",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  botaoVermelho: {
    backgroundColor: "#ff3b30",
  },

  botaoTexto: {
    fontWeight: "bold",
    color: "#000",
  },

});