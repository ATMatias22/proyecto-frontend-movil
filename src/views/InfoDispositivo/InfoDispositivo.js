import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

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
        <Button
          title='Encender'
        />
        <View style={{ marginTop: 30 }}>
          <Button
            title='Apagar'
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 60 }}>

        <Text style={Styles.texto}>¿Qué desea hacer?</Text>

      </View>

      <View style={Styles.opciones}>
        <Button
          title='Cambiar contraseña'
          onPress={() => navigation.navigate('CambiarContraseña')}
        />
        <View style={Styles.opcionesBotones}>
          <Button
            title='Cambiar red wifi'
            onPress={() => navigation.navigate('CambiarRedWifi')}
          />
        </View>
        <View style={Styles.opcionesBotones}>
          <Button
            title='Ver invitados'
            onPress={() => navigation.navigate('VerInvitados')}
          />
        </View>
        <View style={Styles.opcionesBotones}>
          <Button
            title='Historial'
            onPress={() => navigation.navigate('VerHistorial')}
          />
        </View>
        <View style={Styles.opcionesBotones}>
          <Button
            title='Eliminar sensor'
            onPress={() => navigation.navigate('EliminarDispositivo')}
          />
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
    marginTop: 40
  },
  opcionesBotones: {
    marginTop: 20
  },
  botonesEncendidoApagado: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 40
  }
})