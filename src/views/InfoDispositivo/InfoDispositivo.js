import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'

export default function InfoDispositivo({ navigation }) {
  return (
    <View style={Styles.container}>

      <View style={Styles.nombreDispositivo}>
        <Text style={Styles.texto}>Nombre del dispositivo</Text>
        <TouchableOpacity style={{ paddingLeft: 5 }}>
          <FontAwesomeIcon icon={faPencil} />
        </TouchableOpacity>
      </View>

      <View style={Styles.botonesEncendidoApagado}>
        <View style={{marginLeft: 10, marginRight: -10}}>
      <Boton text="Encender" 
            onClick={() => navigation.navigate('InfoDispositivo')} 
            type= "aceptar"
            />
            </View>
        <View style={{ marginTop: 30 }}>
        <Boton text="Apagar" 
            onClick={() => navigation.navigate('InfoDispositivo')} 
            type= "cancelar"
            />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>

        <Text style={Styles.texto}>¿Qué desea hacer?</Text>

      </View>

      <View style={Styles.opciones}>
        <Boton text="Cambiar contraseña" 
        onClick={() => navigation.navigate('CambiarContraseña')} 
        type="principal"/>
        <View style={Styles.opcionesBotones}>
          <Boton text="Cambiar red wifi" 
          onClick={() => navigation.navigate('CambiarRedWifi')} 
          type="principal"/>
        </View>
        <View style={Styles.opcionesBotones}>
          <Boton text="Ver invitados" 
          onClick={() => navigation.navigate('VerInvitados')} 
          type="principal"/>
        </View>
        <View style={Styles.opcionesBotones}>
          <Boton text="Historial" 
          onClick={() => navigation.navigate('VerHistorial')} 
          type="principal"/>
        </View>
        <View style={Styles.opcionesBotones}>
          <Boton text="Eliminar dispositivo" 
          onClick={() => navigation.navigate('EliminarDispositivo')} 
          type="principal"/>
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
  nombreDispositivo: {
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 60,
    padding: 10
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold"
  },
  opciones: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 30
  },
  opcionesBotones: {
    marginTop: 20
  },
  botonesEncendidoApagado: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 15
  },

  botonE: {
textAlign: "center",
fontSize: 17,
backgroundColor: "rgb(17, 216, 17)",
color: "white",
padding: 10,
textTransform: "uppercase",
borderRadius: 30,
  },
  botonA: {
    textAlign: "center",
    fontSize: 17,
    backgroundColor: "red",
    color: "white",
    padding: 10,
    textTransform: "uppercase",
    borderRadius: 30, 
  }
})