import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";

import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

import { Text as TextoDripsy } from "dripsy";

import { useEffect } from "react"; //----------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";


import DispositivoDueño from "../../Componentes/DispositivoDueño/DispositivoDueño";

export default function MostrarSensoresInvitado({ navigation }) {

  const [dispInvitado, setDispInvitado] = React.useState([]);

  const getObserverDevices = async () => {

    const token = await AsyncStorage.getItem('@storage_Key');
    let headers = {
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    const peticion = await axios.get("http://192.168.0.176:8080/app_movil_sensor/api/device/observed", headers)
      .then(async res => {

        setDispInvitado(res.data);

      })
      .catch(error =>
        console.log(error),

      );

  }


  useEffect(() => {
    //console.log("recargado")
    getObserverDevices();
  }, []);




  /*const unlinkObserver = async (mail, contraseña) => {

    let notification = JSON.stringify({

      email: mail,
      password: contraseña
    })

    let headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const peticion = await axios.post("http://192.168.0.176:8080/app_movil_sensor/api/device/"+"coddisp1"+"/unlink-observer", notification, headers)
      .then(async res => {

     
        //navigation.navigate("MostrarSensores")
      })
      .catch(error =>
        console.log(error)

      );

  }*/



  return (
    <View style={Styles.container}>
      <View style={Styles.seleccionDispositivo}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MostrarSensores")}
        >
          <TextoDripsy
            sx={{
              fontSize: [12, 14, 16],
              color: "#474B4E",
              //paddingLeft: 20,
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
              fontSize: [12, 14, 16],
              color: "#FF8800",
              paddingLeft: 20,
              fontWeight: "bold",
            }}
          >
            Dispositivos Vinculados
          </TextoDripsy>

        </TouchableOpacity>
      </View>

      <ScrollView>
        {dispInvitado.map((dato, index) => {

          return <DispositivoDueño key={index} nombreDisp={dato.deviceName} invitados={dato.linkedPersons}
            estadoWifi={dato.deviceWifiState} estadoDisp={dato.deviceStatus} nombreBoton="Ver historial" navegacion={() => 
              navigation.navigate("VerHistorial")} />

        })}
      </ScrollView>

      {/**reemplazar esto con un map--------------------------------------------------------------------------------- *
        <View style={Styles.dispositivo}>
          <View style={{ marginLeft: 5 }}>

            <TextoDripsy sx={Styles.textoDripsy}>
              Nombre del dispositivo
            </TextoDripsy>

            <TextoDripsy sx={Styles.textoDripsy}>
              Dueño del dispositivo
            </TextoDripsy>

            <TextoDripsy sx={Styles.textoDripsy}>
              Cantidad de personas vinculadas: X
            </TextoDripsy>
          </View>
          <View style={{ marginRight: 190, marginLeft: 10, marginTop: 10 }}>
            <Boton
              text="Ver historial"
              onPress={() => navigation.navigate("VerHistorial")}
              type="secundario"
            />
          </View>

          <View style={{ marginLeft: 90, flexDirection: "row", padding: 10 }}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faTrash} style={{ marginTop: 5 }} />
            </TouchableOpacity>

            <TextoDripsy sx={Styles.textoDripsy2}>EstadoWifi</TextoDripsy>

            <TextoDripsy sx={Styles.textoDripsy2}>Encendido/apagado</TextoDripsy>
          </View>


          {/**un modal conectado al tacho de basura *}
        </View>

     /**----------------------------------------------------------------------------------------------------------------- */}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  seleccionDispositivo: {
    //marginLeft: 10,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",

    agregarDispositivo: {
      marginLeft: 20,
      marginTop: 10,
      backgroundColor: "white",
      padding: 8,
      marginRight: "auto",
      borderRadius: 30,
    },
  },
  dispositivo: {
    padding: 5,
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderColor: "#FF8800",
  },
  texto: {
    fontSize: 10,
  },
  texto2: {
    fontSize: 8,
    paddingLeft: 10,
    paddingTop: 3,
  },

  botonIrVerHistorial: {
    textTransform: "uppercase",
    textAlign: "center",
    backgroundColor: "#FF8800",
    color: "white",
    padding: 7,
    borderRadius: 30,
  },
});