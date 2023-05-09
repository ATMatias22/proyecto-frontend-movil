import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

import { Text as TextoDripsy } from 'dripsy';


export default function VerHistorial({ navigation }) {

  const [open, setOpen] = React.useState(false);

  function handleOnPress() {
    setOpen(!open);
  }




  /* const BorrarHistorial = async () => {
 
     let notification = JSON.stringify({
       // email: "ignacio.balastegui@davinci.edu.ar",
       // password: "Password123"
       email: mail,
       password: contraseña
     })
 
     let headers = {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     }
 
     const peticion = await axios.delete("http://192.168.0.176:8080/app_movil_sensor/api/device/"+{deviceCode}+"/clear-history", notification, headers)
       .then(async res => {
 
         navigation.navigate("MostrarSensores")
       })
       .catch(error =>
         console.log(error)
 
       );
 
   }*/


  return (
    <View style={Styles.container}>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        {/*<Text style={{ fontSize: 20 }}>Nombre del dispositivo</Text>*/}
        <TextoDripsy sx={{
          fontSize: [20, 25, 30],
        }}>Nombre del dispositivo</TextoDripsy>
      </View>

      <TouchableOpacity onPress={handleOnPress}>
        <View style={Styles.vaciarHistorial}>

          <TextoDripsy sx={{
            fontSize: [14, 16, 18],

          }}>Vaciar historial</TextoDripsy>
          <FontAwesomeIcon icon={faTrash} style={Styles.icono} />

        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={Styles.modalView}>

            <Text>¿Seguro que quiere vaciar el historial?</Text>

            <View style={{ flexDirection: "row", marginTop: 20 }}>

              <View >
                <Boton text="Aceptar"
                  // onPress={() => BorrarHistorial()}
                  onPress={() => navigation.navigate('InfoDispositivo')}
                  type="aceptar"
                />
              </View>

              <View >
                <Boton text="Cancelar"
                  onPress={handleOnPress}
                  type="cancelar"
                />
              </View>

            </View>

          </View>
        </View>

      </Modal>


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
    flexDirection: "row",
    paddingLeft: 50,
    paddingRight: 50,
    alignSelf: "center",
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
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    padding: 25,
    width: "93%",
    showOffSet: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7
  }
})