import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {

  return (
    <View style={styles.card}>

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.texto}>
        Genero: {genero}
      </Text>

      <Text style={styles.texto}>
        Plataforma: {plataforma}
      </Text>

      <Text style={styles.texto}>
        Nota: {nota}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#1A1A1A",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  texto: {
    fontSize: 14,
    color: "#BBBBBB",
    marginBottom: 4,
  },

});

