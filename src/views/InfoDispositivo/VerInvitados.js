import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";

import { Text as TextoDripsy } from "dripsy";

export default function VerInvitados({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        {/*<Text style={{ fontSize: 20 }}>Nombre del dispositivo</Text>*/}

        <TextoDripsy
          sx={{
            fontSize: [20, 25, 30],
            fontWeight: "bold",
            //backgroundColor: "#EDEAEA",
          }}
        >
          Nombre del dispositivo
        </TextoDripsy>
      </View>

      <View style={Styles.invitadosContainer}>
        <View style={Styles.datosInvitadoContainer}>
          {/*<Text style={Styles.texto}>Nombre de invitado</Text>*/}

          <TextoDripsy
            sx={{
              fontSize: [12, 14, 16],
              marginLeft: 1,
              paddingTop: 3,
            }}
          >
            Nombre de invitado:
          </TextoDripsy>

          <View style={{ flexDirection: "row" }}>
            {/*<Text style={Styles.texto2}>Fecha de agregacion</Text>*/}

            <TextoDripsy
              sx={{
                fontSize: [10, 12, 14],
                marginLeft: 1,
                padding: 2,
                paddingLeft: 2,
              }}
            >
              Fecha de agregacion:
            </TextoDripsy>

            <TouchableOpacity style={Styles.icono}>
              <FontAwesomeIcon icon={faTrash} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.agregarInvitado}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AgregarInvitado")}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  invitadosContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "withe",
    borderColor: "#FF8800",
    borderWidth: 2,
  },
  datosInvitadoContainer: {
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    flexDirection: "column",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FF8800",
  },
  texto: {
    marginLeft: 10,
    paddingTop: 5,
  },
  texto2: {
    marginLeft: 5,
    fontSize: 10,
    padding: 5,
    paddingLeft: 10,
    color: "#474B4E",
  },
  icono: {
    padding: 5,
    marginLeft: 170,
  },
  agregarInvitado: {
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 8,
    marginRight: "auto",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FF8800",
  },
});
