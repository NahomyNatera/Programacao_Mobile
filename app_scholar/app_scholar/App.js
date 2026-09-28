import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

    const opciones = [
  { nome: "Alunos" },
  { nome: "Professores" },
  { nome: "Turmas" },
  { nome: "Cursos" },
  { nome: "Disciplinas" },
  { nome: "Matrículas" },
  { nome: "Responsáveis" },
  { nome: "Avaliações" },
  { nome: "Coordenadores" },
  { nome: "Boletim" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Home</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView 
      style={styles.scroll}
      contentContainerStyle={styles.content}>
        <View style={styles.logoArea}>
      showsVerticalScrollIndicator={true}>

          <Image source={require('./assets/logo.jpg')}
          style={styles.logo} />

          <View>
            <Text style={styles.logoTitle}>APP_SCHOLAR</Text>
            <Text style={styles.logoSubtitle}>
              Sistema Acadêmico Escolar
            </Text>
          </View>
        </View>

        <Text style={styles.welcome}>Bem-vindo!</Text>
        <Text style={styles.description}>
          informações academicas
        </Text>

        <View style={styles.grid}>
          {opciones.map((opcion, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => console.log(opcion.nombre)}
            >
              <MaterialCommunityIcons
                name={opcion.icono}
                size={43}
                color={opcion.color}
              />

              <Text style={styles.cardText}>
                {opcion.nombre || opcion.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="home" size={27} color="#315B91" />
          <Text style={styles.activeText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="information-circle-outline" size={27} color="#777" />
          <Text style={styles.bottomText}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFA",
  },

  header: {
    height: 100,
    backgroundColor: "#c0c0c0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 40,
  },

  content: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 120,
    alignItems: 'center',
  },

  logo: {
    width: 90,
    height: 100,
    resizeMode: 'Contain',
    alignSelf: 'center',
    marginTop: -10,
  },

  logoTitle: {
    color: "#000000",
    fontSize: 27,
    fontWeight: "bold",
    alignSelf: 'center',
  },

  logoSubtitle: {
    color: "#777",
    fontSize: 14,
    marginTop: 10,
    alignSelf: 'center',
  },

  welcome: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
    color: "#555",
  },

  description: {
    textAlign: "center",
    color: "#999",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 25,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 105,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  cardText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
    flexShrink: 1,
  },

  bottomBar: {
    height: 75,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  bottomItem: {
    alignItems: "center",
  },

  activeText: {
    color: "#000000",
    fontSize: 12,
    marginTop: 5,
  },

  bottomText: {
    color: "#000000",
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'center',
  },

  scroll: {
    flex: 1,
  }

});
