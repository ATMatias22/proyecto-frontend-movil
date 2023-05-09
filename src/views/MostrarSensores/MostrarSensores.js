import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";

import { Text as TextoDripsy } from "dripsy";

import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import { useEffect } from "react"; //----------------------------------------


import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";


import DispositivoDueño from "../../Componentes/DispositivoDueño/DispositivoDueño";

export default function MostrarSensores({ navigation }) {

  const [dispUsuario, setDispUsuario] = React.useState([]);


  const getOwnerDevices = async () => {

    const token = await AsyncStorage.getItem('@storage_Key');
    let headers = {
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    const peticion = await axios.get("http://192.168.0.176:8080/app_movil_sensor/api/device/own", headers)
      .then(async res => {

        setDispUsuario(res.data);

      })
      .catch(error =>
        console.log(error),

      );

  }




  useEffect(() => {
    console.log("recargado")
    getOwnerDevices();
  }, []);

  return (
    <View style={Styles.container}>


      <View style={Styles.seleccionDispositivo}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MostrarSensores")}
        >
          <TextoDripsy
            sx={{
              fontSize: [12, 14, 16],
              color: "#FF8800",
              fontWeight: "bold",
            }}
          >
            Dispositivos en Propiedad
          </TextoDripsy>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MostrarSensoresInvitado")}
        >
          <TextoDripsy
            sx={{
              // fontSize: [0, 1, 2],
              fontSize: [12, 14, 16],
              color: "#474B4E",
              paddingLeft: 20,
            }}
          >
            Dispositivos Vinculados
          </TextoDripsy>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {dispUsuario.map((dato, index) => {

          return <DispositivoDueño key={index} nombreDisp={dato.deviceName} invitados={dato.linkedPersons}
            estadoWifi={dato.deviceWifiState} estadoDisp={dato.deviceStatus} nombreBoton="Ir al dispositivo" navegacion={() => 
              navigation.navigate("InfoDispositivo", { dispositivo: dato.deviceCode, nombre: dato.deviceName })} />

        })}
      </ScrollView>



      <View style={Styles.agregarDispositivo}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AgregarDispositivo")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </TouchableOpacity>
      </View>


    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  seleccionDispositivo: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  agregarDispositivo: {
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: "#FF8800",
    padding: 8,
    marginRight: "auto",
    borderRadius: 30,
    marginBottom: 5,
  },

});
