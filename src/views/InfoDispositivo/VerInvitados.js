import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";

import { Text as TextoDripsy } from "dripsy";

import Boton from '../../Componentes/Boton/Index';

import { useRoute } from '@react-navigation/native';

export default function VerInvitados({ navigation }) {

  const [open, setOpen] = React.useState(false);

  function handleOnPress() {
    setOpen(!open);
  }

  const route = useRoute();

  const nombreDisp = route.params.nombre;
  const codeDisp = route.params.codigo;





  //getUser

  /*const deleteObserver = async (mail) => {

    let notification = JSON.stringify({
      email: mail,
      code: codeDisp
    })

    let headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }


    const peticion = await axios.delete("http://192.168.0.176:8080/app_movil_sensor/api/device/" + codeDisp + "/user/" + { email }, notification, headers)
      .then(async res => {

        navigation.navigate("verInvitados");

      })
      .catch(error =>
        console.log(error)

      );

  }*/


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
          {nombreDisp}
        </TextoDripsy>
      </View>

      {/**cambiar esto por un map */}
      {/**---------------------------------------------------------------------------------------------------------------- */}
      <View style={Styles.invitadosContainer}>
        <View style={Styles.datosInvitadoContainer}>

          <TextoDripsy
            sx={{
              fontSize: [12, 14, 16],
              marginLeft: 1,
              paddingTop: 3,
            }}
          >
            Nombre de invitado:  {/** nombreInvitado   */}
          </TextoDripsy>


          <View style={{ flexDirection: "row" }}>

            <TextoDripsy
              sx={{
                fontSize: [10, 12, 14],
                marginLeft: 1,
                padding: 2,
                paddingLeft: 2,
              }}
            >
              Fecha de agregacion:  {/**  fechaAgregacion   */}
            </TextoDripsy>

            <TouchableOpacity style={Styles.icono} onPress={handleOnPress}>
              <FontAwesomeIcon icon={faTrash} />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={open}
            >
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={Styles.modalView}>

                  <Text>¿Esta seguro de querer desvincular a "AMIGO" del dispositivo: {nombreDisp}?</Text>

                  <View style={{ flexDirection: "row", marginTop: 20 }}>

                    <View >
                      <Boton text="Aceptar"
                      /**debe borrar al invitado */
                        onPress={() => navigation.goBack()}
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

          </View>
        </View>

        <View style={Styles.agregarInvitado}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AgregarInvitado", { codigoDisp: codeDisp })}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </TouchableOpacity>
        </View>
      </View>


      {/**---------------------------------------------------------------------------------------------------------------- */}
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
    marginLeft: "auto",
    marginRight: 10,
  },
  agregarInvitado: {
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "#FF8800",
    padding: 8,
    marginRight: "auto",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FF8800",
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
});
