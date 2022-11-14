import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

export default function VerHistorial({ navigation }) {
  return (
    <View style={Styles.container}>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Nombre del dispositivo</Text>
      </View>

      <View style={Styles.vaciarHistorial}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text>Vaciar Historial</Text>
          <FontAwesomeIcon icon={faTrash} style={Styles.icono} />
        </TouchableOpacity>
      </View>


      <View style={Styles.historialContainer}>

        <View style={Styles.historial2Container}>
          <View style={{ marginLeft: 5, marginRight: 5 }}>

            <Text style={{ textAlign: "center", marginTop:5}}>Se ABRIÓ la puerta</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 10, padding: 5 }}>fecha</Text>
              <Text style={{ fontSize: 10, padding: 5, marginLeft: 175 }}>hora</Text>
            </View>
          </View>
        </View>

        <View style={Styles.historial2Container}>
          <View style={{ marginLeft: 5, marginRight: 5 }}>

            <Text style={{ textAlign: "center", marginTop:5}}>Se CERRÓ la puerta</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 10, padding: 5 }}>fecha</Text>
              <Text style={{ fontSize: 10, padding: 5, marginLeft: 175 }}>hora</Text>
            </View>
          </View>
        </View>

      </View>


    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1
  },
  historialContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal:20,
    padding:5,
    backgroundColor: "#f1f1f1",
    borderColor: "#f1f1f1"
  },
  historial2Container: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal:30,
    backgroundColor: "#fff",
    borderColor: "#fff"
  },
  vaciarHistorial: {
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 5,
    marginLeft: 110,
    marginRight: 110,
    borderRadius: 30
  },
  icono: {
    padding: 5,
    marginTop: 2,
    marginLeft: 5
  }
})