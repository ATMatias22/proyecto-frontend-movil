import * as React from 'react';

import Boton from "../Boton/Index"

import { View, StyleSheet, Text } from 'react-native';
import { Text as TextoDripsy } from "dripsy";

const DispositivoDueño = (props) => {


  return (

    <View style={Styles.dispositivo}>
      <View style={{ marginLeft: 5 }}>
        <TextoDripsy sx={Styles.texto}>
          Nombre del dispositivo : <TextoDripsy sx={Styles.datosDisp}>{props.nombreDisp}</TextoDripsy>
        </TextoDripsy>

        <TextoDripsy sx={Styles.texto}>
          Cantidad de personas vinculadas: {props.invitados}
        </TextoDripsy>
      </View>

      <View style={{ marginRight: 170, marginLeft: 0, marginTop: 15 }}>
        <Boton
          text={props.nombreBoton}
          onPress={props.navegacion}
          //onClick={() => navigation.navigate("InfoDispositivo")}
          type="secundario"
        />
      </View>

      <View style={{ marginLeft: 90, flexDirection: "row", padding: 10 }}>
        <TextoDripsy sx={Styles.texto2}>Estado Wifi:{props.estadoWifi} </TextoDripsy>

        <TextoDripsy sx={Styles.texto2}>Estado sensor: {props.estadoDisp} </TextoDripsy>

      </View>
    </View>

  );
}
export default DispositivoDueño;

const Styles = StyleSheet.create({
  dispositivo: {
    borderColor: "#FF8800",
    borderRadius: 30,
    borderWidth: 3,
    marginRight: 17,
    marginTop: 17,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    backgroundColor: "white",
  },
  texto: {
    fontSize: [12, 14, 16],
    paddingLeft: 10,
  },
  texto2: {
    fontSize: [10, 12, 14],
    paddingLeft: 20,
  },
  datosDisp: {
    fontSize: [14, 16, 18],
    paddingLeft: 10,
    color: "orange"
  }
})