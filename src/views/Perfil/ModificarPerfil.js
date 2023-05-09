import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";
import Input from "../../Componentes/Input/Index";

import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons/faCakeCandles";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar"

import { validateEmail } from "../../Helpers/Helpers";

import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

import { useEffect } from "react"; //----------------------------------------

export default function ModificarPerfil({ navigation }) {

  const [formData, setFormData] = React.useState(defaultFormValues());
  const [errorNombre, setErrorNombre] = React.useState("");
  const [errorApellido, setErrorApellido] = React.useState("");
  const [errorMail, setErrorMail] = React.useState("");
  const [errorNacimiento, setErrorNacimiento] = React.useState("");
  const [errorNacionalidad, setErrorNacionalidad] = React.useState("");
  const [loading, setLoading] = React.useState(false)


  const [open, setOpen] = React.useState(false); //abre y cierra el modal
  const [abrir, setAbrir] = React.useState(false);

  const [date, setDate] = React.useState(new Date()); //variable de date

  const today = getToday();

  const [isSelected, setIsSelected] = React.useState(false);


  function handleOnPress() {
    setOpen(!open);
  }

  function handleOnPress2() {
    setAbrir(!abrir);
  }

  function onDateSelected(value) {
    setDate(value);
    setIsSelected(true);
  }

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const [nombre, getNombre] = React.useState("");
  const [apellido, getApellido] = React.useState("");
  const [mail, getMail] = React.useState("");
  const [nacimiento, getNacimiento] = React.useState("");
  const [nacionalidad, getNacionalidad] = React.useState("");


  const getUserData = async () => {

   /* let notification = JSON.stringify({
      name: nombre,
      lastname: apellido,
      nationality: nacionalidad,
      dateOfBirth: nacimiento,
      email: mail
    })*/

    const token = await AsyncStorage.getItem('@storage_Key');
    let headers = {
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    const peticion = await axios.get("http://192.168.0.176:8080/app_movil_sensor/api/user", headers)
      .then(async res => {

        //navigation.navigate("Perfil")
        getNombre(res.data.name);
        getApellido(res.data.lastname);
        getMail(res.data.email);
        getNacimiento(res.data.dateOfBirth);
        getNacionalidad(res.data.nationality);

      })
      .catch(error =>

        setErrorMail("Acceso denegado."),
        setLoading(false)
      );

  }



  const changeUserData = async (nombre, apellido, nacionalidad, nacimiento, mail) => {

    let notification = JSON.stringify({
      name: nombre,
      lastname: apellido,
      nationality: nacionalidad,
      dateOfBirth: nacimiento,
      email: mail
    })

    const token = await AsyncStorage.getItem('@storage_Key');
    let headers = {
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    const peticion = await axios.put("http://192.168.0.176:8080/app_movil_sensor/api/user/modify-data", notification, headers)
      .then(async res => {


        navigation.navigate("Perfil")
      })
      .catch(error =>

        setErrorMail("Acceso denegado."),
        setLoading(false)
      );

  }



  const modificarDatosPerfil = () => {
    if (!validateData()) {
      setLoading(false)
      return;
    }
    //navigation.navigate("MostrarSensores");
    // setLoading(true);
    /* setTimeout(async () => {
       changeUserData(formData.nombre, formData.apellido, formData.nacionalidad, "21/04/2021", formData.mail);
     }, 3000);*/
    handleOnPress2();
  };

  const validateData = () => {
    setErrorNombre("");
    setErrorApellido("");
    setErrorMail("");
    setErrorNacimiento("");
    setErrorNacionalidad("");
    let isValid = true;

    if (formData.nombre == "") {
      setErrorNombre("Debes ingresar un nombre.");
      isValid = false;
    }
    if (formData.apellido == "") {
      setErrorApellido("Debes ingresar un apellido.");
      isValid = false;
    }
    if (formData.mail == "") {
      setErrorMail("Debes ingresar un mail.");
      isValid = false;
    }
    if (!validateEmail(formData.mail) & (formData.mail !== "")) {
      setErrorMail("Debes ingresar un email valido.");
      isValid = false;
    }
    if (isSelected == false) {
      setErrorNacimiento("Debes ingresar una fecha de nacimiento")
      isValid = false;
    }
    if (date >= today) {
      setErrorNacimiento("Debes ingresar una fecha de nacimiento valida")
      isValid = false;
    }
    if (formData.nacionalidad == "") {
      setErrorNacionalidad("Debes ingresar una nacionalidad.");
      isValid = false;
    }

    return isValid;
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.formContainer}>
          {/*<Input
                    placeholder="Nombre original"
                    icono={
                        <FontAwesomeIcon icon={faUser} />
                    }
                />*/}

          <View style={Styles.input}>
            <FontAwesomeIcon icon={faUser} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese su nombre"
              autoCapitalize="none"
              errorMessage={errorNombre}
              onChange={(e) => onChange(e, "nombre")}
              defaultValue={nombre}
            />
          </View>
          {errorNombre !== null ? (
            <Text style={Styles.mensajeError}>{errorNombre}</Text>
          ) : null}

          {/*<Input
                    placeholder="Apellido original"
                    icono={
                        <FontAwesomeIcon icon={faUser} />
                    }
                />*/}

          <View style={Styles.input}>
            <FontAwesomeIcon icon={faUser} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese su apellido"
              autoCapitalize="none"
              errorMessage={errorApellido}
              onChange={(e) => onChange(e, "apellido")}
              defaultValue={apellido}
            />
          </View>
          {errorApellido !== null ? (
            <Text style={Styles.mensajeError}>{errorApellido}</Text>
          ) : null}

          {/*<Input
                    placeholder="Mail original"
                    icono={
                        <FontAwesomeIcon icon={faEnvelope} />
                    }
                />*/}

          <View style={Styles.input}>
            <FontAwesomeIcon icon={faEnvelope} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese su mail"
              autoCapitalize="none"
              errorMessage={errorMail}
              onChange={(e) => onChange(e, "mail")}
              defaultValue={mail}
            />
          </View>
          {errorMail !== null ? (
            <Text style={Styles.mensajeError}>{errorMail}</Text>
          ) : null}

          <View style={Styles.input}>
            <FontAwesomeIcon icon={faCakeCandles} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese fecha"
              editable={false}
              errorMessage={errorNacimiento}
              onChange={(e) => onChange(e, "nacimiento")}
              value={date == null ? "" : date}
              defaultValue={nacimiento}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <FontAwesomeIcon icon={faCalendar} style={[Styles.icono, { marginLeft: 140 }]} />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={open}
            >
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={Styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    onSelectedChange={date => {
                      onDateSelected(date)
                    }}
                    options={{
                      textFontSize: 13,
                      selectedTextColor: "#fff",
                      mainColor: "#F47228",
                      backgroundColor: "#f1f1f1",
                      textSecondaryColor: "#F4722B"
                    }}
                    style={{ borderRadius: 20 }}
                  />

                  <TouchableOpacity onPress={handleOnPress}>
                    <Text style={{ marginTop: 10, marginBottom: -10, color: "#F4722B" }} >
                      Cerrar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

          </View>
          {errorNacimiento !== null ? (
            <Text style={Styles.mensajeError}>{errorNacimiento}</Text>
          ) : null}


          <View style={Styles.input}>
            <FontAwesomeIcon icon={faFlag} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese su nacionalidad"
              autoCapitalize="none"
              errorMessage={errorNacionalidad}
              onChange={(e) => onChange(e, "nacionalidad")}
              defaultValue={nacionalidad}
            />
          </View>
          {errorNacionalidad !== null ? (
            <Text style={Styles.mensajeError}>{errorNacionalidad}</Text>
          ) : null}

          <View style={Styles.botonModificarPerfil}>

            <Boton
              text={loading ? <ActivityIndicator color="#fff" size="large" />
                :
                "Modificar perfil"}
              onPress={() => modificarDatosPerfil()}
              //   onPress={() => navigation.navigate('MostrarSensores')}
              type="principal"
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={abrir}
          >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={Styles.modalView}>

                <Text style={{ textAlign: "center", marginTop: 10 }}>¿Seguro que quiere modificar su perfil?</Text>


                <View style={{ flexDirection: "row", marginTop: 20, }}>
                  <View >
                    <Boton text="Aceptar"
                      onPress={() => changeUserData(formData.nombre, formData.apellido, formData.nacionalidad, "21/04/2021", formData.mail)}
                      type="aceptar"
                    />
                  </View>

                  <View >
                    <Boton text="Cancelar"
                      onPress={handleOnPress2}
                      type="cancelar"
                    />
                  </View>
                </View>

              </View>
            </View>

          </Modal>

        </View>
      </ScrollView>
    </View>
  );
}

const defaultFormValues = () => {
  return {
    nombre: "",
    apellido: "",
    mail: "",
    nacimiento: "",
    nacionalidad: "",
  };
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  formContainer: {
    marginTop: 20,
    marginLeft: 17,
    marginRight: 17,
    padding: 5,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: "#FF8800",
    backgroundColor: "withe",
  },
  input: {
    marginBottom: 10,
    borderColor: "#FF8800",
    borderWidth: 3,
    borderRadius: 30,
    // paddingStart:30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#EDEAEA",
    flexDirection: "row",
  },
  icono: {
    marginRight: 5,
    marginTop: 5,
  },
  botonModificarPerfil: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
    marginBottom: 20,
  },
  mensajeError: {
    marginLeft: 40,
    color: "red",
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
