import * as React from "react";

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  styles,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";
import Input from "../../Componentes/Input/Index";

import { Text as TextoDripsy } from "dripsy";

import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

import { validateEmail } from "../../Helpers/Helpers";

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";


export default function Login({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
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
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");


  const [loading, setLoading] = React.useState(false);

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const getTokenUsuario = async (mail, contraseña) => {

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

    const peticion = await axios.post("http://192.168.0.176:8080/app_movil_sensor/api/auth/login", notification, headers)
      .then(async res => {
        //console.log(res.data.token)
        await AsyncStorage.setItem('@storage_Key', res.data.token);
        // const prueba=  await AsyncStorage.getItem('@storage_Key');
        // console.log(prueba);
        navigation.navigate("MostrarSensores")
      })
      .catch(error =>
        console.log(error),
        setErrorEmail("Mail o contraseña incorrectos."),
        setLoading(false)
      );

  }

  const loginUser = () => {
    if (!validateData()) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setTimeout(async () => {
      getTokenUsuario(formData.email, formData.password);
    }, 3000);
    // navigation.navigate("MostrarSensores");
  };

  const validateData = () => {
    setErrorEmail("");
    setErrorPassword("");
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un email valido.");
      isValid = false;
    }
    if (formData.email == "") {
      setErrorEmail("Debe ingresar un email.");
      isValid = false;
    }
    /* if (
       (formData.email !== "ignacio@hola.com") &
       validateEmail(formData.email)
     ) {
       setErrorEmail("Email incorrecto.");
       isValid = false;
     }*/
    if (formData.password == "") {
      setErrorPassword("Debe ingresar una contraseña.");
      isValid = false;
    }
    /*if ((formData.password !== "123456") & (formData.password !== "")) {
      setErrorPassword("Contraseña incorrecta.");
      isValid = false;
    }*/

    return isValid;
  };


  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.logo}>
          <Image source={require("../../img/sensor3.png")} />
        </View>

        <View style={Styles.loginContainer}>

          <View style={Styles.input}>
            <FontAwesomeIcon icon={faUser} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese su mail"
              autoCapitalize="none"
              errorMessage={errorEmail}
              onChange={(e) => onChange(e, "email")}
              defaultValue={formData.email}
            />
          </View>
          {errorEmail !== null ? (
            <Text style={Styles.mensajeError}>{errorEmail}</Text>
          ) : null}

          <View style={Styles.input}>
            <FontAwesomeIcon icon={faLock} style={Styles.icono} />
            <TextInput
              placeholder="Ingrese su contraseña"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              errorMessage={errorPassword}
              onChange={(e) => onChange(e, "password")}
              defaultValue={formData.password}
            // value={form.contraseña}
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={[Styles.iconoOjo, { marginTop: 7 }]}
                />
                :
                <FontAwesomeIcon
                  icon={faEye}
                  style={[Styles.iconoOjo, { marginTop: 7, marginLeft: 48 }]}
                />
              }
            </TouchableOpacity>


          </View>
          {errorPassword !== null ? (
            <Text style={Styles.mensajeError}>{errorPassword}</Text>
          ) : null}

          <View style={{ marginLeft: 60, marginRight: 60, marginTop: 30 }}>
            <View>
              <Boton
                text={loading ? <ActivityIndicator color="#fff" size="large" />
                  :
                  "Ingresar"}
                onPress={() => loginUser()}
                //onClick={() => navigation.navigate("MostrarSensores")}
                type="principal"
              />
            </View>

            <View
              style={{
                marginTop: 20,
                fontWeight: "bold",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={Styles.texto}>¿No se ha registrado?</Text>

              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    paddingLeft: 20,
                    color: "#FF8800",
                    textShadowRadius: 3,
                  }}
                >
                  Registrarse
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const defaultFormValues = () => {
  return { email: "", password: "" };
};

const Styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "white",
    flex: 1,
  },
  logo: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  loginContainer: {
    marginLeft: 30,
    borderColor: "#FF8800",
    borderRadius: 30,
    borderWidth: 4,
    marginRight: 15,
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    //ingrese contraseña
    //marginBottom: ,
    borderColor: "#FF8800",
    borderWidth: 3,
    borderRadius: 30,
    paddingStart: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
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
    marginLeft: 5
  },
  texto: {
    fontWeight: "bold",
    fontSize: 10,
    paddingLeft: 10,
  },
  mensajeError: {
    marginLeft: 40,
    color: "red",
  },
});
