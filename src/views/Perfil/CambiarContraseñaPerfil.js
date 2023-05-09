import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";

import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";

import { validatePassword } from "../../Helpers/Helpers";

export default function CambiarContraseñaPerfil({ navigation }) {
  const [data, setData] = React.useState({
    password: "",
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const [formData, setFormData] = React.useState(defaultFormValues());
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorNewPassword, setErrorNewPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };



  const changePassword = async (password, newPassword) => {

    let notification = JSON.stringify({
      // email: "ignacio.balastegui@davinci.edu.ar",
      // password: "Password123"
      password: password,
      newPassword: newPassword
    })

    const token = await AsyncStorage.getItem('@storage_Key');

    let headers = {
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    const peticion = await axios.put("http://192.168.0.176:8080/app_movil_sensor/api/user/modify-password", notification, headers)
      .then(async res => {

        //await AsyncStorage.setItem('@storage_Key', res.data.token);

        navigation.navigate("MostrarSensores")
      })
      .catch(error =>
        //console.log(error),
        //console.log(token),
        setErrorPassword("Acceso denegado."),
        setLoading(false)
      );

  }



  const cambiarContraseñaPerfil = () => {
    if (!validateData()) {
      setLoading(false);
      return;
    }
    //navigation.navigate("MostrarSensores");
    setLoading(true);
    setTimeout(async () => {
      changePassword(formData.password, formData.newPassword);
    }, 3000);
  };

  const validateData = () => {
    setErrorNewPassword("");
    setErrorPassword("");
    let isValid = true;

    /*if ((formData.password !== "hola123") & (formData.password !== "")) {
      setErrorPassword("Contraseña incorrecta.");
      isValid = false;
    }*/

    if (formData.password == "") {
      setErrorPassword("Debe ingresar la antigua contrasseña.");
      isValid = false;
    }

    if (formData.newPassword == "") {
      setErrorNewPassword("Debe ingresar una nueva contraseña.");
      isValid = false;
    }

    if (!validatePassword(formData.newPassword) & formData.newPassword !== "") {
      setErrorNewPassword("Contraseña invalida." + "\n" + "Debe tener al menos 8 coracteres, 1 mayuscula y 1 numero.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder="Ingresar contraseña actual"
            secureTextEntry={data.secureTextEntry ? true : false}
            errorMessage={errorPassword}
            onChange={(e) => onChange(e, "password")}
            defaultValue={formData.password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon icon={faEyeSlash} style={Styles.iconoOjo} />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={[Styles.iconoOjo, { marginLeft: 57 }]}
              />
            )}
          </TouchableOpacity>
        </View>
        {errorPassword !== null ? (
          <Text style={Styles.mensajeError}>{errorPassword}</Text>
        ) : null}

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder="Ingresar nueva contraseña"
            secureTextEntry={data.secureTextEntry ? true : false}
            errorMessage={errorNewPassword}
            onChange={(e) => onChange(e, "newPassword")}
            defaultValue={formData.newPassword}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={[Styles.iconoOjo, { marginLeft: 7 }]}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={[Styles.iconoOjo, { marginLeft: 57 }]}
              />
            )}
          </TouchableOpacity>
        </View>
        {errorNewPassword !== null ? (
          <Text style={Styles.mensajeError}>{errorNewPassword}</Text>
        ) : null}

        <View style={Styles.botonCambiarCont}>
          <Boton
            text={loading ? <ActivityIndicator color="#fff" size="large" />
              :
              "Cambiar contraseña"}
            onPress={() => cambiarContraseñaPerfil()}
            //onPress={() => navigation.navigate('InfoDispositivo')}
            type="principal"
          />
        </View>
      </View>
    </View>
  );
}

const defaultFormValues = () => {
  return { password: "", newPassword: "" };
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
  iconoOjo: {
    alignSelf: "flex-end",
    marginLeft: "auto",
    marginTop: 7,

  },
  botonCambiarCont: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
    marginBottom: 20,
  },
  mensajeError: {
    marginLeft: 40,
    color: "red",
  },
});
