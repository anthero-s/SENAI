import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Perfil
        </Text>
      </View>

      <View style={styles.cartao}>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>
            A
          </Text>
        </View>

        <Text style={styles.nome}>
          Anthero
        </Text>

        <Text style={styles.email}>
          gamer@email.com
        </Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Jogos salvos
          </Text>

          <Text style={styles.infoValor}>
            4
          </Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Favorito
          </Text>

          <Text style={styles.infoValor}>
            GTA V
          </Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Membro desde
          </Text>

          <Text style={styles.infoValor}>
            2026
          </Text>
        </View>

      </View>

      <TouchableOpacity style={styles.botao}>

        <Text style={styles.botaoTexto}>
          Editar Perfil
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  header: {
    backgroundColor: "#1c1c1c",
    padding: 20,
  },

  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00ff88",
  },

  cartao: {
    backgroundColor: "#1e1e1e",
    margin: 16,
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#00ff88",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarTexto: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  email: {
    color: "#aaa",
    marginTop: 5,
    marginBottom: 20,
  },

  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#333",
    marginBottom: 15,
  },

  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },

  infoLabel: {
    color: "#bbb",
  },

  infoValor: {
    color: "#fff",
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: "#00ff88",
    marginHorizontal: 16,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  botaoTexto: {
    fontWeight: "bold",
    color: "#000",
  },

});
