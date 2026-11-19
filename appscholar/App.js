import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ESTILOS PRINCIPALES
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
    alignItems: "center",
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 15,
  },

  logo: {
    width: 90,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -10,
  },

  logoTitle: {
    color: "#000000",
    fontSize: 27,
    fontWeight: "bold",
    alignSelf: "center",
  },

  logoSubtitle: {
    color: "#777",
    fontSize: 14,
    marginTop: 10,
    alignSelf: "center",
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

  alunosContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 25,
  },

  alunosBotao: {
    width: "100%",
    minHeight: 75,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  alunosBotaoTexto: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000000",
    marginLeft: 12,
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
    alignSelf: "center",
  },

  scroll: {
    flex: 1,
  },

  sobreContent: {
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 30,
  },

  sobreIntro: {
    alignItems: "center",
    paddingBottom: 15,
  },

  sobreLogo: {
    width: 88,
    height: 88,
    borderRadius: 16,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  sobreNome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000000",
  },

  sobreLinha: {
    height: 1,
    backgroundColor: "#e5e5e5",
    marginVertical: 12,
  },

  sobreSecao: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 12,
    gap: 12,
  },

  sobreTexto: {
    flex: 1,
  },

  sobreTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },

  sobreDescricao: {
    fontSize: 12,
    color: "#666666",
    lineHeight: 18,
  },

  sobreInstituicao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 8,
  },
});

// ESTILOS DA TELA EDITAR ALUNOS
const editarAlunosStyles = StyleSheet.create({
  conteudo: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 30,
  },

  tituloLista: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  descricao: {
    color: "#666666",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 14,
  },

  linhaPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },

  caixaPesquisa: {
    flex: 1,
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 5,
    paddingHorizontal: 9,
  },

  inputPesquisa: {
    flex: 1,
    color: "#333333",
    fontSize: 12,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },

  botaoFiltro: {
    width: 40,
    height: 40,
    backgroundColor: "#C0C0C0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoNovo: {
    alignSelf: "flex-end",
    minHeight: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0C0C0",
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  textoBotaoNovo: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
});

// ESTILOS DA TELA CADASTRO
const cadastroStyles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F8FAFA",
  },

  topo: {
    minHeight: 55,
    backgroundColor: "#c0c0c0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  botaoVoltar: {
    paddingRight: 10,
  },

  voltar: {
    color: "#fff",
    fontSize: 27,
  },

  titulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  conteudo: {
    padding: 18,
    paddingBottom: 30,
  },

  subtitulo: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },

  descricao: {
    color: "#666",
    fontSize: 12,
    marginBottom: 12,
  },

  campo: {
    marginBottom: 9,
  },

  label: {
    color: "#333",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },

  input: {
    minHeight: 39,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 7,
    fontSize: 13,
    color: "#333",
  },

  seletorCaixa: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 5,
    overflow: "hidden",
  },

  seletorBotao: {
    minHeight: 39,
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  setaSeletor: {
    fontSize: 18,
    color: "#000000",
  },

  opcaoSeletor: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: "#000000",
    backgroundColor: "#fff",
  },

  opcaoTexto: {
    color: "#333",
    fontSize: 13,
  },

  acoes: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  cancelar: {
    flex: 1,
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  salvar: {
    flex: 1,
    minHeight: 40,
    borderColor: "#000000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  textoCancelar: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 13,
  },

  textoSalvar: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 13,
  },
});

// OPCOES DO MENU
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

// TELA PRINCIPAL
export default function App() {
  const [pagina, setPagina] = useState("Home");

  const [alunoForm, setAlunoForm] = useState({
    nome: "",
    nascimento: "",
    cpf: "",
    ra: "",
    email: "",
    telefone: "",
    curso: "",
    turma: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      {pagina === "CadastroAluno" ? (
        <CadastroAlunoScreen
          dados={alunoForm}
          setDados={setAlunoForm}
          onVoltar={() => setPagina("Alunos")}
        />
      ) : pagina === "EditarAluno" ? (
        <EditarAlunoScreen
          dados={alunoForm}
          setDados={setAlunoForm}
          onVoltar={() => setPagina("Alunos")}
        />
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                if (pagina === "EditarAlunos") {
                  setPagina("Alunos");
                } else if (pagina === "Alunos") {
                  setPagina("Home");
                }
              }}
            >
              <Ionicons
                name={pagina === "EditarAlunos" ? "arrow-back" : "menu"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              {pagina === "EditarAlunos" ? "Alunos" : pagina}
            </Text>

            <View style={{ width: 30 }} />
          </View>

          {pagina === "Home" ? (
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.content}
            >
              <View style={styles.logoArea}>
                <Image
                  source={require("./assets/logo.jpg")}
                  style={styles.logo}
                />

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
                    onPress={() => {
                      if (opcion.nome === "Alunos") {
                        setPagina("Alunos");
                      }
                    }}
                  >
                    <Text style={styles.cardText}>
                      {opcion.nome}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : pagina === "Sobre" ? (
            <SobreScreen />
          ) : pagina === "EditarAlunos" ? (
            <EditarAlunosScreen
              onVoltar={() => setPagina("Alunos")}
              onNovoAluno={() => setPagina("CadastroAluno")}
            />
          ) : (
            <AlunosScreen
              onCadastrar={() => setPagina("CadastroAluno")}
              onEditar={() => setPagina("EditarAluno")}
              onAbrirLista={() => setPagina("EditarAlunos")}
            />
          )}

          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.bottomItem}
              onPress={() => setPagina("Home")}
            >
              <Ionicons
                name="home"
                size={27}
                color={pagina === "Home" ? "#315B91" : "#777"}
              />

              <Text
                style={
                  pagina === "Home"
                    ? styles.activeText
                    : styles.bottomText
                }
              >
                Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.bottomItem}
              onPress={() => setPagina("Sobre")}
            >
              <Ionicons
                name="information-circle-outline"
                size={27}
                color={pagina === "Sobre" ? "#315B91" : "#777"}
              />

              <Text
                style={
                  pagina === "Sobre"
                    ? styles.activeText
                    : styles.bottomText
                }
              >
                Sobre
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

// TELA ALUNOS
function AlunosScreen({ onCadastrar, onEditar, onAbrirLista }) {
  return (
    <View style={styles.alunosContainer}>
      <TouchableOpacity
        style={styles.alunosBotao}
        onPress={onAbrirLista}
      >
        <Text style={styles.alunosBotaoTexto}>Alunos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.alunosBotao}
        onPress={onCadastrar}
      >
        <Text style={styles.alunosBotaoTexto}>
          Cadastrar Aluno
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.alunosBotao}
        onPress={onEditar}
      >
        <Text style={styles.alunosBotaoTexto}>
          Editar Aluno
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// NOVA TELA EDITAR ALUNOS
function EditarAlunosScreen({ onVoltar, onNovoAluno }) {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={editarAlunosStyles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={editarAlunosStyles.tituloLista}>
        Lista de Alunos
      </Text>

      <Text style={editarAlunosStyles.descricao}>
        Pesquise ou selecione um aluno para visualizar, editar ou excluir.
      </Text>

      <View style={editarAlunosStyles.linhaPesquisa}>
        <View style={editarAlunosStyles.caixaPesquisa}>
          <Ionicons name="search" size={17} color="#999" />

          <TextInput
            style={editarAlunosStyles.inputPesquisa}
            value={pesquisa}
            onChangeText={setPesquisa}
            placeholder="Pesquisar por nome, RA ou CPF..."
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity
          style={editarAlunosStyles.botaoFiltro}
          onPress={() => {}}
        >
          <Ionicons name="filter" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={editarAlunosStyles.botaoNovo}
        onPress={onNovoAluno}
      >
        <Ionicons name="add" size={18} color="#fff" />

        <Text style={editarAlunosStyles.textoBotaoNovo}>
          Novo Aluno
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// TELA CADASTRO ALUNO
function CadastroAlunoScreen({ dados, setDados, onVoltar }) {
  const atualizar = (campo, valor) => {
    setDados((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  };

  const salvar = () => {
    if (
      !dados.nome.trim() ||
      !dados.nascimento.trim() ||
      !dados.cpf.trim() ||
      !dados.ra.trim() ||
      !dados.email.trim() ||
      !dados.curso ||
      !dados.turma
    ) {
      return;
    }

    onVoltar();
  };

  const campo = (
    label,
    chave,
    placeholder,
    teclado = "default"
  ) => (
    <View style={cadastroStyles.campo} key={chave}>
      <Text style={cadastroStyles.label}>{label}</Text>

      <TextInput
        style={cadastroStyles.input}
        value={dados[chave]}
        onChangeText={(valor) => atualizar(chave, valor)}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={teclado}
        autoCapitalize={
          chave === "email" ? "none" : "sentences"
        }
      />
    </View>
  );

  const seletor = (label, chave, opcoesLista) => (
    <View style={cadastroStyles.campo} key={chave}>
      <Text style={cadastroStyles.label}>{label}</Text>

      <View style={cadastroStyles.seletorCaixa}>
        <PickerCampo
          valor={dados[chave]}
          aoMudar={(valor) => atualizar(chave, valor)}
          opcoes={opcoesLista}
          placeholder={`Selecione ${label.toLowerCase()}`}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={cadastroStyles.tela}>
      <View style={cadastroStyles.topo}>
        <TouchableOpacity
          onPress={onVoltar}
          style={cadastroStyles.botaoVoltar}
        >
          <Text style={cadastroStyles.voltar}>←</Text>
        </TouchableOpacity>

        <Text style={cadastroStyles.titulo}>
          Cadastro de Aluno
        </Text>

        <View style={{ width: 25 }} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={cadastroStyles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={cadastroStyles.subtitulo}>
          Dados do Aluno
        </Text>

        <Text style={cadastroStyles.descricao}>
          Preencha as informações abaixo para cadastrar um novo aluno.
        </Text>

        {campo(
          "Nome completo *",
          "nome",
          "Digite o nome completo"
        )}

        {campo(
          "Data de nascimento *",
          "nascimento",
          "dd/mm/aaaa"
        )}

        {campo(
          "CPF *",
          "cpf",
          "000.000.000-00",
          "numeric"
        )}

        {campo(
          "RA *",
          "ra",
          "Digite o RA do aluno"
        )}

        {campo(
          "E-mail *",
          "email",
          "Digite o e-mail",
          "email-address"
        )}

        {campo(
          "Telefone",
          "telefone",
          "(12) 99999-9999",
          "phone-pad"
        )}

        {seletor("Curso *", "curso", [
          "Administração",
          "Desenvolvimento de sistemas",
          "Enfermagem",
          "Logistica",
          "Ensino Médio",
        ])}

        {seletor("Turma *", "turma", [
          "1º A",
          "1º B",
          "2º A",
          "2º B",
          "3º A",
          "3º B",
        ])}

        <View style={cadastroStyles.acoes}>
          <TouchableOpacity
            style={cadastroStyles.cancelar}
            onPress={onVoltar}
          >
            <Text style={cadastroStyles.textoCancelar}>
              Cancelar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={cadastroStyles.salvar}
            onPress={salvar}
          >
            <Text style={cadastroStyles.textoSalvar}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// TELA EDITAR ALUNO
function EditarAlunoScreen({ dados, setDados, onVoltar }) {
  const atualizar = (campo, valor) => {
    setDados((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  };

  const excluir = () => {
    setDados({
      nome: "",
      nascimento: "",
      cpf: "",
      ra: "",
      email: "",
      telefone: "",
      curso: "",
      turma: "",
    });

    onVoltar();
  };

  const salvar = () => {
    if (
      !dados.nome.trim() ||
      !dados.nascimento.trim() ||
      !dados.cpf.trim() ||
      !dados.ra.trim() ||
      !dados.email.trim() ||
      !dados.curso ||
      !dados.turma
    ) {
      return;
    }

    onVoltar();
  };

  const campo = (
    label,
    chave,
    placeholder,
    teclado = "default"
  ) => (
    <View style={cadastroStyles.campo} key={chave}>
      <Text style={cadastroStyles.label}>{label}</Text>

      <TextInput
        style={cadastroStyles.input}
        value={dados[chave]}
        onChangeText={(valor) => atualizar(chave, valor)}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={teclado}
        autoCapitalize={
          chave === "email" ? "none" : "sentences"
        }
      />
    </View>
  );

  const seletor = (label, chave, opcoesLista) => (
    <View style={cadastroStyles.campo} key={chave}>
      <Text style={cadastroStyles.label}>{label}</Text>

      <View style={cadastroStyles.seletorCaixa}>
        <PickerCampo
          valor={dados[chave]}
          aoMudar={(valor) => atualizar(chave, valor)}
          opcoes={opcoesLista}
          placeholder={`Selecione ${label.toLowerCase()}`}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={cadastroStyles.tela}>
      <View style={cadastroStyles.topo}>
        <TouchableOpacity
          onPress={onVoltar}
          style={cadastroStyles.botaoVoltar}
        >
          <Ionicons
            name="arrow-back"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={cadastroStyles.titulo}>
          Editar Aluno
        </Text>

        <TouchableOpacity
          onPress={excluir}
          style={cadastroStyles.botaoVoltar}
        >
          <Ionicons
            name="trash-outline"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={cadastroStyles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={cadastroStyles.subtitulo}>
          Dados do Aluno
        </Text>

        <Text style={cadastroStyles.descricao}>
          Atualize as informações do aluno e clique em salvar.
        </Text>

        {campo(
          "Nome completo *",
          "nome",
          "Digite o nome completo"
        )}

        {campo(
          "Data de nascimento *",
          "nascimento",
          "dd/mm/aaaa"
        )}

        {campo(
          "CPF *",
          "cpf",
          "000.000.000-00",
          "numeric"
        )}

        {campo(
          "RA *",
          "ra",
          "Digite o RA do aluno"
        )}

        {campo(
          "E-mail *",
          "email",
          "Digite o e-mail",
          "email-address"
        )}

        {campo(
          "Telefone",
          "telefone",
          "(12) 99999-9999",
          "phone-pad"
        )}

        {seletor("Curso *", "curso", [
          "Administração",
          "Desenvolvimento de sistemas",
          "Enfermagem",
          "Logistica",
          "Ensino Médio",
        ])}

        {seletor("Turma *", "turma", [
          "1º A",
          "1º B",
          "2º A",
          "2º B",
          "3º A",
          "3º B",
        ])}

        <View style={cadastroStyles.acoes}>
          <TouchableOpacity
            style={cadastroStyles.cancelar}
            onPress={onVoltar}
          >
            <Text style={cadastroStyles.textoCancelar}>
              Cancelar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={cadastroStyles.salvar}
            onPress={salvar}
          >
            <Ionicons
              name="save"
              size={15}
              color="#000"
            />

            <Text style={cadastroStyles.textoSalvar}>
              {" "}Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// CAMPO DE SELECAO
function PickerCampo({ valor, aoMudar, opcoes, placeholder }) {
  const [aberto, setAberto] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={cadastroStyles.seletorBotao}
        onPress={() => setAberto(!aberto)}
      >
        <Text
          style={{
            color: valor ? "#333" : "#999",
            fontSize: 13,
          }}
        >
          {valor || placeholder}
        </Text>

        <Text style={cadastroStyles.setaSeletor}>
          {aberto ? "⌃" : "⌄"}
        </Text>
      </TouchableOpacity>

      {aberto &&
        opcoes.map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={cadastroStyles.opcaoSeletor}
            onPress={() => {
              aoMudar(opcao);
              setAberto(false);
            }}
          >
            <Text style={cadastroStyles.opcaoTexto}>
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

// TELA SOBRE
function SobreScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.sobreContent}
    >
      <View style={styles.sobreIntro}>
        <View style={styles.sobreLogo}>
          <Image
            source={require("./assets/logo.jpg")}
            style={styles.logo}
          />
        </View>

        <Text style={styles.sobreNome}>
          APP_SCHOLAR
        </Text>

        <Text style={styles.logoSubtitle}>
          Sistema Acadêmico Escolar
        </Text>
      </View>

      <View style={styles.sobreLinha} />

      <View style={styles.sobreSecao}>
        <View style={styles.sobreTexto}>
          <Text style={styles.sobreTitulo}>
            Sobre o App
          </Text>

          <Text style={styles.sobreDescricao}>
            O App_Scholar é um sistema acadêmico desenvolvido
            para auxiliar escolas na gestão de alunos,
            professores, turmas, cursos, avaliações e muito mais.
          </Text>
        </View>
      </View>

      <View style={styles.sobreSecao}>
        <View style={styles.sobreTexto}>
          <Text style={styles.sobreTitulo}>
            Objetivo
          </Text>

          <Text style={styles.sobreDescricao}>
            Facilitar o gerenciamento das informações acadêmicas,
            promovendo organização, agilidade e segurança.
          </Text>
        </View>
      </View>

      <View style={styles.sobreSecao}>
        <View style={styles.sobreTexto}>
          <Text style={styles.sobreTitulo}>
            Tecnologias
          </Text>

          <Text style={styles.sobreDescricao}>
            Aplicativo desenvolvido com React Native (Expo).
            A integração com MySQL poderá ser utilizada
            por meio de um backend.
          </Text>
        </View>
      </View>

      <View style={styles.sobreLinha} />

      <View style={styles.sobreInstituicao}>
        <View>
          <Text style={styles.sobreTitulo}>
            ETEC
          </Text>

          <Text style={styles.sobreDescricao}>
            Educação, Tecnologia e Futuro
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}