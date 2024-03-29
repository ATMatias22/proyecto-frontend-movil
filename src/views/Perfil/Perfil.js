import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

import { Text as TextoDripsy } from "dripsy";

export default function Perfil({ navigation }) {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.logo}>
          <Image source={require("../../img/sensor3.png")} />
        </View>

        <View style={{ marginTop: 30 }}>

          <View style={Styles.opcionesLetra}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("ModificarPerfil")}
            >
              {/*<Text>Cambiar datos</Text>*/}

              <TextoDripsy
                sx={Styles.texto}
              >
                Cambiar datos
              </TextoDripsy>

              <FontAwesomeIcon icon={faArrowRight} style={Styles.icono} />
            </TouchableOpacity>
          </View>

          <View style={Styles.opcionesLetra}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("CambiarContraseñaPerfil")}
            >
              {/*<Text>Cambiar contraseña</Text>*/}

              <TextoDripsy
                sx={Styles.texto}
              >
                Cambiar contraseña
              </TextoDripsy>

              <FontAwesomeIcon
                icon={faArrowRight}
                style={Styles.icono}
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.opcionesLetra}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("CambiarTema")}
            >
              {/*<Text>Cambiar tema</Text>*/}

              <TextoDripsy
                sx={Styles.texto}
              >
                Cambiar tema
              </TextoDripsy>

              <FontAwesomeIcon icon={faArrowRight} style={Styles.icono} />
            </TouchableOpacity>
          </View>

          <View style={Styles.opcionesLetra}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("EliminarPerfil")}
            >
              {/*<Text>Eliminar perfil</Text>*/}

              <TextoDripsy sx={Styles.texto}>
                Eliminar perfil
              </TextoDripsy>

              <FontAwesomeIcon icon={faTrash} style={Styles.icono} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "white",
    flex: 1,
  },
  logo: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  opciones: {
    alignItems: "center",
  },
  opcionesLetra: {
    padding: 20,
    paddingLeft: 50,
    backgroundColor: "white",
    //borderBottomWidth: 2,
    //borderTopWidth: 3,
    textTransform: "uppercase",
    //backgroundColor: "#f3f1f1",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#FF8800",
    borderRadius: 30,
  },
  icono: {
    //marginRight: 5,
    // marginTop: 5,
    // marginLeft: 180,
    alignSelf: "flex-end",
    marginLeft: "auto"
  },
  texto: {
    fontWeight: "bold",
    fontSize: [14, 16, 18],
    color: "#fff"
  },
});
