import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

import { Text as TextoDripsy } from 'dripsy';

export default function VerHistorial({ navigation }) {
  return (
    <View style={Styles.container}>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        {/*<Text style={{ fontSize: 20 }}>Nombre del dispositivo</Text>*/}
        <TextoDripsy sx={{
          fontSize: [20, 25, 30],
        }}>Nombre del dispositivo</TextoDripsy>
      </View>

      <View style={Styles.vaciarHistorial}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text>Vaciar Historial</Text>
          <FontAwesomeIcon icon={faTrash} style={Styles.icono} />
        </TouchableOpacity>
        {/* <Boton text="Vaciar Historial"
          onClick={() => navigation.navigate('VerHistorial')}
type="secundario" />*/}
      </View>


      <View style={Styles.historialContainer}>

        <View style={Styles.historial2Container}>
          <View style={{ marginLeft: 5, marginRight: 5 }}>

            {/*<Text style={{ textAlign: "center", marginTop: 5 }}>Se ABRIÓ la puerta</Text>*/}
            <TextoDripsy sx={{
              fontSize: [14, 14, 16],
              textAlign: "center",
              marginTop: 1
            }}>Se ABRIÓ la puerta</TextoDripsy>

            <View style={{ flexDirection: "row" }}>
              {/*<Text style={{ fontSize: 10, padding: 5 }}>fecha</Text>*/}
              <TextoDripsy sx={{
                fontSize: [10, 12, 14],
                padding: 2
              }}>fecha</TextoDripsy>

              {/*<Text style={{ fontSize: 10, padding: 5, marginLeft: 175 }}>hora</Text>*/}
              <TextoDripsy sx={{
                fontSize: [10, 12, 14],
                padding: 2,
                marginLeft: "auto"
              }}>hora</TextoDripsy>
            </View>
          </View>
        </View>

        <View style={Styles.historial2Container}>
          <View style={{ marginLeft: 5, marginRight: 5 }}>

            {/*<Text style={{ textAlign: "center", marginTop: 5 }}>Se CERRÓ la puerta</Text>*/}
            <TextoDripsy sx={{
              fontSize: [14, 14, 16],
              textAlign: "center",
              marginTop: 1
            }}>Se CERRÓ la puerta</TextoDripsy>

            <View style={{ flexDirection: "row" }}>
              {/*<Text style={{ fontSize: 10, padding: 5 }}>fecha</Text>*/}
              <TextoDripsy sx={{
                fontSize: [10, 12, 14],
                padding: 2
              }}>fecha</TextoDripsy>

              {/*<Text style={{ fontSize: 10, padding: 5, marginLeft: 175 }}>hora</Text>*/}
              <TextoDripsy sx={{
                fontSize: [10, 12, 14],
                padding: 2,
                marginLeft: "auto"
              }}>hora</TextoDripsy>
            </View>
          </View>
        </View>

      </View>


    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  historialContainer: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    marginLeft: 17,
    marginRight: 17,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "#FF8800",
    borderWidth: 2,
  },

  
  historial2Container: {
    marginLeft: 17,
    marginRight: 17,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 30,
    backgroundColor: "#EDEAEA",
    borderColor: "#FF8800",
    borderRadius: 30
  },
  vaciarHistorial: {
    
    alignItems: "center",
    marginTop: 20,    
    backgroundColor: "#FF8800",
    padding: 15,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    
    
  },
  icono: {
    padding: 5,
    marginTop: 2,
    marginLeft: 5
  }
})